# Handoff v2 — operative rules digest

Condensed from the team's "ClassScout NYC — Parent-First Trust UX/UI Design System & Product Handoff" (v2). Section numbers reference that document.

## Positioning (§1)
A trusted NYC parent activity planner: source-backed information, clear age fit, neighbourhood relevance, budget awareness, honest confidence indicators. Desired parent reaction: "This saves me time. It does not overpromise. I can see what to check. I trust it enough to use again."

## Rigid UX rules
- Every listing card and detail page answers at least: **age, location, time, cost, source/freshness** (§3.1).
- No vague trust badges — every badge has an operational definition (§3.2).
- Scout never presents itself as an authority on safety/licensing/suitability: "may fit" + "confirm with provider", never "best"/"guaranteed" (§3.4).
- Cards never ship without age state ("Age not confirmed") or source state ("Source not confirmed") (§7.5).
- Summary ≤160 chars; price uncertainty never buried in footers (§7.5).

## Navigation (§5, §35)
- Desktop top nav (one row, ≤6 links + CTA): Find activities · This week · Camps · Birthday parties · Saved · For providers · [Ask Scout].
- Mobile bottom nav (exactly 5): Search · This Week · Saved · Scout · Account. Icon + label, active tab visible, no critical action hidden in hamburger.
- Hamburger only for secondary: For providers, About, How trust works, Privacy, Terms, Contact, Help.
- Card overflow menu may hold Save/Share/Add to plan/Report/Hide provider/Open provider — but never View details or Save exclusively.
- Breadcrumbs on desktop/tablet detail (`Home > Brooklyn > Park Slope > …`); mobile uses "Back to results".
- State preservation: filters, scroll, map bounds, saved state, Scout context all survive navigation and rotation (§29.3, §35.6).

## Breakpoints (§28.1) and layout
XS 0–374 · SM 375–599 · MD 600–899 · LG 900–1199 · XL 1200–1439 · XXL 1440+.
- XS/SM: single column only; bottom nav; bottom-sheet filters; compact cards; sticky search/filter control; stacked facts rows; map never side-by-side with list.
- MD: 1-col list or 2-col grid; inline search panel; chips + drawer; map = separate full-screen mode.
- LG (tablet portrait): two-column allowed (results + secondary panel); collapsible filter panel.
- Tablet landscape: split view default — list left, map right, selection synced.
- XL/XXL: filter rail (240–280px) + results (≥420px) + map (≥420px); text pages capped 1120–1280px; hover = enhancement only.
- Orientation change keeps filters, scroll, selection, map bounds; never resets search.

## Filters (§5.4)
Child age (required primary), location (borough + neighbourhood), date (today/tomorrow/this week/this weekend/custom), price (free/low-cost/range), activity type (class/camp/drop-in/event/birthday/meet-up), indoor-outdoor, booking type (drop-in/registration/waitlist/unknown), source confidence, accessibility (only if source-backed). Results always show active filters as removable chips: "Showing: Ages 5–8 · Brooklyn · This weekend".

## Trust labels (§9.1) — only with these meanings
Official source (provider/venue/school/city page) · Public source (directory/feed/mapped data) · Provider claimed (completed claim flow) · Recently checked (within freshness window) · Price estimate · Schedule estimate · Age not confirmed · Reported outdated.
Confidence states high/medium/low are internal; public language is explainable ("High confidence: recently checked from provider source"), never numeric scores, never "AI verified"/"Safe"/"Approved".
Freshness windows: one-time events 7d · this-week 3–5d · camps 14d in season · ongoing classes 30d · birthday venues 60–90d · provider profiles 90d. Past window → "Details may have changed. Please confirm with provider."

## Listing card (§7)
Top: real image (or "Image not available from source" placeholder) + category badge + age badge + save. Middle: title, provider, one-sentence summary, location. Decision row: date/time, price, source/freshness. Actions: View details · Visit provider · Ask Scout. Mobile hierarchy: title → age → neighbourhood → date/time → price → source/freshness → save + view details.

## Detail page (§8)
Sections in order: parent summary · key facts table (stacks to rows on mobile) · why it may fit · what to confirm (exact schedule, current price, age fit, registration, cancellation/refund, parent presence, supervision, accessibility) · location · source block (source type, last checked, price status, schedule status + "Always confirm final details directly with the provider") · provider link · report outdated.

## Scout AI (§10)
Flow: age → location → timing → interest → budget → constraints → results with reasons → confirm checklist. Every recommendation explains: why it may fit, what supports it, what is uncertain, what to confirm, link. Privacy: "Do not enter a child's full name." Wording: use "may fit / based on available information / confirm before booking"; never "best / guaranteed / safe / perfect match / AI verified".

## Map (§34)
Mobile: two modes (list/map), never side-by-side portrait; full-screen map with draggable bottom sheet, "Search this area" after pan, list/map toggle, visible filters. Desktop/tablet: split view, card↔pin selection synced, pan doesn't auto-refetch. Pins: teal standard · "Free" green accent · selected larger/darker · saved bookmark marker · cluster count circles · "Approximate area" when address unknown. Location permission optional, requested only on "Near me". List alternative always exists (accessibility).

## PWA (§30)
Installable, cached shell + saved listings, honest offline state ("Saved activities are available, but schedules and prices may have changed"), install prompt only after engagement (2+ saves / 2+ searches), push only for parent value (saved-activity change, deadline, weekend reminder) — never generic marketing.

## Acceptance criteria (§23, §38)
Page: no placeholder copy; useful empty + error states; works on mobile; keyboard passes; one clear primary action; consistent brand naming; source/freshness wherever listing data appears. Listing: age status, location, source status, last-checked, price status or "price unknown", schedule status, provider path, report path. Mobile portrait: one-handed search, bottom nav, bottom-sheet filters, no horizontal scroll. Desktop: filter rail, split map/list, keyboard nav, hover-as-enhancement.

## Success metrics (§24, abbreviated)
Trust: detail CTR, save rate, return rate, report-outdated rate, provider link clicks, Scout completion. Data quality: % official source, % last-checked, % confirmed age, median listing staleness. UX: mobile conversion, filter usage, no-results rate, task time, a11y defects.
