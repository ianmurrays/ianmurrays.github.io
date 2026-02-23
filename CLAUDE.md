# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal/consulting website for Ian Murray, built with Jekyll and deployed to GitHub Pages at `ianmurray.me`. Uses the **minima** theme (dark skin) sourced from git.

## Development Commands

```bash
# Install dependencies
bundle install

# Serve locally with live reload (available at http://localhost:4000)
bundle exec jekyll serve

# Build the site (outputs to _site/)
bundle exec jekyll build
```

### Docker alternative

```bash
docker build -f Dockerfile.dev -t jekyll-dev .
docker run -p 4000:4000 -v $(pwd):/app jekyll-dev bundle exec jekyll serve --host 0.0.0.0
```

## Architecture

- **Static site generator**: Jekyll with Ruby 3.3.6
- **Theme**: minima (from git: `https://github.com/jekyll/minima`), dark skin
- **Deployment**: GitHub Actions (`.github/workflows/jekyll.yml`) builds and deploys on push to `master`
- **Custom domain**: Configured via `CNAME` file (`ianmurray.me`)

## Content Pages

All content is in markdown files with YAML front matter at the repo root:
- `index.markdown` — Home page (layout: `home`)
- `now.markdown` — "Now" page (layout: `page`)
- `contact.markdown` — Contact page (layout: `page`, permalink: `/contact`)
- `404.html` — Custom 404 page

Header navigation order is controlled by `header_pages` in `_config.yml`.

## Key Notes

- `_config.yml` changes require restarting `jekyll serve` (not hot-reloaded)
- No custom layouts or includes — all provided by the minima theme. Override by creating `_layouts/` or `_includes/` directories
- No tests or linters configured
- Main branch is `master` (not `main`)
