The most important component — answers what / who for / where / when / cost / reliability / next step in one card.

```jsx
<ActivityCard
  title="Kids Robotics Workshop" provider="Brooklyn Robot Foundry"
  neighborhood="Park Slope, Brooklyn" category="STEM" ages="6–10" setting="Indoor"
  summary="Hands-on robotics class for children who enjoy building and problem-solving."
  price="$45" schedule="This Saturday"
  sourceKind="official-source" lastChecked="2 July 2026" sourceLabel="provider website"
  providerHref={url} onViewDetails={open} onAskScout={ask}
/>
```

Rules: never invent images (omit → honest placeholder); never omit age/source states; `compact` for mobile lists; `priceStatus="free" | "unknown"` when applicable.
