# Screenshot capture list

Every image in these docs has a named slot in `lib/screenshot-slots.json` (its alt text and the file names it may have) and is placed with `<Screenshot slot="…" />`. Until an image is imported, the page shows a marked placeholder. This file is the capture list for the screenshot session.

## Rules

- **Only the fictional demo instance, never a real install.** Institution: **Example University**, domain `example.edu`. Model display names are generic ("Chat model", "Research model", "Fast model"). Never show a real person, organisation, key or address.
- **Personas** (all fictional, Example University):
  - **Morgan Lee**, `morgan.lee@example.edu`, `admin`
  - **Taylor Brooks**, `taylor.brooks@example.edu`, `auditor`
  - **Priya Shah**, `priya.shah@example.edu`, `user` (lecturer in chemistry)
  - **Sam Ortiz**, `sam.ortiz@example.edu`, `user` (research administrator)
  - **Jordan Kim**, `jordan.kim@example.edu`, `user` (IT service desk)
- **Size**: PNG, **1440×900** (device scale factor 1), dark theme, accent Neutral unless the state says otherwise. Phone slots: **390×844** CSS pixels (capture at scale 3 is fine; the import script keeps width ≤ 1600 px).
- **Version**: OCI **v0.9.1**. Pin the clock in the seed so timestamps don't churn.
- **File name**: the slot name, `<slot>.png`, in the screenshots directory, then:

  ```sh
  SCREENSHOTS_DIR=../oci-assets/screenshots npm run screenshots
  npm run screenshots:check
  ```

- After replacing an image, check its slot's alt text in `lib/screenshot-slots.json` still describes it.

## Interim images

34 of 61 slots currently show **interim** images imported from the OCI repository's `docs/images/` (captured from its own fictional demo instance for v0.9.1). They do not use the Example University personas or data and some states differ from the target below, so recapture them in the session. Marked **Interim** in the table.

## Slots

