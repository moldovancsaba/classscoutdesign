/* @ds-bundle: {"format":4,"namespace":"ClassScoutDesignSystem_c4c0d3","components":[{"name":"EventCard","sourcePath":"components/cards/EventCard.jsx"},{"name":"ProviderCard","sourcePath":"components/cards/ProviderCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"CompareButton","sourcePath":"components/core/CompareButton.jsx"},{"name":"FitScore","sourcePath":"components/core/FitScore.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SaveButton","sourcePath":"components/core/SaveButton.jsx"},{"name":"DetailFactsTable","sourcePath":"components/detail/DetailFactsTable.jsx"},{"name":"ProviderCTA","sourcePath":"components/detail/ProviderCTA.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"BottomTabBar","sourcePath":"components/navigation/BottomTabBar.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"FilterSheet","sourcePath":"components/search/FilterSheet.jsx"},{"name":"HeroSearchPanel","sourcePath":"components/search/HeroSearchPanel.jsx"},{"name":"QuickStartCard","sourcePath":"components/search/QuickStartCard.jsx"},{"name":"ScoutResultCard","sourcePath":"components/search/ScoutResultCard.jsx"},{"name":"ScoutSearch","sourcePath":"components/search/ScoutSearch.jsx"},{"name":"ConfirmChecklist","sourcePath":"components/trust/ConfirmChecklist.jsx"},{"name":"LastCheckedLabel","sourcePath":"components/trust/LastCheckedLabel.jsx"},{"name":"PriceEstimateLabel","sourcePath":"components/trust/PriceEstimateLabel.jsx"},{"name":"ReportOutdatedLink","sourcePath":"components/trust/ReportOutdatedLink.jsx"},{"name":"SourceBlock","sourcePath":"components/trust/SourceBlock.jsx"},{"name":"TrustBadge","sourcePath":"components/trust/TrustBadge.jsx"}],"sourceHashes":{"components/cards/EventCard.jsx":"d8fd10183362","components/cards/ProviderCard.jsx":"9e4c09828a41","components/core/Badge.jsx":"b69f842b19d6","components/core/Button.jsx":"fdba72066e2e","components/core/Chip.jsx":"2d0154318358","components/core/CompareButton.jsx":"dd825a34459c","components/core/FitScore.jsx":"ac2768b39ebc","components/core/Logo.jsx":"79bf1444125a","components/core/SaveButton.jsx":"e6fac09ff158","components/detail/DetailFactsTable.jsx":"11403880590a","components/detail/ProviderCTA.jsx":"a50945a5fff2","components/feedback/EmptyState.jsx":"34fe1272cdb3","components/feedback/Skeleton.jsx":"df108f40527c","components/navigation/BottomTabBar.jsx":"e1195da02633","components/navigation/Sidebar.jsx":"656a1d9dcd4f","components/search/FilterSheet.jsx":"53d3aa948425","components/search/HeroSearchPanel.jsx":"f2f35a86fd09","components/search/QuickStartCard.jsx":"cb06162d5692","components/search/ScoutResultCard.jsx":"5d546cdd43d3","components/search/ScoutSearch.jsx":"b5f60aa6c8ef","components/trust/ConfirmChecklist.jsx":"b297e90aef1c","components/trust/LastCheckedLabel.jsx":"4b86b10ab95b","components/trust/PriceEstimateLabel.jsx":"6bc31a30d191","components/trust/ReportOutdatedLink.jsx":"d6671f4ee232","components/trust/SourceBlock.jsx":"bd28277e8884","components/trust/TrustBadge.jsx":"7b2b664037b3","ui_kits/scout_app/data.js":"bd0f907394ca","ui_kits/scout_app/screens.jsx":"dc800e3e6f25"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClassScoutDesignSystem_c4c0d3 = window.ClassScoutDesignSystem_c4c0d3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — color by meaning (handoff §9.1): trust (muted green), estimate (amber),
 * neutral (chip bg), alert (soft red). 12px, semibold, pill.
 * Every badge must have an operational definition — no vague trust claims.
 */
function Badge({
  tone = "neutral",
  children,
  style
}) {
  const tones = {
    trust: {
      background: "var(--trust-tint)",
      color: "var(--trust)",
      border: "1px solid var(--trust)"
    },
    estimate: {
      background: "var(--warning-tint)",
      color: "var(--warning)",
      border: "1px solid var(--warning)"
    },
    neutral: {
      background: "var(--chip-bg)",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    },
    alert: {
      background: "var(--error-tint)",
      color: "var(--error)",
      border: "1px solid var(--error)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      borderRadius: "var(--r-pill)",
      padding: "3px 10px",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ClassScout NYC button. primary = teal fill (#1F7A8C, hover/pressed #145766),
 * secondary = white + soft border, ghost = transparent + border,
 * disabled = muted grey. Radius 12px (buttons 12–14 per handoff §11.4).
 */
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const variants = {
    primary: {
      background: pressed || hover ? "var(--primary-dark)" : "var(--primary)",
      color: "var(--text-on-primary)",
      border: "none"
    },
    secondary: {
      background: "var(--bg-card)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-soft)"
    },
    ghost: {
      background: hover ? "var(--chip-bg)" : "transparent",
      color: "var(--primary)",
      border: "1px solid var(--border-soft)"
    },
    trust: {
      background: "var(--trust)",
      color: "#ffffff",
      border: "none"
    }
  };
  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: 14
    },
    md: {
      padding: "11px 18px",
      fontSize: 15
    },
    lg: {
      padding: "13px 24px",
      fontSize: 16
    }
  };
  const disabledStyle = disabled ? {
    background: "#e7e4de",
    color: "#9aa0a8",
    border: "none",
    cursor: "not-allowed"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setPressed(false);
      setHover(false);
    },
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      borderRadius: "var(--r-btn)",
      cursor: "pointer",
      transition: "var(--transition-base)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: fullWidth ? "100%" : undefined,
      ...variants[variant],
      ...sizes[size],
      ...disabledStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/EventCard.jsx
try { (() => {
/**
 * Event card (Blueprint p9/p17) — same shell as ProviderCard plus date+time meta,
 * top-left category badge, and accent terracotta "Tickets" primary CTA.
 */
function EventCard({
  name,
  venue,
  neighborhood,
  image,
  categoryBadge,
  dateLabel,
  price,
  saved = false,
  onTickets,
  onView,
  onSave,
  onShare,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(saved);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--cs-white)",
      border: "1px solid var(--cs-line)",
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-elevated)" : "var(--shadow-card)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "var(--transition-base)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      position: "relative",
      background: image ? `url(${image}) center/cover` : "linear-gradient(135deg, var(--cs-terracotta), var(--cs-sage))"
    }
  }, categoryBadge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "trust"
  }, categoryBadge)), /*#__PURE__*/React.createElement("button", {
    "aria-label": isSaved ? "Remove from saved" : "Save event",
    onClick: () => {
      setIsSaved(!isSaved);
      onSave && onSave(!isSaved);
    },
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "rgba(255,255,255,.92)",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      color: isSaved ? "var(--cs-terracotta)" : "var(--cs-navy)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: isSaved ? "ti ti-heart-filled" : "ti ti-heart"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--cs-navy)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cs-slate)",
      fontSize: 13
    }
  }, venue, neighborhood ? ` · ${neighborhood}` : "")), dateLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "var(--cs-slate)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-calendar",
    style: {
      fontSize: 15
    }
  }), dateLabel), price != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--cs-terracotta-600)"
    }
  }, price === 0 ? "Free" : /*#__PURE__*/React.createElement("span", null, "est. $", price, /*#__PURE__*/React.createElement("small", {
    style: {
      fontWeight: 600,
      color: "var(--cs-slate)",
      fontSize: 11
    }
  }, "/ticket"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    size: "sm",
    style: {
      flex: 1
    },
    onClick: onTickets
  }, "Tickets"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onView
  }, "View details"), onShare && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Share",
    onClick: onShare,
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      border: "1px solid var(--cs-line)",
      background: "var(--cs-white)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
      color: "var(--cs-navy)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-share-2"
  })))));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
