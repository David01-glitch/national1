import PageHero from '../components/PageHero.jsx';
import ExpandableCard from '../components/ExpandableCard.jsx';
import heroImg from '../assets/images/blog/blog1.jpg';
import blog1 from '../assets/images/blog/blog1.jpg';
import blog2 from '../assets/images/blog/blog2.jpg';
import blog3 from '../assets/images/blog/blog3.jpg';
import yellowstone from '../assets/images/parks/yellowstone.jpg';
import zion from '../assets/images/parks/zion.jpg';
import lakeside from '../assets/images/travel/lakeside.jpg';

const posts = [
  {
    img: blog1, alt: 'Mountain valley at dawn', eyebrow: 'Trip Report',
    title: 'Five days in Yellowstone without the crowds',
    summary: 'A shoulder-season itinerary that swaps Old Faithful queues for empty boardwalks at Norris and West Thumb.',
    body: (
      <>
        <p className="mb-3">We landed in Bozeman the second week of May. Roads opened to the Lamar Valley the prior weekend, and most lodges still hadn't opened — meaning thinner crowds and patient wildlife.</p>
        <p className="mb-3">Day 1 we drove the Lamar at sunrise. Three wolf sightings, a bear with cubs, and roughly 400 bison. Day 2 was Mammoth Hot Springs — terraces in their best light by 9 a.m.</p>
        <p>The trick: skip Old Faithful between 11 and 3. Hit Biscuit Basin and Black Sand Basin instead — same geothermal drama, a quarter of the people.</p>
      </>
    ),
  },
  {
    img: blog2, alt: 'Hiker on a desert trail', eyebrow: 'Hiking',
    title: 'The Narrows in Zion — a half-day plan',
    summary: 'Permits, water levels, footwear, and where to turn around when the river is talking back.',
    body: (
      <>
        <p className="mb-3">Bottom-up day hikes don't need a permit. Rent canyoneering shoes and a walking stick from Zion Outfitter the night before — open by 8 a.m. so you can be on the first shuttle.</p>
        <p>Aim to turn around at Wall Street (about 3 hours in). Spring runoff can spike flows fast; if water is above your thigh and rising, head back regardless of where you are.</p>
      </>
    ),
  },
  {
    img: blog3, alt: 'Lakeside reflections', eyebrow: 'Photography',
    title: 'A lakeside reflection shoot, end-to-end',
    summary: 'Scouting at noon, shooting at dawn, editing in Lightroom — a full workflow from one quiet morning in Glacier.',
    body: (
      <>
        <p className="mb-3">Two Medicine is the spot. The lake is glass before 6:30 a.m. if winds stayed under 5 mph overnight. I scout the night before to plan exact compositions — fewer decisions in cold blue hour.</p>
        <p>I shoot two cards: one full-color for the website, one B&W conversion for prints. Lightroom presets are a starting line, never the finish.</p>
      </>
    ),
  },
  {
    img: yellowstone, alt: 'Geyser eruption', eyebrow: 'Field Notes',
    title: 'What we got wrong on our first Yellowstone trip',
    summary: "Three honest mistakes from year one — and what we'd do differently if we had to plan it again.",
    body: (
      <>
        <p className="mb-3">We tried to "see it all" in three days. Yellowstone is the size of Connecticut. Pick a quadrant per visit and let it breathe.</p>
        <p>We also relied on cell service for navigation. Don't. Download offline maps for the entire park before you arrive.</p>
      </>
    ),
  },
  {
    img: zion, alt: 'Slot canyon walls', eyebrow: 'Gear',
    title: 'A 20-pound day pack for desert hiking',
    summary: "Everything we carry into Utah's parks for an 8-hour day out — no fluff, no upsell.",
    body: (
      <>
        <p className="mb-3">Three liters of water (electrolyte tabs in one), 1,800 calories of food, sun hoody, buff, sunscreen, headlamp with fresh batteries, a small first-aid kit, and a printed topo map for the hike.</p>
        <p>Total ~20 lb with full water. We don't carry a stove unless we plan to cook — boiled coffee at the trailhead beats summit ramen most days.</p>
      </>
    ),
  },
  {
    img: lakeside, alt: 'Alpine lake at sunrise', eyebrow: 'Travel Stories',
    title: 'Why we keep going back to the same trail',
    summary: 'On the case for repeat visits, slow travel, and skipping the bucket-list mentality.',
    body: (
      <>
        <p>The same loop in a different season is essentially a new trail. Spring wildflowers, summer haze, fall larches, winter snowshoes — four trips, four entirely different experiences.</p>
      </>
    ),
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Field notes from America's wild places."
        subtitle="Trip reports, hiking breakdowns, gear we believe in, and the lessons we keep learning on the road."
        image={heroImg}
      />
      <section className="section">
        <div className="container-px grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <ExpandableCard key={i} {...p}>{p.body}</ExpandableCard>
          ))}
        </div>
      </section>
    </>
  );
}
