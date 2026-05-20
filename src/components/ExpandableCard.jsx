import { useState } from 'react';

export default function ExpandableCard({ image, alt, eyebrow, title, summary, children, cta = 'Read More' }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card flex flex-col">
      {image && (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-52 object-cover"
        />
      )}
      <div className="p-6 flex flex-col flex-1">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h3 className="font-display text-xl font-semibold text-forest-900">{title}</h3>
        <p className="mt-2 text-forest-900/75 text-sm leading-relaxed">{summary}</p>
        <div className={`accordion-content ${open ? 'open' : ''} mt-3 text-sm text-forest-900/80 leading-relaxed`}>
          <div className="pt-2 border-t border-forest-100">{children}</div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 self-start text-sunset-600 hover:text-sunset-500 font-medium text-sm inline-flex items-center gap-1"
          aria-expanded={open}
        >
          {open ? 'Show Less' : cta}
          <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>↓</span>
        </button>
      </div>
    </article>
  );
}
