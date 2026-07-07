# ClassScout NYC Design System

**ClassScout NYC** — classscout.ai — is a parent-first discovery platform helping NYC families find kids' classes, camps, birthday parties, drop-in activities, family events, and meet-up groups. It positions itself as a **trusted parent planning layer**, not a directory: source-backed listings, visible price estimates, last-checked dates, and a guided AI assistant ("Scout AI") that helps narrow options without overpromising.

## Sources

- **Product site:** https://classscout.ai
- **Codebase:** https://github.com/moldovancsaba/classscout (Next.js + Mantine + internal "GDS" component library). Key files: `src/app/globals.css`, `docs/redesign/ClassScout-Design-Tokens-and-Components.md`, `docs/redesign/ClassScout-UI-Kit.html`, `src/components/scout/*`. Explore the repo further to ground new designs — it contains the full view set (Home, catalog browse with map, provider profile panel, Scout AI chat, calculator, saved).
- **"ClassScout NYC — Parent-First Trust UX/UI Design System & Product Handoff"** — the user-supplied handoff document. **By explicit user decision, this document's palette and rules supersede the repo's earlier navy/terracotta brand**: teal primary, Inter type, trust-label system, listing-card requirements, Scout AI wording rules.
- An earlier UX/UI recommendation brief ("calm civic warmth", trust-before-cleverness).

## The brand in one paragraph

Calm civic warmth. Warm off-white canvas (`#faf7f1`), white cards floating on it, charcoal ink (`#1f2933`) for text, **deep teal (`#1f7a8c`) as the single primary-action color**, muted green strictly for defined trust signals, amber strictly for estimates/caution, soft red for errors. One typeface — **Inter** — with hierarchy carried by size and weight. Rounded but controlled: 16px cards, 12px buttons, pill chips and badges. Soft neutral shadows, one 200ms easing. Never neon gradients, never a dark page identity, never childish rainbow color.

## CONTENT FUNDAMENTALS

**Voice:** calm, practical, transparent, local, reassuring, adult-facing, parent-aware. Decision support, not hype.

- **One brand name everywhere: "ClassScout NYC"** ("ClassScout" alone in tight UI; never "Class Scout", "ClassScout NY", or other variants).
- Sentence case everywhere. Second person, direct: "Find trusted kids' activities across NYC." "Tell Scout your child's age, area, schedule, budget, and interests."
- **Uncertainty is made visible, never hidden:** prices carry "est." / "Estimated from $45" with "confirm with provider"; listings show "Source: provider website" and "Last checked 2 July 2026"; stale listings say "Details may have changed."
- Trust language is operational, never vague. Use: "source-backed", "recently checked", "estimated price shown for planning", "may fit", "confirm before booking". Never: "verified" (without a real process), "guaranteed", "safe", "perfect match", "best", "AI-powered magic", "trust us".
- Scout AI is a guided assistant, not an authority: "Here are activities that may fit your criteria… Please confirm final details with the provider." Beta is labeled (`BETA` neutral badge) and explained. Privacy line near Scout inputs: "Do not enter a child's full name."
- Parent-intent labels, not taxonomy-speak: "This weekend", "Today after school", "Free & low-cost", "Indoor activities", "Birthday ideas", "Toddler drop-ins".
- States are reassuring, never jokey: Loading = skeletons + "Loading NYC family activities…"; Empty = what happened + why + next actions ("Expand to Brooklyn", "Ask Scout"); Error = human cause + retry + fallback link.
- No emoji in product UI. Icons are Tabler.

## VISUAL FOUNDATIONS

**Color hierarchy (governing principle):** Warm white (canvas) → White (cards) → Slate (metadata) → Charcoal (ink) → Teal (primary action) → semantic accents (trust green, estimate amber, error red) used only with their defined meanings. **Teal is the only action color; green appears only on trust signals; amber only on estimates/caution; red only on errors.**

