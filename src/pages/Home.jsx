import { Link } from 'react-router-dom';
import { useState } from 'react';
import ExpandableCard from '../components/ExpandableCard.jsx';
import Accordion from '../components/Accordion.jsx';
import { trackEvent } from '../utils/analytics.js';

import heroImg from '../assets/images/hero/yosemite-sunrise.jpg';
import mountainRoad from '../assets/images/hero/mountain-road.jpg';
import yellowstone from '../assets/images/parks/yellowstone.jpg';
import grandCanyon from '../assets/images/parks/grand-canyon.jpg';
import zion from '../assets/images/parks/zion.jpg';
import glacier from '../assets/images/parks/glacier.jpg';
import rvMountain from '../assets/images/rv/rv-mountain.jpg';
import rvCamp from '../assets/images/rv/rv-camp.jpg';
import sunset from '../assets/images/photography/sunset.jpg';
import wildlife from '../assets/images/photography/wildlife.jpg';
import c1 from '../assets/images/community/c1.jpg';
import c2 from '../assets/images/community/c2.jpg';
import c3 from '../assets/images/community/c3.jpg';

const categories = [
  { slug: 'national-parks', title: 'National Parks', img: yellowstone, desc: "Curated guides to America's 63 protected wonders." },
  { slug: 'rv-travel', title: 'RV Travel', img: rvMountain, desc: 'Cross-country itineraries, rig reviews, and campsite picks.' },
  { slug: 'hiking-guides', title: 'Hiking Guides', img: glacier, desc: 'Trail-by-trail breakdowns, mileage, and difficulty notes.' },
  { slug: 'scenic-photography', title: 'Scenic Photography', img: sunset, desc: 'Golden hour, blue hour, and wildlife in their element.' },
  { slug: 'travel-stories', title: 'Travel Stories', img: mountainRoad, desc: 'Personal field notes from the road and the trail.' },
  { slug: 'camping-adventures', title: 'Camping Adventures', img: rvCamp, desc: 'Backcountry to base camp — gear, setups, and lessons.' },
];

const parks = [
  { name: 'Yellowstone, WY', img: yellowstone, blurb: 'Geysers, bison herds, and the supervolcano caldera.' },
  { name: 'Grand Canyon, AZ', img: grandCanyon, blurb: 'A mile-deep gorge sculpted by the Colorado River.' },
  { name: 'Zion, UT', img: zion, blurb: 'Sandstone canyons, slot hikes, and the Narrows.' },
  { name: 'Glacier, MT', img: glacier, blurb: 'Going-to-the-Sun Road and alpine meadows.' },
];

const testimonials = [
  { name: 'Sarah K.', role: 'Full-time RVer', img: c1, quote: 'Their Utah Mighty 5 route turned a two-week trip into the best month of our travels.' },
  { name: 'Marcus L.', role: 'Landscape photographer', img: c2, quote: 'Honest light tables and trailhead notes — exactly what I needed for sunrise at Bryce.' },
  { name: 'Priya R.', role: 'Weekend hiker', img: c3, quote: 'The hiking guides feel like getting tips from a friend who has actually been there.' },
];

