# veck.app Publish SOP

This site is a static site. There is no build step.

Repo path:
- `/Users/zhaobingkun/dev/vect/vect`

Primary branch:
- `main`

Remote:
- `origin git@github.com:zhaobingkun/veck.app.git`

## 1. Before You Edit

Open the repo:

```bash
cd /Users/zhaobingkun/dev/vect/vect
```

Check current status:

```bash
git status
```

Pull latest changes first if needed:

```bash
git pull origin main
```

## 2. Edit the Right Files

Common entry points:

- Homepage: `index.html`
- Play page: `play/index.html`
- FAQ page: `faq/index.html`
- Guide hub: `guides/index.html`
- News hub: `news/index.html`
- About page: `about/index.html`
- Contact page: `contact/index.html`
- Core styles: `assets/css/site.css`
- Shared JS: `assets/js/site.js`
- Sitemap: `sitemap.xml`

If you update a major page, also update:

- `title`
- `meta description`
- structured data if relevant
- internal links to related pages
- `sitemap.xml` `<lastmod>` for the changed URL

## 3. Local Checks Before Commit

Check what changed:

```bash
git diff --stat
git diff
```

If you changed HTML pages, do a quick scan for:

- broken placeholders
- fake social links
- old dates
- `Demo data` text
- wrong canonicals
- missing internal links

Useful searches:

```bash
rg -n "Demo data|layout testing|href=\"/\" aria-label=\"Facebook\"|href=\"/\" aria-label=\"X\"|href=\"/\" aria-label=\"Reddit\"" .
rg -n "<title>|meta name=\"description\"|canonical|dateModified|Last reviewed" index.html play/index.html faq/index.html guides about contact
```

## 4. Commit Changes

Stage everything:

```bash
git add .
```

Or stage selected files only:

```bash
git add index.html play/index.html faq/index.html sitemap.xml
```

Commit:

```bash
git commit -m "short clear message"
```

Examples:

```bash
git commit -m "Strengthen homepage and core SEO content"
git commit -m "Expand Veck.io troubleshooting guides"
git commit -m "Update FAQ and sitemap dates"
```

## 5. Publish to Production

Push to `main`:

```bash
git push origin main
```

If your hosting is connected to GitHub, pushing to `main` should trigger deployment.

## 6. After Publish

Confirm the site is live:

- `https://veck.app/`
- `https://veck.app/play/`
- `https://veck.app/faq/`
- any guide URLs you changed

Check that:

- page title changed as expected
- meta description is updated
- the page loads publicly
- no placeholder text is visible

## 7. Submit Key URLs in Search Console

For important changes, manually request indexing for:

- `https://veck.app/`
- `https://veck.app/play/`
- `https://veck.app/faq/`
- each major guide you updated

Steps:

1. Open Google Search Console.
2. Choose the `https://veck.app/` property.
3. Paste the full URL into the top inspection bar.
4. Run URL Inspection.
5. Click `Request Indexing`.

## 8. What to Prioritize for SEO Updates

Best pages to improve first:

- homepage
- play page
- blank-screen fix
- fullscreen fix
- sensitivity guide
- keybinds guide
- FAQ

When updating a page, prefer:

- stronger search intent match
- better internal linking
- clearer trust signals
- more specific troubleshooting or setup detail
- updated dates only when the content was actually reviewed

## 9. Quick Publish Checklist

Before push:

- `git status` is clean except intended files
- changed pages have real content, not placeholders
- `sitemap.xml` dates are updated for major edited URLs
- no obvious broken links

After push:

- live page opens
- main edited URLs load correctly
- Search Console indexing requests submitted

## 10. Recovery Commands

See last commits:

```bash
git log --oneline -10
```

See changed files in last commit:

```bash
git show --stat --oneline HEAD
```

If you made edits but have not committed yet:

```bash
git status
git diff
```

If you need to discard only one uncommitted file:

```bash
git restore path/to/file
```

Do not use destructive commands like `git reset --hard` unless you are sure.
