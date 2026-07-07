The full v2 filter set. `mode="sheet"` = fixed bottom sheet with scrim + drag handle (mobile); `mode="rail"` = in-flow 264px filter rail (tablet landscape / desktop).

```jsx
<FilterSheet mode="sheet" open={sheetOpen} values={f} onChange={setF} onApply={apply} onClose={close} resultCount={12} />
<FilterSheet mode="rail" values={f} onChange={setF} onApply={apply} onClear={clear} />
```