/**
 * Filter chip (handoff §11.2/§6.2): pill, #EDF7F8 bg, teal when selected.
 * Applied-filter chips are removable (dismissible ✕).
 */
function Chip({
  selected = false,
  dismissible = false,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": selected,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: "var(--r-pill)",
      border: "1px solid",
      padding: "7px 14px",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      transition: "var(--transition-base)",
      background: selected ? "var(--primary)" : hover ? "var(--chip-bg)" : "var(--bg-card)",
      borderColor: selected ? "var(--primary)" : "var(--border-soft)",
      color: selected ? "#ffffff" : "var(--text-primary)",
      ...style
    }
  }, children, dismissible && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 11
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/CompareButton.jsx
try { (() => {
/**
 * Compare button — adds an activity to the compare/saved set. Quiet secondary pill.
 * Works without account creation.
 */
function CompareButton({
  added = false,
  onToggle,
  style
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  return /*#__PURE__*/React.createElement("button", {
    "aria-pressed": isAdded,
    onClick: () => {
      setIsAdded(!isAdded);
      onToggle && onToggle(!isAdded);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: "var(--r-pill)",
      padding: "7px 14px",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      border: "1px solid " + (isAdded ? "var(--primary)" : "var(--border-soft)"),
      background: isAdded ? "var(--chip-bg)" : "var(--bg-card)",
      color: isAdded ? "var(--primary)" : "var(--text-primary)",
      cursor: "pointer",
      transition: "var(--transition-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: isAdded ? "ti ti-check" : "ti ti-arrows-left-right",
    style: {
      fontSize: 14
    }
  }), isAdded ? "Added to compare" : "Compare");
}
Object.assign(__ds_scope, { CompareButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CompareButton.jsx", error: String((e && e.message) || e) }); }

// components/core/FitScore.jsx
try { (() => {
/**
 * Fit chip for Scout results — "may fit" language only (handoff §10.4).
 * Quiet teal-tint pill; never numeric confidence shown to parents without explanation.
 */
function FitScore({
  label = "May fit",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      borderRadius: "var(--r-pill)",
      padding: "5px 12px",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      background: "var(--chip-bg)",
      border: "1px solid var(--primary)",
      color: "var(--primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--primary)"
    }
  }), label);
}
Object.assign(__ds_scope, { FitScore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FitScore.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProviderCard.jsx
try { (() => {
/**
 * Provider listing card (Design System p10 + Blueprint p17). Three variants:
 * rich (16:9 image, badges, tags, price+rating, actions), compact (72px thumb row),
 * ai (fit score + "Why this fits" panel).
 * White card, #eee7dd border, soft shadow, 16px radius; hover lift −2px + elevated shadow.
 * Price always carries "est."; branded fallback gradient when no image.
 */
function ProviderCard({
  variant = "rich",
  name,
  neighborhood,
  borough,
  image,
  featuredBadge,
  trustBadge,
  urgencyBadge,
  announcement,
  tags = [],
  price,
  priceUnit = "class",
  rating,
  reviewCount,
  saved = false,
  fitLabel,
  fitScore,
  whyThisFits,
  sourceLabel,
  lastChecked,
  onView,
  onSave,
  onAdd,
  onShare,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(saved);
  const toggleSave = () => {
    setIsSaved(!isSaved);
    onSave && onSave(!isSaved);
  };
  const cardStyle = {
    background: "var(--cs-white)",
    border: "1px solid var(--cs-line)",
    borderRadius: "var(--r-lg)",
    overflow: "hidden",
    boxShadow: hover ? "var(--shadow-elevated)" : "var(--shadow-card)",
    transform: hover ? "translateY(-2px)" : "none",
    transition: "var(--transition-base)",
    fontFamily: "var(--font-body)",
    ...style
  };
  const fallback = "linear-gradient(135deg, var(--cs-sage), var(--cs-navy))";
  const iconBtn = (glyph, label, onClick, active) => /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      border: "1px solid var(--cs-line)",
      background: "var(--cs-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: 15,
      color: active ? "var(--cs-terracotta)" : "var(--cs-navy)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-" + glyph,
    style: active ? {
      fontWeight: 700
    } : undefined
  }));
  const trustRow = (sourceLabel || lastChecked) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--text-secondary)",
      borderTop: "1px solid var(--line)",
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-file-check",
    style: {
      fontSize: 13,
      color: "var(--trust)",
      flex: "0 0 auto"
    }
  }), sourceLabel && /*#__PURE__*/React.createElement("span", null, "Source: ", sourceLabel), sourceLabel && lastChecked && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"), lastChecked && /*#__PURE__*/React.createElement("span", null, "Last checked ", lastChecked));
  const priceRow = price != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      fontWeight: 700,
      color: "var(--cs-terracotta-600)"
    }
  }, "est. $", price, /*#__PURE__*/React.createElement("small", {
    style: {
      fontWeight: 600,
      color: "var(--cs-slate)",
      fontSize: 11
    }
  }, "/", priceUnit), rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontWeight: 600,
      color: "var(--cs-navy)",
      fontSize: 14,
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-star-filled",
    style: {
      color: "var(--cs-terracotta)",
      fontSize: 14
    }
  }), rating, reviewCount != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cs-slate)",
      fontWeight: 500
    }
  }, "(", reviewCount, ")")));
  if (variant === "compact") {
    return /*#__PURE__*/React.createElement("div", {
      style: cardStyle,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        padding: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        flex: "0 0 72px",
        borderRadius: "var(--r-md)",
        background: image ? `url(${image}) center/cover` : fallback
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 15,
        color: "var(--cs-navy)"
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--cs-slate)",
        fontSize: 13
      }
    }, neighborhood, borough ? `, ${borough}` : ""), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      key: t,
      tone: "neutral"
    }, t))), price != null && /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--cs-terracotta-600)",
        fontSize: 14
      }
    }, "est. $", price, /*#__PURE__*/React.createElement("small", {
      style: {
        fontWeight: 600,
        color: "var(--cs-slate)",
        fontSize: 11
      }
    }, "/", priceUnit)), trustRow)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        padding: "0 12px 12px"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "ghost",
      size: "sm",
      style: {
        flex: 1
      },
      onClick: onView
    }, "View"), iconBtn("plus", "Add to calculator", onAdd), iconBtn(isSaved ? "heart-filled" : "heart", "Save", toggleSave, isSaved)));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: cardStyle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160,
      position: "relative",
      background: image ? undefined : variant === "ai" ? "linear-gradient(135deg, var(--cs-terracotta), var(--cs-navy))" : fallback,
      overflow: "hidden"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.05)" : "scale(1)",
      transition: "transform 500ms ease"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 10,
      display: "flex",
      gap: 6
    }
  }, variant === "ai" && fitLabel ? /*#__PURE__*/React.createElement(__ds_scope.FitScore, {
    label: fitLabel,
    score: fitScore
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, featuredBadge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "featured",
    eyebrow: true
  }, featuredBadge), trustBadge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "trust"
  }, trustBadge), urgencyBadge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "urgency"
  }, urgencyBadge))), /*#__PURE__*/React.createElement("button", {
    "aria-label": isSaved ? "Remove from saved" : "Save provider",
    onClick: toggleSave,
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "rgba(255,255,255,.92)",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      color: isSaved ? "var(--cs-terracotta)" : "var(--cs-navy)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: isSaved ? "ti ti-heart-filled" : "ti ti-heart"
  })), announcement && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 10,
      left: 10,
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      borderRadius: "var(--r-pill)",
      padding: "4px 10px",
      fontSize: 11,
      fontWeight: 600,
      background: "rgba(255,255,255,.92)",
      color: "var(--cs-navy)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-speakerphone",
    style: {
      fontSize: 13
    }
  }), announcement)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      color: hover ? "var(--cs-terracotta-600)" : "var(--cs-navy)",
      transition: "var(--transition-base)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cs-slate)",
      fontSize: 13
    }
  }, neighborhood, borough ? `, ${borough}` : "")), variant === "ai" && whyThisFits ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cs-cream)",
      border: "1px dashed var(--cs-terracotta)",
      borderRadius: "var(--r-md)",
      padding: 10,
      fontSize: 13,
      color: "var(--cs-slate)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--cs-navy)"
    }
  }, "Why this fits: "), whyThisFits) : tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    tone: "neutral"
  }, t))), priceRow, trustRow, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    style: {
      flex: 1
    },
    onClick: onView
  }, "View details"), onAdd && iconBtn("plus", "Add to calculator", onAdd), iconBtn(isSaved ? "heart-filled" : "heart", "Save", toggleSave, isSaved), onShare && iconBtn("share-2", "Share", onShare))));
}
Object.assign(__ds_scope, { ProviderCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProviderCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/**
 * ClassScout NYC logo lockup — pin mark in a soft badge + "ClassScout" wordmark + "NYC" qualifier.
 * One brand name everywhere: ClassScout NYC (handoff §4.1).
 * `assetBase` = relative path to the design-system root (default "../..").
 */
function Logo({
  size = 40,
  withWordmark = true,
  assetBase = "../..",
  onDark = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: "var(--bg-main)",
      border: "1px solid var(--border-soft)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + "/assets/brand/logo-pin.png",
    alt: "ClassScout NYC logo",
    style: {
      width: "76%",
      height: "76%",
      objectFit: "contain"
    }
  })), withWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 6,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: Math.max(16, size * 0.45),
      letterSpacing: "-0.01em",
      color: onDark ? "#ffffff" : "var(--text-primary)"
    }
  }, "ClassScout"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: Math.max(11, size * 0.28),
      color: "var(--primary)",
      letterSpacing: "0.04em"
    }
  }, "NYC")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SaveButton.jsx
