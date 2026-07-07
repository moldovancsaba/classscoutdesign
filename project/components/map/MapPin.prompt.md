Map markers per the pin table — few colours on purpose (comprehension over decoration).

```jsx
<MapPin label="Kids Robotics Workshop" onClick={select} />
<MapPin type="free" label="Story Time" />
<MapPin type="cluster" count={12} onClick={zoomIn} />
<MapPin type="saved" label="Saved: Art Studio" selected />
```

Every pin must correspond to a visible list item (accessibility rule §34.10).