- **Backgrounds:** warm off-white `#faf7f1` pages; pure white strictly for cards/panels; `--chip-bg #edf7f8` (pale teal) for chips/tags. No dark-mode identity, no neon/AI gradients.
- **Type:** Inter only (`--font-body`; `--font-display` aliases it). H1 44/32, H2 30/24, H3 22, card title 18–20 @600, body 16, meta 14, badge 12–13 @500. Tracking −0.01em on large headings.
- **Corners:** cards 16px (`--r-lg`), buttons/inputs 12px (`--r-btn`/`--r-md`), small 8px, modals/sheets 24px (`--r-xl`), chips + badges full pill.
- **Spacing:** 8px grid — `--space-1…8` = 4/8/12/16/24/32/48/64.
- **Borders:** `--border-soft #e6e1d8` on white cards; `--line rgba(31,41,51,.12)` general hairline.
- **Shadows:** soft neutral double shadow on cards (`--shadow-card`); `--shadow-elevated` on hover/overlays. No hard or inner shadows.
- **Hover/press:** cards lift −2px + elevated shadow; images scale 5% over 500ms; primary button hover/pressed = `--primary-dark #145766`. All disabled under `prefers-reduced-motion`.
- **Motion:** one easing — `0.2s cubic-bezier(0.4,0,0.2,1)`. Skeleton shimmer for loading. No bounces.
- **Imagery:** real provider/activity photos only for listings (16:9 covers, lazy-loaded); neutral branded fallback ("Image not available from source") when missing — never generic child stock photos for specific listings; avoid identifiable child images without clear rights.
- **Focus & a11y:** 2px teal outline + 2px offset on every control. Tap targets ≥44px. WCAG 2.2 AA contrast; no hover-only interactions; no information by color alone.
- **Layout:** mobile-first. Desktop = max-w content + 3-col card grids; mobile = sticky search/filter, bottom-sheet filters, white bottom tab bar (Search · This week · Saved · Scout · Account), 1-col, one primary CTA per screen.
- **Legacy note:** component code may still reference `--cs-*` variables (navy/terracotta/sage era) — these are aliased onto the teal palette in `tokens/colors.css`. Write new code against the doc tokens (`--primary`, `--trust`, `--warning`, …).

## TRUST SYSTEM

Every listing surface carries a visible confidence layer.

- **Card contract:** every ActivityCard/ProviderCard answers age, location, time, cost, and source/freshness. Unknowns are stated ("Age not confirmed", "Price unknown"), never omitted.
- **Trust labels (only these, each operationally defined):** Official source · Public source · Provider claimed · Recently checked · Price estimate · Schedule estimate · Age not confirmed · Reported outdated. → `TrustBadge`.
- **Price:** `PriceEstimateLabel` — amber "est." treatment for estimates, plain for confirmed, "Free", "Price unknown".
- **Freshness:** `LastCheckedLabel` — "Last checked 2 Jul 2026"; past the freshness window it switches to "Details may have changed — confirm with provider."
- **Detail pages:** `SourceBlock` (source type, URL, last checked, price/schedule status, report link) + `ConfirmChecklist` (schedule, price, age fit, registration, cancellation, parent presence).
- **Feedback loop:** `ReportOutdatedLink` on every listing detail.
- **No numeric trust scores in the UI.** Public language: "Recently checked from provider source", "Some details estimated" — never "93% trustworthy" or "AI verified".

## ICONOGRAPHY

- **Tabler icons** (outline, 2px stroke) via CDN webfont: `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.29.0/dist/tabler-icons.min.css`, then `<i class="ti ti-heart"></i>`. (The repo uses `@tabler/icons-react`; same glyph set. **Substitution flag:** webfont instead of React package.)
- Common glyphs: home, compass, calendar-clock, map-pin, heart (save), plus, share-2, star-filled, user-circle, message-circle (Scout), file-check (source), speakerphone, shield-check.
- No emoji, no unicode-as-icon, no decorative icons where metadata clarity is needed.
- Brand marks (in `assets/brand/`): `logo-pin.png` (primary mark), `logo-pin-filled.png`, `wordmark.png`, `mark-face-*.png`, `appicon-*.png`, `class_scout_logo.png`. Note: these raster marks predate the teal palette (navy/terracotta era); the `Logo` component renders the wordmark in current brand type. **Ask the user for updated marks if a teal-era logo exists.**

## Fonts

