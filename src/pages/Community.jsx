import PageHero from '../components/PageHero.jsx';
import heroImg from '../assets/images/travel/lakeside.jpg';
import c1 from '../assets/images/community/c1.jpg';
import c2 from '../assets/images/community/c2.jpg';
import c3 from '../assets/images/community/c3.jpg';

const members = [
  { img: c1, name: 'Sarah K.', loc: 'Bozeman, MT', bio: 'Full-time RVer two years in. Currently working her way through every park west of the Mississippi.' },
  { img: c2, name: 'Marcus L.', loc: 'Flagstaff, AZ', bio: 'Landscape photographer with a soft spot for the Colorado Plateau and sunrise on red rock.' },
  { img: c3, name: 'Priya R.', loc: 'Portland, OR', bio: 'Weekend hiker, slow traveler, and the most patient trip planner in our group chat.' },
];

export default function Community() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Built by travelers, for travelers."
        subtitle="A small, friendly group of readers who swap trip reports, trail beta, and the occasional gear obsession."
        image={heroImg}
      />

      <section className="section">
        <div className="container-px max-w-3xl">
          <p className="eyebrow">How to join</p>
          <h2 className="mt-2 text-3xl font-bold text-forest-900">Three easy ways in.</h2>
          <ul className="mt-6 space-y-4 text-forest-900/85 leading-relaxed">
            <li><strong>Subscribe to The Trailhead.</strong> Twice a month, no filler. Reply to any issue and we read it.</li>
            <li><strong>Submit a trip report.</strong> 600–900 words, three photos, written from a recent visit. We pay $75 per published piece.</li>
            <li><strong>Tag us on Instagram.</strong> We reshare reader photos every weekend with credit.</li>
          </ul>
        </div>
      </section>

      <section className="section bg-sand-100">
        <div className="container-px">
          <p className="eyebrow">Member Spotlights</p>
          <h2 className="mt-2 text-3xl font-bold text-forest-900">A few familiar faces.</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m) => (
              <article key={m.name} className="card p-6 text-center">
                <img src={m.img} alt={m.name} loading="lazy" className="w-20 h-20 rounded-full object-cover mx-auto" />
                <h3 className="mt-4 font-display text-lg font-semibold text-forest-900">{m.name}</h3>
                <p className="text-xs text-forest-900/60">{m.loc}</p>
                <p className="mt-3 text-sm text-forest-900/75">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-forest-900">Have a story we should hear?</h2>
          <p className="mt-3 text-forest-900/75">Pitch a trip report or just say hello — we read every email.</p>
          <a href="mailto:nationalparkexplorer@gmail.com" className="btn-primary mt-6">Email the editors</a>
        </div>
      </section>
    </>
  );
}
