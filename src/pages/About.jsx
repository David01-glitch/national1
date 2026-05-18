import PageHero from '../components/PageHero.jsx';
import heroImg from '../assets/images/hero/mountain-road.jpg';
import forestPath from '../assets/images/travel/forest-path.jpg';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A field journal for the National Park traveler."
        subtitle="National Park Explorer is an independent travel publication run from Salt Lake City, Utah — built around honest, field-tested writing about America's wild places."
        image={heroImg}
      />
      <section className="section">
        <div className="container-px grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-2 text-3xl font-bold text-forest-900">From weekend trips to a full-time field journal.</h2>
            <div className="mt-5 space-y-4 text-forest-900/80 leading-relaxed">
              <p>What started as a shared notebook between two friends — one a photographer, one a long-time RVer — has grown into a publication trusted by tens of thousands of travelers every month.</p>
              <p>We write everything ourselves. We pay for our own gas, lodging, and entrance fees. No park or brand has editorial influence over what we publish, and we disclose any partnerships clearly when they exist.</p>
              <p>Our goal is simple: help you spend less time planning logistics and more time at the trailhead.</p>
            </div>
          </div>
          <img src={forestPath} alt="A forest trail in autumn" loading="lazy" className="rounded-2xl shadow-soft w-full h-[420px] object-cover" />
        </div>
      </section>

      <section className="section bg-sand-100">
        <div className="container-px">
          <p className="eyebrow">What We Cover</p>
          <h2 className="mt-2 text-3xl font-bold text-forest-900">Six beats, written with care.</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['National Parks', 'In-depth guides to all 63 U.S. national parks plus the most underrated monuments and seashores.'],
              ['RV Travel', 'Routes, rig reviews, dump-station notes, and reservation strategies for first-timers and full-timers.'],
              ['Hiking Guides', 'Trail-by-trail breakdowns with mileage, elevation, water sources, and difficulty ratings we actually believe in.'],
              ['Scenic Photography', 'Light tables, composition notes, and gear we use — never affiliate fluff.'],
              ['Travel Stories', "First-person field notes from the road, written without polish-for-polish's-sake."],
              ['Camping Adventures', 'Backcountry to base camp — bear safety, weather windows, and the gear that earned its keep.'],
            ].map(([t, d]) => (
              <div key={t} className="card p-6">
                <h3 className="font-display text-xl font-semibold text-forest-900">{t}</h3>
                <p className="mt-2 text-sm text-forest-900/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px max-w-3xl">
          <p className="eyebrow">Editorial Standards</p>
          <h2 className="mt-2 text-3xl font-bold text-forest-900">How we work</h2>
          <ul className="mt-6 space-y-4 text-forest-900/80 leading-relaxed">
            <li><strong className="text-forest-900">We visit before we publish.</strong> Every park guide is written from a recent trip, not a press kit.</li>
            <li><strong className="text-forest-900">We update annually.</strong> Permits, fees, and trail conditions change — our top guides are refreshed each season.</li>
            <li><strong className="text-forest-900">We disclose sponsorships.</strong> Sponsored content is labeled clearly. Brand relationships never alter our recommendations.</li>
            <li><strong className="text-forest-900">We respect the land.</strong> We follow Leave No Trace ethics and never share fragile locations that risk overuse.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
