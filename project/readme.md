# ClassScout NYC Design System

Design system for **ClassScout NYC** (classscout.ai) — a high-trust, parent-first activity planning system for NYC families: age-aware, neighbourhood-aware, schedule-aware, budget-aware, privacy-conscious, and transparent about information quality.

## Product context

ClassScout is a **trusted parent planning layer**, not a directory. Three jobs: discovery ("what exists near me?"), decision support ("is it right for my child, schedule, budget?"), and trust transparency ("where did this info come from; what do I confirm?"). "Scout" is an AI guided-discovery assistant — helpful and humble, never an authority on safety or suitability.

Brand name is **ClassScout NYC**, used consistently (never "Class Scout NY" / "ClassScout NY" mixes).

**Sources**
1. **Primary spec:** "ClassScout NYC — Parent-First Trust UX/UI Design System & Product Handoff" v2 (supplied by the team; operative rules digested in `guidelines/handoff-v2-digest.md`). It defines positioning, trust architecture, the component inventory (§20.1), responsive breakpoints (§28), map UX (§34), navigation (§35), content rules (§36), and device acceptance criteria (§38).
2. **Live site** https://classscout.ai — JS-rendered, so only the shell was extractable: nav sections (Home, Scout AI, Classes, Camps, Birthday Parties, Drop-In Activities, This Week, Family Events, Meet-Up Groups, Saved, Calculator, My Account), provider CTA ("List your program" → mailto hello@classscoutny.com), footer ("Class Scout NY · Trusted. Local. For NYC families. · Prices shown are estimates for planning"), theme-color `#16323F`, and the joke loading state the spec retires ("The flux capacitor is charging!"). Logo pin, wordmark, and favicon collected into `assets/`.

## Design ethos — "Calm civic warmth" · Bluestone palette

Local, useful, caring, credible. Not a toy app, coupon site, SaaS dashboard, overhyped AI product, or social feed. The **Bluestone** palette is drawn from NYC's own materials — bluestone-blue, park green, limestone/oat, a marigold spark — deliberately *not* cream-and-soft-teal (the generic trustworthy-SaaS default). Trust is earned through **specificity**: every badge has an operational definition; uncertainty is visible ("Estimated from $45 — confirm with provider", "Last checked 2 July 2026", "Age not confirmed"). Core responsive principle: **mobile is for fast finding, tablet is for comparing, desktop is for planning.**

## CONTENT FUNDAMENTALS

- **Voice:** calm, practical, transparent, local, reassuring, adult-facing, parent-aware. Calm confidence, never hype.
- **Person:** parent is "you"; product is "we"/"ClassScout"; assistant is "Scout" ("Scout helps narrow options…").
- **Casing:** sentence case for headings/buttons/labels. Uppercase + `--tracking-wide` only for tiny eyebrow/badge labels.
- **Listing titles:** clear activity names ("Kids Robotics Workshop"), never promotional ("Amazing STEM Adventure!"). Provider name always separate from title.
- **Summaries:** one sentence, 100–160 chars, formula: *[format] for [age/interest] in [context], useful for [parent benefit]*.
- **Price copy:** "Free" / "Estimated from $25" / "Price not confirmed" / "Confirm current pricing with provider". Never "Cheap", "Only $25", "Guaranteed price".
- **Schedule copy:** "This Saturday" / "Drop-in available" / "Registration required" / "Schedule not confirmed" — always distinguish exact vs estimated.
- **Source copy:** "Source: provider website" / "Last checked: 2 July 2026"; weak source → "Source not confirmed. Please verify details before attending."
- **Fit language:** "Good for hands-on learners", "may fit" — never "perfect for all children", "best", "guaranteed", "safe", "verified", "certified", "vetted" (unless those operational processes exist).
- **Scout wording:** "may fit", "based on available information", "confirm before booking". Privacy: "Do not enter a child's full name."
- **System states:** no jokes ever. Loading: "Loading source-backed listings for your filters…" + skeletons. Empty: explain + concrete recovery actions. Error: "We could not load these activities. Please refresh or try again." + retry + fallback.
- **Emoji:** not used.

## VISUAL FOUNDATIONS

