import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function LastCheckedLabel({ date, source, stale, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6, font: 'var(--text-meta)', color: stale ? 'var(--badge-estimate-text)' : 'var(--text-secondary)', ...style }}>
      <Icon name="clock" size={13} style={{ alignSelf: 'center' }} />
      <span>
        {date ? 'Last checked ' + date : 'Not yet checked'}
        {source ? ' · Source: ' + source : ''}
        {stale ? ' · Details may have changed' : ''}
      </span>
    </span>
  );
}
