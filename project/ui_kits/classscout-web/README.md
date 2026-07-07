# ClassScout NYC web UI kit

Responsive click-through implementing the v2 handoff blueprints:

- **Home** (§16) — hero + active search panel, quick-start scenarios, trust module, Scout + provider CTAs.
- **Results** (§6, §28, §34) — active removable filter chips; XS/SM: single column + list/map toggle + bottom-sheet filters + full-screen map mode with pin preview; MD: 2-col grid + filter sheet; LG: list + map split; XL+: filter rail + results + map three-pane.
- **Detail** (§8) — breadcrumbs (desktop) / back (mobile), parent summary, key facts (stacked on mobile), why-it-may-fit, check-before-booking, source block.

`index.html` is the entry — resize the preview to see XS→XXL behaviour. Mobile widths get the five-tab BottomNav; desktop the TopNav. Filters and saved state live in the app root, so navigating between screens preserves them (v2 §35.6).

All UI composes `components/` primitives — nothing is re-implemented here. The map is a placeholder panel (real product: MapLibre + OSM per §34.7) that still honors the interaction contract: pin↔card selection sync, pin preview card, "Search this area", zoom/locate controls, cluster pin.