const faqs = [
  { q: 'When is the best time to visit US national parks?', a: 'Late spring (May–June) and early fall (September–October) bring mild weather, fewer crowds, and accessible roads at higher elevations. Summer is peak — book campsites 5–6 months ahead.' },
  { q: 'Do I need a permit to hike in the parks?', a: 'Most day hikes are permit-free, but iconic routes like Half Dome (Yosemite) and The Wave (Vermilion Cliffs) require lottery permits. Every guide on our site lists the permit status up front.' },
  { q: 'Is RV travel realistic for first-timers?', a: 'Absolutely. Start with a 20–25 ft Class C rental, stick to established campgrounds with hookups, and plan no more than 250 miles per day. Our RV Travel section has a beginner checklist.' },
  { q: 'How do I support National Park Explorer?', a: 'Share our guides, subscribe to the newsletter, and consider buying us a coffee through the Community page. Everything we publish is free to read.' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    trackEvent('newsletter_subscribe', { location: 'home' });
    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-900 text-white overflow-hidden">
        <img src={heroImg} alt="Sunrise over a national park valley" loading="eager" className="absolute inset-0 w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/20 via-forest-900/40 to-forest-900/80" />
        <div className="relative container-px py-28 sm:py-36 max-w-3xl">
          <p className="eyebrow text-sunset-400">Field-tested travel stories</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-tight">
            Wander deeper into America's wild places.
          </h1>
          <p className="mt-5 text-lg text-sand-50/90 leading-relaxed">
            RV routes, hiking guides, and scenic photography from every corner of the National Park System — written by travelers who've actually been there.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/category/national-parks" className="btn-primary">Explore Parks</Link>
            <Link to="/blog" className="btn-outline border-white text-white hover:bg-white hover:text-forest-700">Read the Blog</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container-px">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="eyebrow">Featured Categories</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-forest-900">Where do you want to wander?</h2>
            </div>
            <Link to="/blog" className="text-forest-700 hover:text-forest-900 font-medium text-sm">All articles →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <Link key={c.slug} to={`/category/${c.slug}`} className="card group block">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-forest-900 group-hover:text-sunset-600">{c.title}</h3>
                  <p className="mt-1 text-sm text-forest-900/70">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section bg-sand-100">
        <div className="container-px">
          <p className="eyebrow">Popular Destinations</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-forest-900">Iconic parks worth the detour</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parks.map((p) => (
              <div key={p.name} className="card hover:-translate-y-1 transition-transform">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h3 className="font-display font-semibold text-forest-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-forest-900/70">{p.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RV Travel Stories */}
      <section className="section">
        <div className="container-px">
          <p className="eyebrow">RV Travel Stories</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-forest-900">Life on the open road</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <ExpandableCard
              image={rvMountain}
              alt="RV parked near a mountain range"
              eyebrow="6-day route"
              title="Going-to-the-Sun: A Glacier Loop"
              summary="A slow loop through Glacier National Park with overnighting tips, fuel notes, and the best pullouts for sunrise."
            >
              <p className="mb-3">We left Whitefish at 7 a.m. and crossed Logan Pass before mid-morning crowds. Vehicle length restriction is 21 ft on Going-to-the-Sun Road — bigger rigs should base at Apgar and shuttle in.</p>
              <p className="mb-3">Day 2 we crossed into the Many Glacier side and stayed at Many Glacier Campground (book exactly 6 months out at 9 a.m. ET on recreation.gov). Day 3 was a layover for the Grinnell Glacier hike — 11 mi, ~1,600 ft gain.</p>
              <p>Total fuel: $148 over 380 miles in a Class C. Cell coverage drops east of Logan Pass — download offline maps before you go.</p>
            </ExpandableCard>
            <ExpandableCard
              image={rvCamp}
              alt="RV campsite at dusk"
              eyebrow="Beginner-friendly"
              title="A First-Timer's Loop Through Utah's Mighty 5"
              summary="Zion to Arches in 10 days — campsite reservations, length limits, and the side roads worth the dust."
            >
              <p className="mb-3">Order: Zion → Bryce → Capitol Reef → Arches → Canyonlands. Skip Zion's South Campground unless you've booked 6 months out — Watchman is your fallback.</p>
              <p className="mb-3">Capitol Reef's Fruita Campground is the surprise highlight. Pick orchard fruit in season and stargaze under one of the darkest skies in the Lower 48.</p>
              <p>If your rig is over 27 ft, swap Devils Garden inside Arches for the BLM dispersed sites on Willow Springs Road just outside the park.</p>
            </ExpandableCard>
          </div>
        </div>
      </section>

      {/* Photography Highlights */}
      <section className="section bg-forest-900 text-white">
        <div className="container-px">
          <p className="eyebrow text-sunset-400">Photography Highlights</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Light, weather, and patience</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden bg-white/5">
              <img src={sunset} alt="Golden hour sky over a canyon" loading="lazy" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">Chasing golden hour in the Southwest</h3>
                <p className="mt-2 text-sand-50/80 text-sm leading-relaxed">A simple workflow for nailing sunrise color: arrive 45 minutes early, scout three compositions, and shoot bracketed exposures through the entire window.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-white/5">
              <img src={wildlife} alt="Wildlife portrait" loading="lazy" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">Wildlife from a respectful distance</h3>
                <p className="mt-2 text-sand-50/80 text-sm leading-relaxed">A 400mm lens, a tripod, and the patience to let animals come to you — everything we've learned shooting bison, elk, and bighorn at the parks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-px">
          <p className="eyebrow">Community Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-forest-900">Travelers who use our guides</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="card p-6">
                <blockquote className="text-forest-900/85 leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={t.img} alt={t.name} loading="lazy" className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-forest-900 text-sm">{t.name}</p>
                    <p className="text-xs text-forest-900/60">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-sand-100">
        <div className="container-px max-w-3xl text-center">
          <p className="eyebrow">Newsletter</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-forest-900">The Trailhead — twice a month</h2>
          <p className="mt-3 text-forest-900/75">New guides, seasonal trip ideas, and reader photos. No filler, unsubscribe in one click.</p>
          <form onSubmit={onSubscribe} className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 rounded-full px-5 py-3 border border-forest-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
            />
            <button type="submit" className="btn-primary justify-center">Subscribe</button>
          </form>
          {subscribed && <p className="mt-4 text-forest-700 text-sm">Thanks — check your inbox for confirmation.</p>}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-px max-w-3xl">
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-forest-900 text-center">Frequently asked questions</h2>
          <div className="mt-10">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-forest-900 text-white">
        <div className="container-px max-w-4xl text-center">
          <p className="eyebrow text-sunset-400">Contact</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Have a story or a question?</h2>
          <p className="mt-3 text-sand-50/85">Reach out for partnerships, guest articles, or just to share where you've been.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:nationalparkexplorer@gmail.com" className="btn-primary">Email Us</a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-forest-700">Contact Form</Link>
          </div>
          <p className="mt-6 text-sm text-sand-50/70">510 Canyon Road, Salt Lake City, UT 84101, USA</p>
        </div>
      </section>
    </>
  );
}
