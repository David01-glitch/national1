import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import ExpandableCard from '../components/ExpandableCard.jsx';

import yellowstone from '../assets/images/parks/yellowstone.jpg';
import grandCanyon from '../assets/images/parks/grand-canyon.jpg';
import zion from '../assets/images/parks/zion.jpg';
import glacier from '../assets/images/parks/glacier.jpg';
import rvMountain from '../assets/images/rv/rv-mountain.jpg';
import rvCamp from '../assets/images/rv/rv-camp.jpg';
import forestPath from '../assets/images/travel/forest-path.jpg';
import lakeside from '../assets/images/travel/lakeside.jpg';
import sunset from '../assets/images/photography/sunset.jpg';
import wildlife from '../assets/images/photography/wildlife.jpg';
import blog1 from '../assets/images/blog/blog1.jpg';
import blog2 from '../assets/images/blog/blog2.jpg';

const CATEGORIES = {
  'national-parks': {
    title: 'National Parks',
    subtitle: 'In-depth guides to the most iconic — and most under-visited — units in the system.',
    hero: yellowstone,
    cards: [
      { img: yellowstone, eyebrow: 'Wyoming', title: 'Yellowstone in five days', summary: 'A balanced loop covering geysers, the Lamar, and Grand Prismatic at the right hour.', body: 'Day 1 — Lower Loop geyser basins. Day 2 — Lamar at sunrise. Day 3 — Grand Canyon of the Yellowstone. Day 4 — Mammoth and Norris. Day 5 — buffer day for wildlife or a long hike.' },
      { img: grandCanyon, eyebrow: 'Arizona', title: 'South Rim vs. North Rim', summary: 'Which side fits your trip — and how to do a one-day cross-rim drive if it does not.', body: 'South Rim is open year-round and easier to reach. North Rim is 10°F cooler, far less crowded, and closes mid-October. If you can swing it, the 215-mile drive between them is worth a full day.' },
      { img: zion, eyebrow: 'Utah', title: 'Zion without the bus chaos', summary: 'When to ride, when to walk, and how to time Angels Landing if you got a permit.', body: 'Catch the 6 a.m. shuttle in summer. Angels Landing permit holders should aim for the first hour on chains. Off-season (December–February), drive your own car up the canyon.' },
      { img: glacier, eyebrow: 'Montana', title: 'Glacier with kids', summary: 'Three shorter hikes that still feel like proper alpine adventures.', body: 'Trail of the Cedars (1.0 mi loop). Avalanche Lake (5.9 mi rt). Hidden Lake Overlook (2.7 mi rt with mountain goat sightings most days).' },
    ],
  },
  'rv-travel': {
    title: 'RV Travel',
    subtitle: 'Routes, rig reviews, and reservation strategies from a full-time perspective.',
    hero: rvMountain,
    cards: [
      { img: rvMountain, eyebrow: 'Route', title: 'Glacier loop in 6 days', summary: 'Fuel costs, length restrictions, and exact campground notes.', body: 'Whitefish base, Apgar to Many Glacier via 89, sunrise at Two Medicine, exit through East Glacier. ~380 miles total, ~$150 fuel in a Class C.' },
      { img: rvCamp, eyebrow: 'Beginner', title: 'Your first 10 days on the road', summary: 'Why you should book three nights at your first stop and what to pack for week one.', body: 'Stay put long enough to learn your rig. Practice leveling, hookups, and the dump station at home before you leave. Carry duplicate keys.' },
      { img: forestPath, eyebrow: 'Boondocking', title: 'Free camping on BLM land', summary: 'How dispersed camping works and the apps we actually use to find sites.', body: 'BLM allows 14-day stays in most dispersed areas. Use iOverlander and FreeRoam. Leave No Trace — pack out everything, including grey water if you can.' },
    ],
  },
  'hiking-guides': {
    title: 'Hiking Guides',
    subtitle: 'Trail-by-trail breakdowns with honest difficulty ratings and the conditions that matter.',
    hero: glacier,
    cards: [
      { img: glacier, eyebrow: 'Glacier NP', title: 'Grinnell Glacier — 11 mi', summary: 'A bucket-list day hike with a boat-shuttle shortcut and a serious payoff.', body: 'Park at Many Glacier. Take the boat across Swiftcurrent and Josephine for a 7.6 mi round trip. Watch for bears — carry spray and make noise.' },
      { img: zion, eyebrow: 'Zion NP', title: 'Observation Point via East Mesa', summary: 'Skip the closed main trail and reach the better view via the back door.', body: '7 mi round trip, 700 ft gain, mostly flat. Drive to the East Mesa trailhead on Zion-Mt Carmel Highway. The view is arguably better than Angels Landing.' },
      { img: forestPath, eyebrow: 'Beginner', title: 'A first 5-mile loop', summary: 'How to pick a starter trail and what comfortable should feel like.', body: 'Pick under 800 ft of elevation gain, a marked loop, and a trailhead with bathrooms. Walk it at conversational pace — if you cannot speak, slow down.' },
    ],
  },
  'scenic-photography': {
    title: 'Scenic Photography',
    subtitle: 'Light tables, locations, and post-processing notes from working photographers.',
    hero: sunset,
    cards: [
      { img: sunset, eyebrow: 'Workflow', title: 'Sunrise compositions, scouted at noon', summary: 'How a two-hour midday walk turns a sunrise shoot into a known quantity.', body: 'Use PhotoPills to plan light angles. Mark three compositions in the app. Show up 45 minutes early in the morning — you will be glad for the buffer.' },
      { img: wildlife, eyebrow: 'Wildlife', title: '400mm on a budget', summary: 'A used 100-400 zoom is the most cost-effective wildlife lens on the market.', body: 'Look for Sony 100-400 GM, Canon RF 100-400, or Nikon Z 100-400. Pair with APS-C body for extra reach. Patience beats focal length every time.' },
      { img: lakeside, eyebrow: 'Locations', title: 'Reflection lakes worth the drive', summary: 'Conditions that produce mirror water and where to find them.', body: 'Glass requires sub-5 mph wind. Best windows: 30 minutes before sunrise; 30 minutes after sunset. Maroon Bells, Two Medicine, and Trillium Lake are reliable.' },
    ],
  },
  'travel-stories': {
    title: 'Travel Stories',
    subtitle: 'First-person field notes — no SEO filler, no inspirational fluff.',
    hero: forestPath,
    cards: [
      { img: blog1, eyebrow: 'Field Notes', title: 'The morning we almost turned back', summary: 'A whiteout on the Highline that taught us when to call it.', body: 'The clouds dropped to ankle height by mile three. We sat for 40 minutes, ate lunch, and turned around. The next morning we hiked it under bluebird skies.' },
      { img: blog2, eyebrow: 'Slow Travel', title: 'Why we kept coming back to Bryce', summary: 'Four visits, four seasons, four different parks.', body: 'Bryce in January is silent. Bryce in May is full of wildflowers. Bryce in October is golden. Same loop, different planet each time.' },
      { img: lakeside, eyebrow: 'Reflection', title: 'On not finishing the bucket list', summary: 'Why a slower travel rhythm has been better for both of us.', body: 'We used to chase parks. Now we pick one, stay a week, and go home tired in the right way.' },
    ],
  },
  'camping-adventures': {
    title: 'Camping Adventures',
    subtitle: 'Base camp to backcountry — the systems, gear, and judgement calls that make trips work.',
    hero: rvCamp,
    cards: [
      { img: rvCamp, eyebrow: 'Setup', title: 'A two-person base camp in 25 minutes', summary: 'A repeatable order-of-operations that makes camp feel calm.', body: 'Park, level, awning. Stove and water before sunset. Bed setup last. Headlamps on the table. Most setup chaos is a sequencing problem.' },
      { img: forestPath, eyebrow: 'Backcountry', title: 'Bear safety done right', summary: 'Canisters, food storage, and how to react if you see one.', body: 'Required canisters in many parks — check ahead. Cook 100 yards from your tent. Most bear encounters end peacefully if you do not surprise them.' },
      { img: lakeside, eyebrow: 'Weather', title: 'Reading the sky before bed', summary: 'Three quick cloud cues that tell you about tomorrow.', body: 'Mares-tails by 5 p.m. — rain in 24 hours. Lenticular over peaks — high winds aloft. Halo around the moon — front incoming.' },
    ],
  },
};

export default function Category() {
  const { slug } = useParams();
  const data = CATEGORIES[slug];

  if (!data) {
    return (
      <section className="section container-px text-center">
        <h1 className="text-3xl font-bold text-forest-900">Category not found</h1>
        <p className="mt-3 text-forest-900/70">Try one of our featured sections.</p>
        <Link to="/" className="btn-primary mt-6">Back home</Link>
      </section>
    );
  }

  return (
    <>
      <PageHero eyebrow="Category" title={data.title} subtitle={data.subtitle} image={data.hero} />
      <section className="section">
        <div className="container-px grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((c, i) => (
            <ExpandableCard key={i} image={c.img} alt={c.title} eyebrow={c.eyebrow} title={c.title} summary={c.summary} cta="Learn More">
              <p>{c.body}</p>
            </ExpandableCard>
          ))}
        </div>
      </section>
    </>
  );
}