| # | File | Size | URL path | Persona | State to set up | Now |
|---|---|---|---|---|---|---|
| 1 | `sign-in.png` | 1440×900 | `/auth/login` | Signed out | Signed out. Local sign-in on, registration Invite only, no SSO provider. Branding app name "Example University Chat". Empty fields. | Interim (`docs/images/user-sign-in.png`) |
| 2 | `sign-in-sso.png` | 1440×900 | `/auth/login` | Signed out | Signed out. An enabled OIDC provider labelled "Example University SSO" and local sign-in on, so the SSO button shows above the email/password form. | Placeholder |
| 3 | `chat-home.png` | 1440×900 | `/` | Priya Shah (user) | Sidebar open with 2 projects (collapsed), 1 pinned and ~6 recent conversations. Empty new chat; model "Chat model" selected (has effort control), reasoning level Instant, Search and Attach visible. | Interim (`docs/images/user-chat-home.png`) |
| 4 | `chat-reasoning-tool-step.png` | 1440×900 | `/chat/<id>` | Priya Shah (user) | Model "Research model" (reasoning + tool calling), Search on. Asked "What are the library's opening hours this week?". Reply finished: collapsed Reasoning, one expanded web search step "Searched the web for 'Example University library opening hours' · 5 results", sources above the answer, answer with links to library.example.edu. | Placeholder |
| 5 | `chat-reasoning-live.png` | 1440×900 | `/chat/<id>` | Priya Shah (user) | Capture while a reasoning model is thinking (use a slow model or a long prompt): heading "Thinking…" with the three-line live preview window filled. | Placeholder |
| 6 | `chat-model-picker.png` | 1440×900 | `/` | Priya Shah (user) | Model picker open from the message box: 5–6 catalogue models with labs and capability icons (vision, reasoning, effort control, tool calling, PDF comprehension, fast). No filter applied. | Interim (`docs/images/user-model-picker.png`) |
| 7 | `chat-model-details.png` | 1440×900 | `/` | Priya Shah (user) | Model picker open, the i card of "Research model" open: description, capabilities, provider, limits. | Interim (`docs/images/user-model-details.png`) |
| 8 | `chat-reply-switcher.png` | 1440×900 | `/chat/<id>` | Sam Ortiz (user) | Conversation where the latest question was retried twice; showing reply 2 of 3; pointer over the reply so Copy, Export as…, Fork, Retry are visible with "‹ 2 / 3 ›". | Placeholder |
| 9 | `chat-tool-approval.png` | 1440×900 | `/chat/<id>` | Jordan Kim (user) | Connector "Service Desk" (shared credential) with write tool "create_ticket" enabled and allowed for user. Asked "Open a ticket: projector in room B12 is broken". Reply paused on the approval card showing inputs; do not answer it. | Placeholder |
| 10 | `chat-attachment.png` | 1440×900 | `/` | Priya Shah (user) | New chat, PDF "syllabus-chem101.pdf" attached (chip visible, upload finished), question typed but not sent: "What does section 4 say about late submissions?". | Placeholder |
| 11 | `chat-long-conversation.png` | 1440×900 | `/chat/<id>` | Sam Ortiz (user) | A long seeded conversation (>75% of model input) with a finished compaction. Divider "Earlier messages are summarised for the model" expanded to show the summary. | Placeholder |
| 12 | `sidebar-projects.png` | 1440×900 | `/chat/<id>` | Priya Shah (user) | Projects: "CHEM 101 teaching" expanded (8 conversations, so five listed + "Show all (8)"), "Grant application" and "Thesis" collapsed; Pinned with one project conversation (project name shown); Today and Older groups. The open conversation highlighted under CHEM 101. | Placeholder |
| 13 | `conversation-search.png` | 1440×900 | `/` | Sam Ortiz (user) | Sidebar search typed "migr plan": results with highlighted snippets; one result marked Archived, one showing its project name. | Placeholder |
| 14 | `project-conversations.png` | 1440×900 | `/projects/<id>?tab=conversations` | Priya Shah (user) | Project "CHEM 101 teaching" with instructions set, 8 conversations, Conversations tab open. | Placeholder |
| 15 | `project-files.png` | 1440×900 | `/projects/<id>?tab=files` | Priya Shah (user) | Same project, Files tab: handbook.pdf, lab-safety.pdf, schedule.txt (Searchable · n passages) and scanned-notes.pdf (No text to search). | Placeholder |
| 16 | `artifact-writing.png` | 1440×900 | `/chat/<id>` | Priya Shah (user) | Tool-capable model asked "Make a one-page HTML timeline of the CHEM 101 term". Capture mid-stream: card "Writing Course timeline…" with counts, docked panel showing the source arriving. | Placeholder |
| 17 | `artifact-panel-docked.png` | 1440×900 | `/chat/<id>` | Priya Shah (user) | Same conversation after the artifact is saved: docked panel on Preview showing the rendered timeline page; header with Preview/Source/Versions, Copy, Download, Full screen, Close. | Placeholder |
| 18 | `artifact-full-screen.png` | 1440×900 | `/chat/<id>` | Sam Ortiz (user) | An SVG diagram artifact (e.g. "Enrolment process") open in full screen; header shows Exit full screen. | Placeholder |
| 19 | `settings-connectors.png` | 1440×900 | `/settings/connectors` | Jordan Kim (user) | Two OAuth connectors allowed for user: "Docs" connected, "Service Desk" not connected. | Placeholder |
| 20 | `memory-settings.png` | 1440×900 | `/settings/memory` | Priya Shah (user) | Instance and role memory on; Use memory on; 4 notes (2 Added by you, 2 Saved by a model). | Placeholder |
| 21 | `memory-updated.png` | 1440×900 | `/chat/<id>` | Priya Shah (user) | Memory on, tool-capable model. Said "Remember that I teach first-year chemistry." Reply shows "Memory updated" with the note and Undo. | Placeholder |
| 22 | `share-dialog.png` | 1440×900 | `/chat/<id>` | Sam Ortiz (user) | Share conversation dialog open; Share through "Latest messages (live)"; one existing link listed with Copy and Revoke. | Placeholder |
| 23 | `export-menu.png` | 1440×900 | `/chat/<id>` | Sam Ortiz (user) | A reply containing a table; Export as… menu open showing Word document, PDF, Presentation, Spreadsheet. | Placeholder |
| 24 | `settings-account.png` | 1440×900 | `/settings` | Priya Shah (user) | Password account (local). Account page with Change password, View Devices, cards beside it. Memory and Connectors tabs visible (memory on, a connector allowed) so all seven tabs show. | Interim (`docs/images/user-settings-account.png`) |
| 25 | `settings-devices.png` | 1440×900 | `/settings` | Priya Shah (user) | Signed in on three browsers (Chrome on macOS = this device, Safari on iOS, Firefox on Windows). Devices dialog open. | Placeholder |
| 26 | `settings-customization.png` | 1440×900 | `/settings/customization` | Priya Shah (user) | What to call you "Priya", What you do "Lecturer in chemistry", traits Concise, anything else "British spelling"; scroll to show Appearance and the three switches. | Interim (`docs/images/user-settings-customization.png`) |
| 27 | `settings-history.png` | 1440×900 | `/settings/history` | Sam Ortiz (user) | Active tab with ~12 conversations (some in projects), two ticked; Export and Import buttons visible. | Interim (`docs/images/user-settings-history.png`) |
| 28 | `settings-models.png` | 1440×900 | `/settings/models` | Priya Shah (user) | Models available to the user role (5–6) with descriptions. | Interim (`docs/images/user-settings-models.png`) |
| 29 | `settings-attachments.png` | 1440×900 | `/settings/attachments` | Priya Shah (user) | Role storage allowance 1 GB enforced; a mix of chat files, project files and artifacts so all three parts of Storage used show. | Interim (`docs/images/user-settings-attachments.png`) |
| 30 | `phone-chat-home.png` | 390×844 | `/` | Priya Shah (user) | 390×844 viewport, sidebar closed, empty new chat. | Interim (`docs/images/mobile-chat-home.png`) |
| 31 | `phone-sidebar.png` | 390×844 | `/` | Priya Shah (user) | 390×844 viewport, sidebar panel open with projects and conversations. | Interim (`docs/images/mobile-sidebar.png`) |
| 32 | `phone-artifact.png` | 390×844 | `/chat/<id>` | Priya Shah (user) | 390×844 viewport, the timeline artifact opened from its card (fills the screen) on Preview. | Placeholder |
| 33 | `phone-admin-overview.png` | 390×844 | `/admin` | Morgan Lee (admin) | 390×844 viewport, Overview with setup checklist; menu button visible. | Interim (`docs/images/mobile-admin-overview.png`) |
| 34 | `admin-overview.png` | 1440×900 | `/admin` | Morgan Lee (admin) | Fresh-ish instance: provider, models, default model, sign-in done; email delivery missing with verification required, so one required item Needs attention; optional items Not set up. Totals visible below. | Interim (`docs/images/admin-overview.png`) |
| 35 | `admin-providers.png` | 1440×900 | `/admin/models` | Morgan Lee (admin) | Providers tab: OpenAI-compatible "Example gateway" (key set), Anthropic and Google providers. | Interim (`docs/images/admin-providers.png`) |
| 36 | `admin-models.png` | 1440×900 | `/admin/models?tab=models` | Morgan Lee (admin) | Models tab: default model "Chat model" chosen; 6 catalogue entries with labs, capabilities, visible roles, enabled switches. | Interim (`docs/images/admin-models.png`) |
| 37 | `admin-embeddings.png` | 1440×900 | `/admin/models?tab=embeddings` | Morgan Lee (admin) | pgvector enabled; embeddings model text-embedding-3-small on the gateway with vector size and passages embedded; Reranking on with bge-reranker-v2-m3 and the resolved /rerank URL. | Placeholder |
| 38 | `admin-roles.png` | 1440×900 | `/admin/roles` | Morgan Lee (admin) | user tab: people count, models count, feature switches (memory on), reasoning levels, rate limits, storage allowance, one budget. | Interim (`docs/images/admin-roles.png`) |
| 39 | `admin-roles-tools.png` | 1440×900 | `/admin/roles` | Morgan Lee (admin) | user tab scrolled to Tools: web_search (read) on, connector tools grouped under Docs (read) and Service Desk (write). | Placeholder |
| 40 | `admin-users.png` | 1440×900 | `/admin/users` | Morgan Lee (admin) | ~14 Example University accounts (Priya Shah, Sam Ortiz, Jordan Kim, Taylor Brooks, …), one on legal hold, mixed roles. | Interim (`docs/images/admin-users.png`) |
| 41 | `admin-user-detail.png` | 1440×900 | `/admin/users/<Priya Shah>` | Morgan Lee (admin) | Priya Shah: two sessions, a monthly cost budget at ~60%, storage, recent titles, audit trail. | Interim (`docs/images/admin-user-detail.png`) |
| 42 | `admin-users-bulk-actions.png` | 1440×900 | `/admin/users` | Morgan Lee (admin) | Three restricted accounts ticked; bulk action bar visible. | Interim (`docs/images/admin-users-bulk-actions.png`) |
| 43 | `admin-invitations.png` | 1440×900 | `/admin/invites` | Morgan Lee (admin) | Two pending invitations (user, restricted) for @example.edu addresses. | Interim (`docs/images/admin-invitations.png`) |
| 44 | `admin-authentication.png` | 1440×900 | `/admin/settings/authentication` | Morgan Lee (admin) | Registration Closed, local sign-in on, session 14 days; SSO section lists "Example University SSO" (OIDC) with callback URL. | Interim (`docs/images/admin-settings-authentication.png`) |
| 45 | `admin-sso-provider-form.png` | 1440×900 | `/admin/settings/authentication` | Morgan Lee (admin) | Edit form for "Example University SSO": allowed domain example.edu, JIT on, account linking off, mappings groups oci-staff→user, oci-admins→admin, oci-audit→auditor; Require a matching role on with a message. | Interim (`docs/images/admin-sso-provider-form.png`) |
| 46 | `admin-usage-budgets.png` | 1440×900 | `/admin/quotas` | Morgan Lee (admin) | Two budgets: "Monthly cost — Research model" (cost, calendar month, scoped) and "Daily messages" (messages, rolling 24 h), with roles. | Interim (`docs/images/admin-quotas.png`) |
| 47 | `admin-retention.png` | 1440×900 | `/admin/retention` | Morgan Lee (admin) | Conversation retention 365 days with Keep pinned on, trash 30, usage 90, memory 180, audit 730; source labels visible. | Interim (`docs/images/admin-retention.png`) |
| 48 | `admin-acceptable-use.png` | 1440×900 | `/admin/policies` | Morgan Lee (admin) | Policy "Example University acceptable use of AI chat" version 2 published, version 1 in history. | Interim (`docs/images/admin-policies.png`) |
| 49 | `admin-announcements.png` | 1440×900 | `/admin/broadcasts` | Morgan Lee (admin) | One maintenance announcement for all roles, dismissable, with Re-show. | Interim (`docs/images/admin-announcements.png`) |
| 50 | `admin-web-search.png` | 1440×900 | `/admin/search` | Morgan Lee (admin) | Search on, provider Tavily with key set, a successful Test search result shown. | Interim (`docs/images/admin-search.png`) |
| 51 | `admin-connectors.png` | 1440×900 | `/admin/connectors` | Morgan Lee (admin) | Two connectors: Docs (OAuth, 3 tools, 2 enabled read) and Service Desk (shared credential, create_ticket write enabled); last contact shown. | Placeholder |
| 52 | `admin-audit-log.png` | 1440×900 | `/admin/audit` | Taylor Brooks (auditor) | Auditor view (read-only banner) filtered to "auth." over 7 days, a mix of success and failure entries. | Interim (`docs/images/admin-audit.png`) |
| 53 | `admin-usage.png` | 1440×900 | `/admin/usage` | Morgan Lee (admin) | 30 days of seeded usage across 4 models including embedding: and rerank: entries. | Interim (`docs/images/admin-usage.png`) |
| 54 | `admin-reports.png` | 1440×900 | `/admin/reports` | Morgan Lee (admin) | Monthly usage report to finance@example.edu, last sent date shown. | Interim (`docs/images/admin-reports.png`) |
| 55 | `admin-compliance.png` | 1440×900 | `/admin/compliance` | Taylor Brooks (auditor) | Auditor view: export on, hourly, separate bucket, content off; 3 successful runs; one legal hold on Sam Ortiz (matter EU-2026-014). | Placeholder |
| 56 | `admin-backups.png` | 1440×900 | `/admin/backups` | Morgan Lee (admin) | Back up automatically at 03:00 UTC to a separate bucket; pg_dump 17 found; 7 daily / 4 weekly; history with verified runs and one expired. | Placeholder |
| 57 | `admin-webhooks.png` | 1440×900 | `/admin/webhooks` | Morgan Lee (admin) | Endpoint https://siem.example.edu/oci with actions backup.run and user.*; deliveries panel open showing successes. | Placeholder |
| 58 | `admin-health.png` | 1440×900 | `/admin/health` | Morgan Lee (admin) | All green except Redis/email as configured for the demo; job runs listed; Observability section visible. | Interim (`docs/images/admin-health.png`) |
| 59 | `admin-general-settings.png` | 1440×900 | `/admin/settings/general` | Morgan Lee (admin) | Default prompt set, default reasoning Low, tool step limit 8, summaries on, editorial diagrams on, user memory on. | Interim (`docs/images/admin-settings.png`) |
| 60 | `admin-storage.png` | 1440×900 | `/admin/storage` | Morgan Lee (admin) | S3 tab with a MinIO bucket configured and a passing Test put/read/delete. | Interim (`docs/images/admin-storage.png`) |
| 61 | `admin-branding.png` | 1440×900 | `/admin/branding` | Morgan Lee (admin) | App name "Example University Chat", short name "EU", a PNG logo uploaded, accent Blue, default theme Dark; live preview visible. | Interim (`docs/images/admin-branding.png`) |

## Demo data to seed

- **Providers**: an OpenAI-compatible "Example gateway" (`https://gateway.example.edu/v1`), Anthropic and Google (keys set, values never shown).
- **Models**: "Chat model" (default; effort control, tool calling), "Research model" (reasoning, effort control, tool calling, vision), "Fast model" (fast), "Vision model", plus embeddings `text-embedding-3-small` and reranker `bge-reranker-v2-m3`. Prices set on all.
- **Roles**: memory on for the instance and `user`; artifacts and projects on for `user`; one budget per role.
- **Connectors**: "Docs" (OAuth, read tools) and "Service Desk" (shared credential, `create_ticket` write tool), both allowed for `user`.
- **Projects** for Priya: "CHEM 101 teaching" (8 conversations, 4 files), "Grant application", "Thesis".
- **Conversations** for each person, including one long conversation with a compaction, one retried twice, one archived, one in the trash.
- **Audit and usage**: 30 days of seeded usage and sign-in events (including failures); a legal hold on Sam Ortiz; three compliance export runs; a week of backup runs; one webhook endpoint with deliveries.
