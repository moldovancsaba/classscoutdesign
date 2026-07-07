import React from 'react';

/* Breakpoint hook implementing tokens/breakpoints.css (v2 §28.1). */
export function useViewport() {
  const get = () => {
    const w = (typeof window !== 'undefined' && window.__vpOverride) || (typeof window !== 'undefined' ? window.innerWidth : 1280);
    const bp = w < 375 ? 'xs' : w < 600 ? 'sm' : w < 900 ? 'md' : w < 1200 ? 'lg' : w < 1440 ? 'xl' : 'xxl';
    return {
      width: w,
      bp,
      isMobile: w < 600,   /* XS/SM: single column, bottom nav, bottom-sheet filters */
      isTablet: w >= 600 && w < 1200,
      isDesktop: w >= 1200, /* XL+: filter rail + results + map split */
      canSplitMap: w >= 900, /* LG landscape/desktop: list+map side by side */
    };
  };
  const [vp, setVp] = React.useState(get);
  React.useEffect(() => {
    let raf = 0;
    const onResize = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setVp(get())); };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(raf); };
  }, []);
  return vp;
}

/* Top-nav links per width: "For providers" moves to the hamburger below 1150px. */
export function navLinksFor(vp) {
  const links = [
    { id: 'find', label: 'Find activities' },
    { id: 'week', label: 'This week' },
    { id: 'camps', label: 'Camps' },
    { id: 'birthdays', label: 'Birthday parties' },
    { id: 'saved', label: 'Saved' },
    { id: 'providers', label: 'For providers' },
  ];
  return vp.width < 1150 ? links.filter((l) => l.id !== 'providers') : links;
}
