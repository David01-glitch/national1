import PageHero from '../components/PageHero.jsx';

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="How we collect, use, and protect your information." />
      <section className="section">
        <div className="container-px max-w-3xl prose-content text-forest-900/85 leading-relaxed space-y-5 text-sm">
          <p><strong>Last updated:</strong> May 19, 2026</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Information we collect</h2>
          <p>We collect information you voluntarily provide — such as your name and email when subscribing to the newsletter or contacting us. We also collect anonymous analytics data via Google Analytics, including page views, device type, and approximate location.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">How we use it</h2>
          <p>To deliver the newsletter, respond to your inquiries, and understand which content readers find useful. We do not sell your data, ever.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Cookies</h2>
          <p>We use cookies for analytics and to remember your preferences (like dismissing the cookie banner). You can disable cookies in your browser settings.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Third-party services</h2>
          <p>We use Google Analytics for traffic insights and may embed YouTube or Instagram content. These services have their own privacy policies.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Your rights</h2>
          <p>You can request a copy or deletion of your data at any time by emailing nationalparkexplorer@gmail.com. We respond within 30 days.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Contact</h2>
          <p>National Park Explorer, 510 Canyon Road, Salt Lake City, UT 84101, USA. Email: nationalparkexplorer@gmail.com.</p>
        </div>
      </section>
    </>
  );
}