try { (() => {
/**
 * Save button (heart) — 44px tap target, reachable by thumb on mobile.
 */
function SaveButton({
  saved = false,
  onToggle,
  size = 40,
  style
}) {
  const [isSaved, setIsSaved] = React.useState(saved);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": isSaved ? "Remove from saved" : "Save activity",
    "aria-pressed": isSaved,
    onClick: () => {
      setIsSaved(!isSaved);
      onToggle && onToggle(!isSaved);
    },
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: "1px solid var(--border-soft)",
      background: "var(--bg-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: size * 0.42,
      flex: "0 0 auto",
      color: isSaved ? "var(--primary)" : "var(--text-secondary)",
      transition: "var(--transition-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: isSaved ? "ti ti-heart-filled" : "ti ti-heart"
  }));
}
Object.assign(__ds_scope, { SaveButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SaveButton.jsx", error: String((e && e.message) || e) }); }

// components/detail/DetailFactsTable.jsx
try { (() => {
/**
 * Key-facts table for detail pages (handoff §8.3): label/value rows —
 * age, type, format, location, indoor/outdoor, price, booking, source, last checked.
 * Stacked rows (mobile-safe), never a dense grid table.
 */
function DetailFactsTable({
  facts,
  style
}) {
  const rows = facts || [["Age range", "6–10"], ["Activity type", "STEM class"], ["Format", "Weekly / drop-in"], ["Location", "Park Slope, Brooklyn"], ["Indoor/outdoor", "Indoor"], ["Price", "Estimated from $45"], ["Booking", "Registration required"], ["Source", "Provider website"], ["Last checked", "2 July 2026"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rows.map(([label, value], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      gap: 12,
      padding: "10px 14px",
      borderTop: i === 0 ? "none" : "1px solid var(--line)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 130px",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-primary)",
      fontWeight: 500
    }
  }, value))));
}
Object.assign(__ds_scope, { DetailFactsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/detail/DetailFactsTable.jsx", error: String((e && e.message) || e) }); }

// components/detail/ProviderCTA.jsx
try { (() => {
/**
 * Provider CTA card (handoff §18): "claim this listing" / provider-facing prompt.
 * Calm, factual — providers improve listing trust by claiming and updating.
 */
function ProviderCTA({
  headline = "Are you the provider?",
  body = "Claim this listing to confirm ages, prices, and schedules. Claimed listings show a \u201cProvider claimed\u201d label.",
  actionLabel = "Claim listing",
  onAction,
  secondaryLabel,
  onSecondary,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--chip-bg)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--r-lg)",
      padding: 16,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, headline), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onAction
  }, actionLabel), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onSecondary
  }, secondaryLabel)));
}
Object.assign(__ds_scope, { ProviderCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/detail/ProviderCTA.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/**
 * Empty / error state card ("what happened · why · next action" — every surface defines all five states).
 * White card, sage icon circle, calm copy, one clear next action. Never jokes.
 */
function EmptyState({
  kind = "empty",
  icon,
  title,
  description,
  actionLabel,
  onAction,
  secondaryLabel,
  onSecondary,
  style
}) {
  const defaults = {
    empty: {
      icon: "compass",
      title: "No matching activities found yet",
      description: "Try changing age, neighborhood, date, or activity type.",
      actionLabel: "Broaden filters"
    },
    error: {
      icon: "alert-triangle",
      title: "We could not load this section",
      description: "Please refresh or try again.",
      actionLabel: "Try again"
    }
  };
  const d = defaults[kind] || defaults.empty;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cs-white)",
      border: "1px solid var(--cs-line)",
      borderRadius: "var(--r-lg)",
      padding: 28,
      textAlign: "center",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      background: "var(--cs-sage-100)",
      color: "var(--cs-sage-600)",
      margin: "0 auto 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-" + (icon || d.icon),
    style: {
      fontSize: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--cs-navy)",
      marginBottom: 4
    }
  }, title || d.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--cs-slate)",
      maxWidth: 360,
      margin: "0 auto"
    }
  }, description || d.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "center",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: kind === "error" ? "primary" : "ghost",
    size: "sm",
    onClick: onAction
  }, actionLabel || d.actionLabel), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onSecondary
  }, secondaryLabel)));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/**
 * Loading skeleton — shimmering bars/blocks ("skeletons, never blank").
 * variant="card" renders a full provider-card skeleton; variant="line" a single bar.
 */