**Inter** (Google Fonts, loaded via `@import` in `tokens/typography.css`) with `ui-sans-serif / system-ui / Arial` fallbacks. No licensed webfonts required. (The repo's earlier Bogart/Garet direction was retired with the palette switch.)

## CROSS-PLATFORM & MAP (handoff §27–40)

**Principle: mobile is for fast finding, tablet for comparing, desktop for planning.** Same trust logic, source labels, and hierarchy everywhere; only layout/density adapt.

- **Breakpoints:** XS 0–374 · SM 375–599 · MD 600–899 · LG 900–1199 · XL 1200–1439 · XXL 1440+.
- **Mobile portrait (XS/SM):** single column, bottom nav (Search · This Week · Saved · Scout · Account, max 5, icon+label), filters as bottom sheet (`FilterSheet`), sticky search/filter control, map as separate full-screen mode (never side-by-side with list), stacked detail facts, no horizontal scroll.
- **Tablet (LG):** portrait = 1–2-col cards + collapsible filters; landscape = split view (filter rail 240–280px · results 380–520px · map remainder), selected listing synced list↔map, comparison view for saved items.
- **Desktop (XL+):** top nav one row (≤6 links + "Ask Scout" CTA), filter rail ≤280px, results ≥420px, map ≥420px; text pages max 720–840px line width; hover is enhancement only.
- **Orientation/state continuity:** rotation and back-navigation preserve filters, scroll, selected listing, map bounds, Scout context — never reset search.
- **PWA:** installable, cached shell + saved listings, honest offline copy ("Saved activities are available, but schedules and prices may have changed"), install prompt only after engagement (2+ saves/searches), push only for parent-value reminders — never generic marketing.
- **Map:** pins — teal standard, "Free" trust accent, larger/darker selected, heart saved, count clusters; approximate locations labeled "Approximate area"; "Search this area" after pan; pin tap opens compact preview (title, provider, age, price status, source/freshness, View + Save); list alternative always exists (a11y); location permission optional and asked only on "Near me". Provider recommendation: MapLibre+OSM (cost/control) or Mapbox (fastest polish).
- **Menus:** hamburger only for secondary items (For providers, About, How trust works, Privacy…); never hide View details/Save in overflow; breadcrumbs on desktop detail pages, "Back to results" on mobile.
- **Content system:** clear activity titles (no hype), provider named separately, 1-sentence 100–160-char summaries via "[Format] for [age/interest] in [context], useful for [benefit]", fit-based copy ("Good for hands-on learners"), precise price/schedule/source status strings, editorial pages with last-updated + sources. Listing content statuses: Draft / Published / Needs review / Outdated / Reported / Provider claimed / Archived.

## Index

- `styles.css` — global entry (imports all tokens)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `assets/brand/` — logos & marks · `assets/images/` — hero/listing photography from the repo
- `guidelines/` — foundation specimen cards (Design System tab)
- `SKILL.md` — agent skill entry point
- `ui_kits/scout_app/` — interactive home/browse/Scout recreation (`index.html`)

### Components

- `components/core/` — **Button**, **Badge**, **Chip**, **FitScore**, **Logo**, **SaveButton**, **CompareButton**
- `components/cards/` — **ProviderCard** (rich/compact/AI variants, with source/freshness trust row), **EventCard**
- `components/trust/` — **TrustBadge**, **PriceEstimateLabel**, **LastCheckedLabel**, **SourceBlock**, **ConfirmChecklist**, **ReportOutdatedLink**
- `components/navigation/` — **Sidebar**, **BottomTabBar**
- `components/feedback/` — **EmptyState**, **Skeleton**
- `components/search/` — **ScoutSearch**, **HeroSearchPanel**, **QuickStartCard**, **FilterSheet**, **ScoutResultCard**
- `components/detail/` — **DetailFactsTable**, **ProviderCTA**

### Handoff §20 name mapping
ActivityCard → ProviderCard · FilterChip → Chip · ErrorState → EmptyState kind="error" · LoadingSkeleton → Skeleton · ScoutPromptCard → ScoutSearch.

### Intentional additions
- `FitScore` chip comes from the repo's UI-Kit doc (AI provider card).
- The `components/trust/` family implements the handoff document's required trust layer (§9, §20).
- Tabler webfont via CDN replaces `@tabler/icons-react` (no build step here).
