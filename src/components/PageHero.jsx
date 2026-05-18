export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative bg-forest-900 text-white">
      {image && (
        <img src={image} alt="" loading="eager" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      )}
      <div className="relative container-px py-20 sm:py-24 max-w-3xl">
        {eyebrow && <p className="eyebrow text-sunset-400 mb-3">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-sand-50/85 text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
