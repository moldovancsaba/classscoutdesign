Five-tab mobile bottom nav (Search / This Week / Saved / Scout / Account). Never more than five; search is the first tab.

```jsx
<BottomNav current="search" onNav={nav} badge={{ saved: 3 }} />
```

Remember `padding-bottom: 72px` on the scroll container so content clears the bar.
