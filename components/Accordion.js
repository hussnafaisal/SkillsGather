'use client';

import { useId, useState } from 'react';
import { ChevronDown } from './Icons';

/**
 * Accessible FAQ accordion. Items: [{ q, a }]. One answer open at a time.
 * Uses real buttons so Tab, Enter and Space all work.
 */
export default function Accordion({ items }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="acc">
      {items.map((item, i) => {
        const open = openIndex === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div key={item.q} className={`acc__item ${open ? 'is-open' : ''}`}>
            <h3 className="acc__heading">
              <button
                id={buttonId}
                type="button"
                className="acc__button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <span>{item.q}</span>
                <ChevronDown className="acc__chevron" size={22} />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="acc__panel">
              <div className="acc__inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