- **Color (Bluestone identity; palette evolved from v2 §11.2):** cool oat `--bg-main #ECEFE9` page; white cards; bluestone ink text `#1B2A31`/`#566670`; **bluestone-blue** primary `#1F5E7A` (hover `#16455B`) — deeper and more civic than a consumer teal; **pine** trust green `#4E7C4A` sparingly; burnt amber `#C0801F` only for estimates/caution; error `#B0463F`; chip tint `#E2ECEA`; highlight `#E7A733`; borders `#D8DCCF`. Brand navy `#16323F` for wordmark/footer/dark bands; sage + clay from the logo as illustration accents only. Never: neon gradients, red for normal attention, rainbow systems, low-contrast grey metadata, green checkmarks on unconfirmed info.
- **Type (v2 §11.6):** Inter variable (self-hosted, `fonts/`). All heading tokens use `clamp()` so they resolve mobile→desktop automatically: H1 32→48, H2 24→32, H3 20→24, card title 17→19; body 16, meta 14, badge 12.5. Editorial text max-width 720–840px.
- **Spacing (v2 §11.5):** 8px grid — 4/8/12/16/24/32/48/64. Page padding `clamp(16px, 4vw, 32px)`; content max 1200px.
- **Breakpoints (v2 §28.1):** XS 0–374, SM 375–599, MD 600–899, LG 900–1199, XL 1200–1439, XXL 1440+. XS/SM: single column, bottom nav, bottom-sheet filters, map as separate full-screen mode. MD: 1–2 col grid, chips + drawer. LG: two-column allowed. Tablet landscape/desktop: split list+map (filter rail 240–280px, results ≥420px, map ≥420px). No horizontal scroll, ever.
- **Shape (v2 §11.4):** cards 18px + 1px `--border-soft` + whisper shadow; buttons 12px; inputs 12px; images 16px; chips/badges full pill; modals & sheets 24px. Soft but not childish.
- **Motion:** 150–250ms `--ease-calm` fades/lifts; skeleton shimmer; `prefers-reduced-motion` respected globally (in `tokens/base.css`). No bounces.
- **Hover:** buttons darken; cards lift shadow; links underline. Hover is enhancement only — every function also works by click/keyboard. **Focus:** 2px teal ring, 2px offset. **Tap targets:** ≥44px.
- **Imagery:** real listing/provider images only (16px radius). No image → neutral placeholder with category icon + "Image not available from source". Never stock children, never AI-generated child photos.
- **Maps (v2 §34):** teal standard pins, green "Free" accent, larger/darker selected pin, bookmark marker for saved, count clusters, "Approximate area" labels when address unknown. Map never the only path — accessible list always exists. Recommended engine: MapLibre + OSM (or Mapbox); the kit ships a neutral placeholder panel, not real tiles.

## ICONOGRAPHY

- Simple outline icons, consistent 1.75px stroke, `currentColor`. This system uses **Lucide** copies in `assets/icons/` (site's own icon set was not extractable — **substitution, flag: replace with ClassScout's real set if one exists**).
- Metadata icon categories per v2 §11.7: age, location (map-pin), calendar, clock, price, indoor/outdoor, source (info), last-checked (clock), save (bookmark), compare, report (flag), Scout (sparkles — sparingly). No decorative icons where metadata clarity is needed.
- Brand marks (real, collected — never redraw): `assets/logo-pin.png` (oat/white surfaces), `assets/logo-pin-light.png` (light variant supplied by the team — use on ALL dark backgrounds: navy footer, dark bands), `assets/wordmark.png`, `assets/favicon.ico`. PNG only; no vector source available.
- No emoji, no unicode-as-icons.

## Component inventory (v2 §20.1 — this IS the list)

`components/core/` SaveButton, CompareButton, FilterChip · `components/search/` HeroSearchPanel, QuickStartCard, FilterSheet · `components/listing/` ActivityCard, DetailFactsTable, ConfirmChecklist, SourceBlock · `components/trust/` TrustBadge, PriceEstimateLabel, LastCheckedLabel, ReportOutdatedLink · `components/scout/` ScoutPromptCard, ScoutResultCard · `components/states/` EmptyState, ErrorState, LoadingSkeleton · `components/provider/` ProviderCTA · `components/navigation/` TopNav, BottomNav (spec'd in v2 §35.1–35.2) · `components/map/` MapPin, MapPreviewCard (spec'd in v2 §34.5–34.6).

**Intentional additions:** Icon (glyph wrapper), Button, TextInput, SelectField — primitives required to compose the spec'd components; not product inventions.

Every component is fluid-width (grid `auto-fit`/`minmax`, flex-wrap, clamp type) and where layout must structurally change (facts table stacking, sheet vs rail), it takes an explicit prop documented in its `.d.ts`.

## Index

- `styles.css` — global entry → `tokens/` (colors, typography, spacing, breakpoints, shape, base) + `fonts/`
- `design-system.html` — **the introduction page**: principles, tokens, usage do/don'ts, and live component demos for designers, developers, and decision makers
- `assets/` — logo-pin.png, logo-pin-light.png (dark backgrounds), wordmark.png, favicon.ico, icons/ (Lucide copies), dev-loader.js (specimen-card fallback loader)
- `components/` — inventory above; each component has `.jsx` + `.d.ts` + `.prompt.md`; one specimen card per group
- `guidelines/` — foundation specimen cards + `handoff-v2-digest.md` (operative spec rules)
- `ui_kits/classscout-web/` — responsive click-through: Home / Results (list+map split ↔ mobile toggle) / Detail, mobile bottom nav ≤599px, desktop top nav ≥900px
- `SKILL.md` — agent skill entry point

**Caveats:** logo is PNG-only; icons are Lucide stand-ins; map panels are placeholders for MapLibre/Mapbox tiles; the live site's rendered pages could not be captured (JS-rendered, iframe-blocked) — screens follow the v2 blueprint plus the fetched shell.
