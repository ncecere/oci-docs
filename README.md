# Open Chat Interface docs

The user, administrator and operator documentation for [Open Chat Interface (OCI)](https://github.com/ncecere/open-chat-interface), the self-hosted, multi-model AI chat application for institutions. It's published at <https://docs.oci.bitop.dev>; the product's website is <https://oci.bitop.dev>.

These pages are for the people who use OCI, the administrators who run an instance, and the operators who host it. The OCI repository's own `docs/` folder stays the engineering record (design notes, research and the original guides). The docs describe **OCI v0.11.1**.

A static site: [Fumadocs](https://fumadocs.dev) on Next.js with `output: "export"`, TypeScript and Tailwind CSS v4, served by nginx in a container. Search is Fumadocs' built-in static index, searched in the browser. No tracking, no cookies, no external fonts or CDNs: Inter is self-hosted. OCI has no public API, so there is no API reference.

## Local development

You need Node 22 and npm.

```sh
npm ci
npm run dev          # http://localhost:3000
```

| Command | Does |
|---|---|
| `npm run dev` | Development server with hot reload. |
| `npm run build` | The static export, in `out/`. |
| `npm run check:links` | Checks every internal link and anchor in `out/` (run after a build). |
| `npm run typecheck` | TypeScript. |
| `npm start` | Serves `out/` locally. |
| `npm run screenshots` | Imports screenshots (below). |
| `npm run screenshots:check` | Lists screenshot slots that are still placeholders. |

## Layout

```text
app/brand.css                 OCI's brand tokens for Tailwind v4, shared verbatim with the website
app/global.css                Tailwind, Fumadocs' CSS, and Fumadocs' variables mapped onto brand.css
app/(home)/page.tsx           the landing page
app/docs/[[...slug]]/page.tsx docs pages
app/api/search/route.ts       the static search index (exported as /api/search)
app/not-found.tsx             the 404 page
content/docs/                 the pages, in MDX, one folder per section (meta.json orders them)
components/logo.tsx           the logo: the "Turns" mark (inline SVG) beside the name as live text
public/                       favicons, apple-touch-icon, 192/512 icons and og.png, copied from oci-assets
components/screenshot.tsx     named screenshot slots, with a marked placeholder until an image exists
lib/screenshot-slots.json     the slots and their alt text
lib/screenshots.json          imported screenshots and their sizes (written by the import script)
scripts/                      import-screenshots, check-links
nginx/                        nginx.conf and the site's server block and security headers
Dockerfile                    builds the export, then serves it with nginx
SCREENSHOTS.md                the capture list for the screenshot session
```

## Writing

- Every claim must be true of the OCI release the docs describe. Check it against the OCI repository (`CHANGELOG.md`, `docs/user/`, `docs/admin/`, `docs/OPERATIONS.md`, `.env.example`, `docker/`) and, where those are vague, the code, before you write it.
- Lead with "Open Chat Interface" in titles and first mentions; "OCI" is fine afterwards (the name is shared with Oracle Cloud Infrastructure and the Open Container Initiative).
- Plain, short sentences. Examples are generic (`example.edu`, "Example University", "Chat model"); no real organisation's names or data.
- Use Fumadocs' components where they help: `Callout`, `Steps`, `Tabs`, `Cards`, `Files`.
- Each page has an "Edit on GitHub" link to its file in this repository.

### Brand

`app/brand.css` holds OCI's colours, radii, shadows and fonts as `--oci-*` variables and Tailwind utilities (`bg-brand-surface`, `text-brand-link`, `rounded-card`, `shadow-brand-2`). It comes from OCI's own `apps/web/src/styles/tokens.css` (the neutral theme, dark by default) with blue links that meet WCAG 2.1 AA; contrast ratios are in its comments. The same file is used verbatim by the OCI website: change both together.

### Logo

The logo is "Turns" (a question in a blue bubble, the answer as two lines, on a dark tile); its source, exports and usage rules are in `../oci-assets/logo/` (`logo/turns/`, `logo/README.md`). `components/logo.tsx` draws the mark inline (`mark-small.svg`, 28 px, `aria-hidden`) beside the name as live text, exactly as the website does; change both together. `public/favicon.ico`, `favicon.svg`, `icon-192.png` and `icon-512.png` are copied unchanged from `logo/turns/` (the PNGs from its `png/` folder, with `apple-touch-icon.png`), and `public/og.png` is its `png/og-card.png`. When the logo changes, copy them again:

```sh
T=../oci-assets/logo/turns
cp $T/favicon.ico $T/favicon.svg public/ && cp $T/png/apple-touch-icon.png $T/png/icon-192.png $T/png/icon-512.png public/ && cp $T/png/og-card.png public/og.png
```

### Screenshots

Screenshots come only from the fictional "Example University" demo instance, never from a real install. Each image has a named slot in `lib/screenshot-slots.json` (its alt text, the file names it may have, `"phone": true` for phone captures, and optionally a `hold` reason that keeps a known-bad capture out) and is placed with `<Screenshot slot="…" />`. Until an image is imported, the slot shows a clearly marked placeholder. `SCREENSHOTS.md` lists, per slot, the file, size, page, persona and the state to set up. When you replace an image, check that its slot's alt text still describes it.

```sh
SCREENSHOTS_DIR=../oci-assets/screenshots npm run screenshots
```

converts each available PNG to WebP (at most 1600 px wide) in `public/images/`, and records its width and height in `lib/screenshots.json`.

## Container

```sh
docker build -t oci-docs .
docker run --rm -p 8080:8080 --read-only --tmpfs /tmp:uid=101,gid=101 oci-docs
```

nginx (Alpine, pinned by digest) runs as user 101 on port 8080, keeps its pid and temp files under `/tmp` (so the root filesystem can be read-only; mount an `emptyDir` at `/tmp` in Kubernetes), answers `/healthz`, sends security headers and a Content Security Policy, gzips text, and caches hashed assets for a year.

## Deploy

Pushes to `main` run `.github/workflows/publish.yaml`: it type-checks, builds and link-checks the site, then builds and pushes a multi-arch image (linux/amd64, linux/arm64):

- `ghcr.io/ncecere/oci-docs:<full commit sha>`
- `ghcr.io/ncecere/oci-docs:latest`

Pull requests run the checks only. Actions are pinned by commit SHA, and Dependabot opens grouped weekly updates for npm, Actions and the Docker base images.

## Licence

- **Code** (the site's source, scripts and configuration): [MIT](LICENSE).
- **Documentation text and images**: [Creative Commons Attribution 4.0 International](LICENSE-CONTENT) (CC BY 4.0).
- Inter is under the SIL Open Font License 1.1.
