import PageHero from '../components/PageHero.jsx';
import ExpandableCard from '../components/ExpandableCard.jsx';
import heroImg from '../assets/images/tutorials/tut1.jpg';
import tut1 from '../assets/images/tutorials/tut1.jpg';
import tut2 from '../assets/images/tutorials/tut2.jpg';
import sunset from '../assets/images/photography/sunset.jpg';
import rvCamp from '../assets/images/rv/rv-camp.jpg';

const tutorials = [
  {
    img: tut1, alt: 'Camera on a tripod', eyebrow: 'Photography',
    title: 'Long-exposure waterfalls in 6 steps',
    summary: 'A repeatable workflow for silky water without blown-out highlights.',
    body: (
      <ol className="list-decimal pl-5 space-y-2">
        <li>Mount on a sturdy tripod, switch to 2-second timer.</li>
        <li>Set ISO 100, aperture f/11, manual focus on the rocks.</li>
        <li>Add a 6-stop ND filter; recompose to confirm framing.</li>
        <li>Meter for the highlights, then dial 0.5–1 sec depending on flow.</li>
        <li>Shoot three exposures: short, medium, long. Compare on histogram.</li>
        <li>In post, lift shadows on the rocks and pull highlights on the water.</li>
      </ol>
    ),
  },
  {
    img: tut2, alt: 'Hiker checking a map', eyebrow: 'Hiking',
    title: 'Planning your first 12-mile day hike',
    summary: 'A 7-day taper, what to eat the morning of, and how to pace climbs.',
    body: (
      <>
        <p className="mb-3">Week of: walk 30 minutes daily, drink an extra liter of water per day, and lay out your kit the night before. Heavy hiking that week trades fresh legs for fitness you already have.</p>
        <p className="mb-3">Morning of: 400–600 calories, low-fiber, 90 minutes before stepping off. Coffee is fine if you usually drink it.</p>
        <p>On trail: keep heart rate conversational on climbs; if you can't speak in full sentences, slow down. Eat 150 calories per hour starting from hour two.</p>
      </>
    ),
  },
  {
    img: rvCamp, alt: 'RV at a campground', eyebrow: 'RV Travel',
    title: 'Booking sold-out national park campgrounds',
    summary: 'How the 6-month recreation.gov window actually works and the tools that help.',
    body: (
      <>
        <p className="mb-3">Set a calendar reminder for 6 months minus 1 day before the night you want — at 9:55 a.m. ET. Have your saved payment method and party details ready.</p>
        <p>Strikeouts? Run a cancellation watcher (Campnab, Schnerp). Most popular parks have 15–30% same-week cancellations.</p>
      </>
    ),
  },
  {
    img: sunset, alt: 'Sunset sky', eyebrow: 'Photography',
    title: 'Editing sunset skies without overcooking them',
    summary: 'A three-slider approach to color that holds up at print size.',
    body: (
      <>
        <p>Pull vibrance before saturation. Use the HSL panel to mute oranges by 5–10. Add a graduated filter from the top with -0.3 ev to recover blues. That's most of it.</p>
      </>
    ),
  },
];

export default function Tutorials() {
  return (
    <>
      <PageHero
        eyebrow="Tutorials"
        title="Skills that travel well."
        subtitle="Short, repeatable workflows for photography, hiking, and RV travel — written so you can scan, do, and refer back."
        image={heroImg}
      />
      <section className="section">
        <div className="container-px grid md:grid-cols-2 gap-6">
          {tutorials.map((t, i) => (
            <ExpandableCard key={i} {...t} cta="View Tutorial">{t.body}</ExpandableCard>
          ))}
        </div>
      </section>
    </>
  );
}
