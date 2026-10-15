littleengineeringbooks.com

## Pull request previews

Every pull request runs `.github/workflows/pr-preview.yml`, which packages the static site and uploads it as an artifact named `preview-pr-<number>`. A bot comment on the PR links to it and is updated (not duplicated) on each new commit.

- **View it:** open the link in the PR comment (or the run's *Artifacts* section), download and unzip, then run `python3 -m http.server` in the folder and visit `http://localhost:8000/`.
- **Permissions:** the workflow uses `contents: read` and `pull-requests: write`. Actions must be enabled; no Pages settings change is needed. PRs from forks get the artifact but no comment (read-only token).
- **Cleanup:** artifacts expire automatically after 14 days; a new run for the same PR replaces the in-progress one.
- **Tradeoff:** this is not a live URL. GitHub Pages (Actions source) serves a single site, so per-PR subpaths would overwrite or conflict with the production deployment from `main`, which is left untouched. For live URLs, use Netlify, Cloudflare Pages or Vercel.
