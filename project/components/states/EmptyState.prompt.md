No-results state: names the search, explains, offers recovery buttons.

```jsx
<EmptyState
  title="No matching activities found for ages 5–8 in Park Slope this weekend"
  actions={[
    { label: 'Expand to Brooklyn', primary: true, onClick: expand },
    { label: 'Remove date', onClick: removeDate },
    { label: 'Ask Scout', icon: 'sparkles', onClick: ask },
  ]}
/>
```
