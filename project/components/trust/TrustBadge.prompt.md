Soft-pill trust badge implementing the v2 §9.1 label table — green for confirmed source states, amber for estimates/unknowns, soft red only for reported-outdated.

```jsx
<TrustBadge kind="official-source" />
<TrustBadge kind="age-not-confirmed" />
<TrustBadge kind="reported-outdated" />
```

Cards must always carry an age state and a source state — use the amber "not confirmed" kinds rather than omitting.