function Skeleton({
  variant = "line",
  width = "100%",
  height = 14,
  style
}) {
  const bar = (w, h, extra) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(90deg, #ece8e0, #f6f3ec, #ece8e0)",
      backgroundSize: "200% 100%",
      animation: "cs-shimmer 1.2s infinite linear",
      borderRadius: 8,
      width: w,
      height: h,
      ...extra
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes cs-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }"), variant === "card" ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cs-white)",
      border: "1px solid var(--cs-line)",
      borderRadius: "var(--r-lg)",
      overflow: "hidden"
    }
  }, bar("100%", 120, {
    borderRadius: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, bar("70%", 14), bar("45%", 12), bar("55%", 12))) : bar(width, height));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomTabBar.jsx
try { (() => {
/**
 * Mobile bottom tab bar (redesign WS4): white surface, hairline top border, five tabs —
 * Home · Discover · Scout AI (emphasized terracotta center pop) · Saved · Account.
 * Active = terracotta, inactive = slate. Never dark navy (Design System rule).
 */
function BottomTabBar({
  active = "Home",
  onNavigate,
  style
}) {
  const tabs = [{
    key: "Home",
    icon: "home-2"
  }, {
    key: "Discover",
    icon: "compass"
  }, {
    key: "Scout AI",
    icon: "message-circle",
    emphasized: true
  }, {
    key: "Saved",
    icon: "heart"
  }, {
    key: "Account",
    icon: "user-circle"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      background: "var(--cs-white)",
      borderTop: "1px solid var(--cs-border-card)",
      display: "flex",
      alignItems: "stretch",
      padding: "0 8px",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, tabs.map(({
    key,
    icon,
    emphasized
  }) => {
    const isActive = key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onNavigate && onNavigate(key),
      "aria-current": isActive ? "page" : undefined,
      "aria-label": key,
      style: {
        flex: 1,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "8px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: emphasized ? {
        background: "var(--cs-terracotta)",
        color: "var(--cs-white)",
        borderRadius: 999,
        padding: 10,
        marginTop: -22,
        boxShadow: "var(--shadow-card)",
        display: "inline-flex"
      } : {
        color: isActive ? "var(--cs-terracotta-600)" : "var(--cs-slate)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-" + icon,
      style: {
        fontSize: emphasized ? 24 : 22
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: isActive ? 700 : 500,
        color: isActive ? "var(--cs-terracotta-600)" : "var(--cs-slate)",
        lineHeight: 1
      }
    }, key));
  }));
}
Object.assign(__ds_scope, { BottomTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomTabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
/**
 * Desktop navigation sidebar (Design System p7 + issue 480): brand-navy column, cream text,
 * two groups (Discover / My tools), terracotta pill active state, inactive rgba(250,247,241,.72).
 */
function Sidebar({
  active = "Home",
  onNavigate,
  assetBase = "../..",
  promo,
  style
}) {
  const groups = [{
    label: "Discover",
    items: [{
      key: "Home",
      icon: "home-2"
    }, {
      key: "Scout AI",
      icon: "message-circle"
    }, {
      key: "Classes",
      icon: "school"
    }, {
      key: "Camps",
      icon: "tent"
    }, {
      key: "Birthday Parties",
      icon: "confetti"
    }, {
      key: "Drop-In Activities",
      icon: "sparkles"
    }, {
      key: "Family Events",
      icon: "calendar-clock"
    }, {
      key: "Meet-Up Groups",
      icon: "users"
    }]
  }, {
    label: "My tools",
    items: [{
      key: "Saved",
      icon: "heart"
    }, {
      key: "Calculator",
      icon: "calculator"
    }, {
      key: "My Account",
      icon: "user-circle"
    }]
  }];
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      width: 288,
      background: "var(--cs-navy)",
      color: "var(--cs-cream)",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      fontFamily: "var(--font-body)",
      minHeight: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 40,
    onDark: true,
    assetBase: assetBase
  }), groups.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.label,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "var(--cs-slate-300)",
      padding: "0 12px 6px"
    }
  }, group.label), group.items.map(({
    key,
    icon
  }) => {
    const isActive = key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onNavigate && onNavigate(key),
      "aria-current": isActive ? "page" : undefined,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 12px",
        borderRadius: "var(--r-md)",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontSize: 14,
        fontFamily: "var(--font-body)",
        background: isActive ? "var(--cs-terracotta)" : "transparent",
        color: isActive ? "var(--cs-cream)" : "var(--text-nav-inactive)",
        fontWeight: isActive ? 600 : 500,
        transition: "var(--transition-base)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-" + icon,
      style: {
        fontSize: 17
      }
    }), key);
  }))), promo !== false && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      background: "var(--cs-navy-700)",
      borderRadius: "var(--r-lg)",
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "List your program"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-nav-inactive)"
    }
  }, "Tell us about your program and we'll follow up about the right listing path for local families."), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "var(--cs-terracotta)",
      color: "var(--cs-cream)",
      border: "none",
      borderRadius: "var(--r-pill)",
      padding: "9px 14px",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 13,
      cursor: "pointer"
    }
  }, "Request listing info")));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/search/FilterSheet.jsx
