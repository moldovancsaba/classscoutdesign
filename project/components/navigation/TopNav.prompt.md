Sticky top nav — one row, six task links max, Ask Scout as CTA, hamburger only for secondary items.

```jsx
<TopNav current="week" onNav={nav} onScout={openScout} onMenu={openMenu} logoSrc="../../assets/logo-pin.png" />
<TopNav showLinks={false} onScout={openScout} />  // mobile top bar over BottomNav
```

Set `logoSrc` to the correct relative path from your page.
