import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(-1);
  return (
    <div className="divide-y divide-forest-100 bg-white rounded-2xl shadow-soft">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(open ? -1 : i)}
              className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-forest-50/50"
              aria-expanded={open}
            >
              <span className="font-display font-semibold text-forest-900">{item.q}</span>
              <span className={`text-sunset-500 text-2xl leading-none transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`accordion-content ${open ? 'open' : ''} px-5 text-forest-900/80 text-sm leading-relaxed`}>
              <div className="pb-5">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