try { (() => {
/**
 * Mobile filter bottom sheet (handoff §17.2 / §28.2): drag handle, chip groups,
 * sticky Apply/Clear footer. 24px top radius (modals/sheets). Cosmetic recreation —
 * render inside a positioned container or overlay.
 */
function FilterSheet({
  title = "Filters",
  groups,
  values = {},
  onChange,
  onApply,
  onClear,
  resultCount,
  style
}) {
  const defs = groups || [{
    key: "age",
    label: "Child age",
    options: ["0–2", "3–5", "5–8", "9–12", "Teens"]
  }, {
    key: "date",
    label: "Date",
    options: ["Today", "Tomorrow", "This week", "This weekend"]
  }, {
    key: "price",
    label: "Price",
    options: ["Free", "Low-cost", "Any"]
  }, {
    key: "setting",
    label: "Indoor / outdoor",
    options: ["Indoor", "Outdoor", "Either"]
  }];
  const [local, setLocal] = React.useState(values);
  const pick = (g, opt) => {
    const next = {
      ...local,
      [g]: local[g] === opt ? undefined : opt
    };
    setLocal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-card)",
      borderRadius: "var(--r-xl) var(--r-xl) 0 0",
      boxShadow: "var(--shadow-elevated)",
      border: "1px solid var(--border-soft)",
      borderBottom: "none",
      fontFamily: "var(--font-body)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 36,
      height: 4,
      borderRadius: "var(--r-pill)",
      background: "var(--border-soft)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 18px 4px",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 18px 12px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      maxHeight: 320,
      overflowY: "auto"
    }
  }, defs.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.key
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-secondary)",
      marginBottom: 6
    }
  }, g.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, g.options.map(opt => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: opt,
    selected: local[g.key] === opt,
    onClick: () => pick(g.key, opt)
  }, opt)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "12px 18px",
      borderTop: "1px solid var(--line)",
      background: "var(--bg-card)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: () => {
      setLocal({});
      onClear && onClear();
    }
  }, "Clear"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => onApply && onApply(local)
  }, resultCount != null ? `Show ${resultCount} activities` : "Show activities")));
}
Object.assign(__ds_scope, { FilterSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/FilterSheet.jsx", error: String((e && e.message) || e) }); }

// components/search/HeroSearchPanel.jsx
try { (() => {
/**
 * Homepage hero search panel (handoff §16.1): five parent-intent fields —
 * child age, neighbourhood, date, activity type, budget — with
 * "Show activities" primary CTA, "Let Scout guide me" secondary, and the trust line.
 */
function HeroSearchPanel({
  onSearch,
  onScout,
  fields,
  trustLine = "Source-backed listings · Clear estimates · Confirm final details with providers",
  style
}) {
  const defs = fields || [{
    key: "age",
    label: "Child age",
    placeholder: "e.g. 6"
  }, {
    key: "location",
    label: "Neighbourhood",
    placeholder: "e.g. Park Slope"
  }, {
    key: "date",
    label: "Date",
    placeholder: "This weekend"
  }, {
    key: "type",
    label: "Activity type",
    placeholder: "Any"
  }, {
    key: "budget",
    label: "Budget",
    placeholder: "Any"
  }];
  const [values, setValues] = React.useState({});
  const field = f => /*#__PURE__*/React.createElement("label", {
    key: f.key,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: "1 1 120px",
      minWidth: 110
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-secondary)"
    }
  }, f.label), /*#__PURE__*/React.createElement("input", {
    value: values[f.key] || "",
    onChange: e => setValues({
      ...values,
      [f.key]: e.target.value
    }),
    placeholder: f.placeholder,
    style: {
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--r-md)",
      padding: "10px 12px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      background: "var(--bg-card)",
      color: "var(--text-primary)",
      minHeight: 44
    }
  }));
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSearch && onSearch(values);
    },
    style: {
      background: "var(--bg-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--r-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 16,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, defs.map(field)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    type: "submit"
  }, "Show activities"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    type: "button",
    onClick: onScout
  }, "Let Scout guide me")), trustLine && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 10
    }
  }, trustLine));
}
Object.assign(__ds_scope, { HeroSearchPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/HeroSearchPanel.jsx", error: String((e && e.message) || e) }); }

// components/search/QuickStartCard.jsx
try { (() => {
/**
 * Quick-start scenario card (handoff §16.2): parent situations, not taxonomy —
 * "This weekend", "Free & low-cost", "Toddler drop-ins". Icon + label + one-line desc.
 */
function QuickStartCard({
  icon = "calendar-heart",
  label,
  description,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      background: "var(--bg-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--r-lg)",
      padding: 16,
      textAlign: "left",
      cursor: "pointer",
      boxShadow: hover ? "var(--shadow-elevated)" : "var(--shadow-card)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "var(--transition-base)",
      fontFamily: "var(--font-body)",
      minHeight: 44,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--r-md)",
      background: "var(--chip-bg)",
      color: "var(--primary-dark)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-" + icon,
    style: {
      fontSize: 18
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, description));
}
Object.assign(__ds_scope, { QuickStartCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/QuickStartCard.jsx", error: String((e && e.message) || e) }); }

// components/search/ScoutResultCard.jsx
try { (() => {
/**
 * Scout AI result card (handoff §10.3): "may fit" reasoning + what's uncertain +
 * confirm-before-booking items + link to details. Humble wording only —
 * never "best", "guaranteed", "perfect match".
 */
function ScoutResultCard({
  name,
  provider,
  meta,
  whyFit,
  confirmItems,
  onView,
  onAskMore,
  style
}) {
  const items = confirmItems || ["Current price", "Exact time", "Whether registration is required", "Parent presence policy"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--r-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 16,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }, name), (provider || meta) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, provider, provider && meta ? " · " : "", meta), whyFit && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--chip-bg)",
      borderRadius: "var(--r-md)",
      padding: "10px 12px",
      fontSize: 13,
      color: "var(--text-primary)",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--primary-dark)"
    }
  }, "This may fit because "), whyFit), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-secondary)",
      marginBottom: 4
    }
  }, "Check before booking"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 13,
      color: "var(--text-secondary)",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onView
  }, "View details"), onAskMore && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onAskMore
  }, "Ask Scout more")));
}
Object.assign(__ds_scope, { ScoutResultCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/ScoutResultCard.jsx", error: String((e && e.message) || e) }); }

// components/search/ScoutSearch.jsx
try { (() => {
/**
 * Scout AI hero search (ScoutHeroSearch): white card, terracotta-outlined input row with
 * navy Ask button, BETA badge, suggested-prompt chips underneath.
 */
function ScoutSearch({
  placeholder = "What are you looking for today?",
  suggestions = ["Weekend activities", "Classes near me", "Birthday ideas"],
  onAsk,
  onSuggestion,
  style
}) {
  const [value, setValue] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cs-white)",
      border: "1px solid var(--cs-line)",
      borderRadius: "var(--r-lg)",
      padding: 14,
      boxShadow: "var(--shadow-card)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 8,
      color: "var(--cs-navy)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-sparkles",
    style: {
      color: "var(--cs-terracotta)",
      fontSize: 17
    }
  }), "Scout AI", /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, "BETA")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (value.trim()) {
        onAsk && onAsk(value.trim());
        setValue("");
      }
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      border: "1px solid var(--cs-terracotta)",
      borderRadius: "var(--r-pill)",
      padding: "6px 6px 6px 14px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: placeholder,
    "aria-label": "Ask Scout",
    style: {
      border: 0,
      outline: 0,
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      background: "transparent",
      color: "var(--cs-navy)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    type: "submit"
  }, "Ask")), suggestions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginTop: 10
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: s,
    kind: "filter",
    onClick: () => onSuggestion && onSuggestion(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--cs-slate)",
      marginTop: 10
    }
  }, "Scout can help narrow your options. Please confirm final details with the provider."));
}
Object.assign(__ds_scope, { ScoutSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/ScoutSearch.jsx", error: String((e && e.message) || e) }); }

// components/trust/ConfirmChecklist.jsx
try { (() => {
/**
 * Confirm-before-booking checklist (handoff §8.4): the practical items a parent
 * should verify with the provider. Interactive checkboxes for planning.
 */
const DEFAULT_ITEMS = ["Exact schedule", "Current price", "Age fit", "Registration requirements", "Cancellation / refund policy", "Parent presence requirement"];
function ConfirmChecklist({
  items = DEFAULT_ITEMS,
  title = "Check before booking",
  style
}) {
  const [checked, setChecked] = React.useState({});
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--warning-tint)",
      border: "1px solid var(--warning)",
      borderRadius: "var(--r-lg)",
      padding: 16,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 10,
      color: "var(--text-primary)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-checklist",
    style: {
      color: "var(--warning)",
      fontSize: 18
    }
  }), title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, items.map(item => /*#__PURE__*/React.createElement("label", {
    key: item,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 14,
      color: "var(--text-primary)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked[item],
    onChange: () => setChecked(c => ({
      ...c,
      [item]: !c[item]
    })),
    style: {
      width: 18,
      height: 18,
      accentColor: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: checked[item] ? "line-through" : "none",
      opacity: checked[item] ? 0.6 : 1
    }
  }, item)))));
}
Object.assign(__ds_scope, { ConfirmChecklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/ConfirmChecklist.jsx", error: String((e && e.message) || e) }); }

// components/trust/LastCheckedLabel.jsx
try { (() => {
/**
 * Last-checked label — freshness made visible (handoff §9.4).
 * When `stale`, shows the "details may have changed" caution instead.
 */
function LastCheckedLabel({
  date = "2 Jul 2026",
  stale = false,
  style
}) {
  const base = {
    fontFamily: "var(--font-body)",
    fontSize: 13,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    ...style
  };
  if (stale) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...base,
        color: "var(--warning)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-clock-exclamation",
      style: {
        fontSize: 14
      }
    }), "Details may have changed. Please confirm with provider.");
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-clock-check",
    style: {
      fontSize: 14
    }
  }), "Last checked ", date);
}
Object.assign(__ds_scope, { LastCheckedLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/LastCheckedLabel.jsx", error: String((e && e.message) || e) }); }

// components/trust/PriceEstimateLabel.jsx
try { (() => {
/**
 * Price estimate label — price uncertainty shown directly, never buried in a footer.
 * "Estimated from $45/session" in amber; "Free" in trust green; "Price unknown" neutral.
 */
function PriceEstimateLabel({
  price,
  unit = "session",
  status = "estimated",
  style
}) {
  const base = {
    fontFamily: "var(--font-body)",
    fontSize: 14,
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    ...style
  };
  if (price === 0) return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      color: "var(--trust)"
    }
  }, "Free");
  if (price == null || status === "unknown") return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      color: "var(--text-secondary)"
    }
  }, "Price unknown \u2014 confirm with provider");
  if (status === "confirmed") return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      color: "var(--text-primary)"
    }
  }, "$", price, "/", unit);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      color: "var(--warning)"
    }
  }, "Estimated from $", price, "/", unit);
}
Object.assign(__ds_scope, { PriceEstimateLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/PriceEstimateLabel.jsx", error: String((e && e.message) || e) }); }

// components/trust/ReportOutdatedLink.jsx
try { (() => {
/**
 * Report-outdated link — quiet inline action present wherever listing data appears.
 */
function ReportOutdatedLink({
  onReport,
  label = "Report outdated info",
  style
}) {
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 13,
        color: "var(--trust)",
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        ...style
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-circle-check",
      style: {
        fontSize: 14
      }
    }), "Thanks \u2014 we'll re-check this listing.");
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSent(true);
      onReport && onReport();
    },
    style: {
      background: "none",
      border: "none",
      padding: 0,
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--primary)",
      cursor: "pointer",
      textDecoration: "underline",
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-flag",
    style: {
      fontSize: 14
    }
  }), label);
}
Object.assign(__ds_scope, { ReportOutdatedLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/ReportOutdatedLink.jsx", error: String((e && e.message) || e) }); }

// components/trust/SourceBlock.jsx
try { (() => {
/**
 * Source block for detail pages (handoff §8.5): source type, last checked,
 * price/schedule status, and the standing "confirm with provider" line.
 */
function SourceBlock({
  sourceType = "Official provider website",
  sourceUrl,
  lastChecked = "2 Jul 2026",
  priceStatus = "Estimate",
  scheduleStatus = "Needs provider confirmation",
  onReport,
  style
}) {
  const row = {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    fontSize: 14,
    padding: "6px 0"
  };
  const label = {
    color: "var(--text-secondary)"
  };
  const value = {
    fontWeight: 600,
    color: "var(--text-primary)",
    textAlign: "right"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--r-lg)",
      padding: 16,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 6,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-file-info",
    style: {
      color: "var(--primary)",
      fontSize: 18
    }
  }), "Information source"), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Source type"), /*#__PURE__*/React.createElement("span", {
    style: value
  }, sourceUrl ? /*#__PURE__*/React.createElement("a", {
    href: sourceUrl,
    style: {
      color: "var(--primary)"
    }
  }, sourceType) : sourceType)), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Last checked"), /*#__PURE__*/React.createElement("span", {
    style: value
  }, /*#__PURE__*/React.createElement(__ds_scope.LastCheckedLabel, {
    date: lastChecked,
    style: {
      color: "var(--text-primary)",
      fontWeight: 600
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Price status"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...value,
      color: priceStatus === "Confirmed" ? "var(--trust)" : "var(--warning)"
    }
  }, priceStatus)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      borderBottom: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Schedule status"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...value,
      color: scheduleStatus === "Confirmed" ? "var(--trust)" : "var(--warning)"
    }
  }, scheduleStatus)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      paddingTop: 10,
      borderTop: "1px solid var(--border-soft)",
      fontSize: 13,
      color: "var(--text-secondary)",
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Always confirm final details directly with the provider before attending."), onReport && /*#__PURE__*/React.createElement("button", {
    onClick: onReport,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      color: "var(--primary)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      textDecoration: "underline"
    }
  }, "Report outdated info")));
}
Object.assign(__ds_scope, { SourceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/SourceBlock.jsx", error: String((e && e.message) || e) }); }

// components/trust/TrustBadge.jsx
try { (() => {
/**
 * TrustBadge — the defined trust labels only (handoff §9.1). Each label has an
 * operational meaning; anything else is rejected in favor of a neutral badge.
 */
const LABELS = {
  official_source: {
    text: "Official source",
    tone: "trust",
    icon: "shield-check"
  },
  public_source: {
    text: "Public source",
    tone: "neutral",
    icon: "world"
  },
  provider_claimed: {
    text: "Provider claimed",
    tone: "trust",
    icon: "circle-check"
  },
  recently_checked: {
    text: "Recently checked",
    tone: "trust",
    icon: "clock-check"
  },
  price_estimate: {
    text: "Price estimate",
    tone: "estimate",
    icon: "coin"
  },
  schedule_estimate: {
    text: "Schedule estimate",
    tone: "estimate",
    icon: "calendar-time"
  },
  age_not_confirmed: {
    text: "Age not confirmed",
    tone: "estimate",
    icon: "help-circle"
  },
  reported_outdated: {
    text: "Reported outdated",
    tone: "alert",
    icon: "flag"
  }
};
function TrustBadge({
  label = "public_source",
  style
}) {
  const def = LABELS[label] || LABELS.public_source;
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: def.tone,
    style: style
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-" + def.icon,
    style: {
      fontSize: 13
    }
  }), def.text);
}
Object.assign(__ds_scope, { TrustBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/TrustBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scout_app/data.js
try { (() => {
// Fake catalog data for the scout app UI kit. Real provider names are illustrative only.
window.SCOUT_DATA = {
  boroughs: ["All", "Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
  hoods: {
    Brooklyn: ["Park Slope", "Williamsburg", "Fort Greene", "Bay Ridge"],
    Manhattan: ["Upper West Side", "Tribeca", "Harlem", "Chelsea"],
    Queens: ["Astoria", "Jackson Heights", "Forest Hills", "Long Island City"],
    Bronx: ["Riverdale", "Fordham"],
    "Staten Island": ["St. George"]
  },
  filters: ["Weekend", "After-school", "Weekday", "Toddler", "Ages 5–8", "Ages 9–12"],
  providers: [{
    id: 1,
    name: "Brooklyn Soccer Lab",
    neighborhood: "Park Slope",
    borough: "Brooklyn",
    image: "../../assets/images/default-listing.jpg",
    featuredBadge: "Featured",
    announcement: "Open enrollment",
    tags: ["Classes", "Ages 5–8", "Weekend"],
    price: 45,
    rating: 4.8,
    reviewCount: 36
  }, {
    id: 2,
    name: "Little Makers STEM Studio",
    neighborhood: "Astoria",
    borough: "Queens",
    image: "../../assets/images/guide-play.jpg",
    trustBadge: "Parent Pick",
    tags: ["Classes", "STEM", "Ages 5–8"],
    price: 40,
    rating: 4.7,
    reviewCount: 22
  }, {
    id: 3,
    name: "Tumble Tots Studio",
    neighborhood: "Tribeca",
    borough: "Manhattan",
    tags: ["Drop-In", "Toddler"],
    price: 25,
    priceUnit: "visit",
    rating: 4.9,
    reviewCount: 51
  }, {
    id: 4,
    name: "Harlem Art House",
    neighborhood: "Harlem",
    borough: "Manhattan",
    image: "../../assets/images/discover-hero.jpg",
    urgencyBadge: "Few spots left",
    tags: ["Classes", "Art", "After-school"],
    price: 35,
    rating: 4.6,
    reviewCount: 18
  }, {
    id: 5,
    name: "Riverdale Swim Club",
    neighborhood: "Riverdale",
    borough: "Bronx",
    tags: ["Classes", "Ages 5–8", "Weekend"],
    price: 50,
    rating: 4.5,
    reviewCount: 14
  }, {
    id: 6,
    name: "Fort Greene Music Together",
    neighborhood: "Fort Greene",
    borough: "Brooklyn",
    image: "../../assets/images/meetup-cover.jpg",
    trustBadge: "Recommended",
    tags: ["Classes", "Toddler", "Weekday"],
    price: 30,
    rating: 4.8,
    reviewCount: 40
  }],
  events: [{
    id: 101,
    name: "Family Puppet Festival",
    venue: "BAM",
    neighborhood: "Fort Greene",
    image: "../../assets/images/guide-play.jpg",
    categoryBadge: "Free",
    dateLabel: "Sat Jul 12 · 10:00 AM",
    price: 0
  }, {
    id: 102,
    name: "Kids' Science Day",
    venue: "NY Hall of Science",
    neighborhood: "Corona",
    categoryBadge: "Weekend",
    dateLabel: "Sun Jul 13 · 11:00 AM",
    price: 18
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scout_app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/scout_app/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Scout app views: Home, Browse, Scout AI chat, Saved. Shares components via the DS bundle.
const DS = window.ClassScoutDesignSystem_c4c0d3;
const {
  Button,
  Badge,
  Chip,
  FitScore,
  Logo,
  ProviderCard,
  EventCard,
  ScoutSearch,
  EmptyState,
  Skeleton
} = DS;
const D = window.SCOUT_DATA;
const sectionTitle = {
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  fontSize: 26,
  letterSpacing: "-0.02em",
  color: "var(--cs-navy)",
  margin: 0
};
const grid3 = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 20
};
function HomeScreen({
  onNavigate,
  onAsk
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--cs-terracotta-600)",
      letterSpacing: "0.12em",
      marginBottom: 8
    }
  }, "ClassScout NYC"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 42,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      margin: 0,
      color: "var(--cs-navy)"
    }
  }, "Find the right local activity for your kid"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--cs-slate)",
      maxWidth: 540,
      marginBottom: 0
    }
  }, "Search classes, camps, drop-ins, events, and birthday ideas by age, neighborhood, schedule, and budget.")), /*#__PURE__*/React.createElement(ScoutSearch, {
    onAsk: onAsk,
    onSuggestion: onAsk
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate("Classes")
  }, "Find classes"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("Classes")
  }, "Explore neighborhoods"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 38%",
      alignSelf: "stretch",
      minHeight: 360,
      borderRadius: "var(--r-xl)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/home-hero.jpg",
    alt: "Kids at an activity",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: sectionTitle
  }, "Browse by category"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--cs-slate)",
      marginTop: 4
    }
  }, "Classes, camps, parties, drop-ins, events and meet-ups across NYC.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 14
    }
  }, [{
    key: "Classes",
    icon: "school",
    desc: "Dance, sports, art, STEM, music & more"
  }, {
    key: "Camps",
    icon: "tent",
    desc: "Summer, school break & specialty camps"
  }, {
    key: "Birthday Parties",
    icon: "confetti",
    desc: "Venues, entertainers & play spaces"
  }, {
    key: "Drop-In Activities",
    icon: "sparkles",
    desc: "Indoor play, open gym, toddler time"
  }, {
    key: "Meet-Up Groups",
    icon: "users",
    desc: "Parent groups, playdates & circles"
  }].map(({
    key,
    icon,
    desc
  }) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => onNavigate("Classes"),
    style: {
      background: "var(--cs-white)",
      border: "1px solid var(--cs-border-card)",
      borderRadius: "var(--r-lg)",
      padding: 16,
      textAlign: "left",
      cursor: "pointer",
      boxShadow: "var(--shadow-card)",
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--r-md)",
      background: "var(--cs-tag-neutral)",
      color: "var(--cs-navy)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-" + icon,
    style: {
      fontSize: 18
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: "var(--cs-navy)"
    }
  }, key), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--cs-slate)"
    }
  }, desc))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: sectionTitle
  }, "Popular classes"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNavigate("Classes")
  }, "Browse classes \u2192")), /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, D.providers.slice(0, 3).map(p => /*#__PURE__*/React.createElement(ProviderCard, _extends({
    key: p.id
  }, p, {
    onView: () => onNavigate("Classes"),
    onAdd: () => {},
    onShare: () => {}
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: sectionTitle
  }, "Family events"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNavigate("Family Events")
  }, "See all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, D.events.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.id
  }, e, {
    onTickets: () => {},
    onView: () => {}
  }))))));
}
function BrowseScreen({
  saved,
  onToggleSave
}) {
  const [borough, setBorough] = React.useState("Brooklyn");
  const [hood, setHood] = React.useState(null);
  const [filters, setFilters] = React.useState(["Weekend"]);
  const [loading, setLoading] = React.useState(false);
  const hoods = borough === "All" ? [] : D.hoods[borough] || [];
  const results = D.providers.filter(p => (borough === "All" || p.borough === borough) && (!hood || p.neighborhood === hood));
  const pick = (setter, value, current) => {
    setter(value === current ? null : value);
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...sectionTitle,
      fontSize: 32
    }
  }, "Classes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, D.boroughs.map(b => /*#__PURE__*/React.createElement(Chip, {
    key: b,
    kind: "borough",
    selected: b === borough,
    onClick: () => {
      setBorough(b);
      setHood(null);
    }
  }, b))), hoods.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, hoods.map(h => /*#__PURE__*/React.createElement(Chip, {
    key: h,
    kind: "hood",
    selected: h === hood,
    onClick: () => pick(setHood, h, hood)
  }, h))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      paddingBottom: 4,
      borderBottom: "1px solid var(--cs-line)"
    }
  }, D.filters.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    kind: "filter",
    selected: filters.includes(f),
    onClick: () => setFilters(filters.includes(f) ? filters.filter(x => x !== f) : [...filters, f])
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--cs-slate)"
    }
  }, results.length, " providers \xB7 estimated prices shown for planning \u2014 confirm with the provider"), loading ? /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "card"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "card"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "card"
  })) : results.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    kind: "empty",
    onAction: () => {
      setBorough("All");
      setHood(null);
    },
    secondaryLabel: "Ask Scout"
  }) : /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, results.map(p => /*#__PURE__*/React.createElement(ProviderCard, _extends({
    key: p.id
  }, p, {
    saved: saved.includes(p.id),
    onSave: () => onToggleSave(p.id),
    onView: () => {},
    onAdd: () => {},
    onShare: () => {}
  })))));
}
function ScoutScreen({
  initialQuery
}) {
  const [messages, setMessages] = React.useState(initialQuery ? [{
    role: "me",
    text: initialQuery
  }, {
    role: "ai",
    text: "Here are a few options that may fit. What's your child's age so I can narrow the best sessions?",
    cards: [D.providers[1]]
  }] : [{
    role: "ai",
    text: "Tell me your child's age, area, schedule, and interests — I'll suggest suitable options and explain what to check before booking."
  }]);
  const [value, setValue] = React.useState("");
  const send = text => {
    if (!text.trim()) return;
    setMessages(m => [...m, {
      role: "me",
      text
    }, {
      role: "ai",
      text: "These may fit your criteria. Please confirm schedule, price, and availability with the provider.",
      cards: [D.providers[0]]
    }]);
    setValue("");
  };
  const bubble = role => ({
    maxWidth: "72%",
    padding: "10px 14px",
    borderRadius: 14,
    fontSize: 14,
    lineHeight: 1.5,
    background: role === "me" ? "var(--cs-navy)" : "var(--cs-white)",
    color: role === "me" ? "var(--cs-cream)" : "var(--cs-navy)",
    border: role === "me" ? "none" : "1px solid var(--cs-line)",
    alignSelf: role === "me" ? "flex-end" : "flex-start"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...sectionTitle,
      fontSize: 32,
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, "Scout AI ", /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "BETA")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--cs-slate)",
      marginTop: 4
    }
  }, "Scout is in beta. It can help organise options, but details may change. Please confirm schedule, age fit, price, and availability with the provider.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: bubble(m.role)
  }, m.text), m.cards && m.cards.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(ProviderCard, _extends({
    variant: "ai"
  }, p, {
    fitLabel: "Good fit",
    whyThisFits: "matches your area and weekend schedule; age fit to confirm.",
    onView: () => {}
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["Show more", "Compare in calculator", "Switch borough"].map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    kind: "filter",
    onClick: () => send(c)
  }, c))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      send(value);
    },
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      background: "var(--cs-white)",
      border: "1px solid var(--cs-terracotta)",
      borderRadius: "var(--r-pill)",
      padding: "6px 6px 6px 16px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: "e.g. soccer for a 6-year-old in Queens on weekends",
    "aria-label": "Message Scout",
    style: {
      border: 0,
      outline: 0,
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      background: "transparent",
      color: "var(--cs-navy)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    type: "submit"
  }, "Send")));
}
function SavedScreen({
  saved,
  onToggleSave
}) {
  const items = D.providers.filter(p => saved.includes(p.id));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...sectionTitle,
      fontSize: 32
    }
  }, "Saved"), items.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "heart",
    title: "Nothing saved yet",
    description: "Save activities while browsing to compare them here later.",
    actionLabel: "Browse classes"
  }) : /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, items.map(p => /*#__PURE__*/React.createElement(ProviderCard, _extends({
    key: p.id
  }, p, {
    saved: true,
    onSave: () => onToggleSave(p.id),
    onView: () => {},
    onShare: () => {}
  })))));
}
Object.assign(window, {
  HomeScreen,
  BrowseScreen,
  ScoutScreen,
  SavedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scout_app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.ProviderCard = __ds_scope.ProviderCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.CompareButton = __ds_scope.CompareButton;

__ds_ns.FitScore = __ds_scope.FitScore;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SaveButton = __ds_scope.SaveButton;

__ds_ns.DetailFactsTable = __ds_scope.DetailFactsTable;

__ds_ns.ProviderCTA = __ds_scope.ProviderCTA;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.BottomTabBar = __ds_scope.BottomTabBar;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.FilterSheet = __ds_scope.FilterSheet;

__ds_ns.HeroSearchPanel = __ds_scope.HeroSearchPanel;

__ds_ns.QuickStartCard = __ds_scope.QuickStartCard;

__ds_ns.ScoutResultCard = __ds_scope.ScoutResultCard;

__ds_ns.ScoutSearch = __ds_scope.ScoutSearch;

__ds_ns.ConfirmChecklist = __ds_scope.ConfirmChecklist;

__ds_ns.LastCheckedLabel = __ds_scope.LastCheckedLabel;

__ds_ns.PriceEstimateLabel = __ds_scope.PriceEstimateLabel;

__ds_ns.ReportOutdatedLink = __ds_scope.ReportOutdatedLink;

__ds_ns.SourceBlock = __ds_scope.SourceBlock;

__ds_ns.TrustBadge = __ds_scope.TrustBadge;

})();
