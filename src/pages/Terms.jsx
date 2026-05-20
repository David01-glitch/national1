import PageHero from '../components/PageHero.jsx';

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="The ground rules for using our site and content." />
      <section className="section">
        <div className="container-px max-w-3xl text-forest-900/85 leading-relaxed space-y-5 text-sm">
          <p><strong>Last updated:</strong> May 19, 2026</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Use of content</h2>
          <p>All articles, photographs, and graphics on National Park Explorer are © National Park Explorer unless otherwise noted. You may share short excerpts with attribution and a link back; full reproduction requires written permission.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Accuracy</h2>
          <p>We strive for accuracy but trail conditions, permits, and fees change. Always check official sources (nps.gov, recreation.gov) before your trip.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Assumption of risk</h2>
          <p>Outdoor recreation carries inherent risks. Use our content as a starting point, not a substitute for your own judgment, fitness, and preparation.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">External links</h2>
          <p>We link to third-party sites when helpful. We are not responsible for their content or policies.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Changes to these terms</h2>
          <p>We may update these terms. Continued use of the site means acceptance of any changes.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Governing law</h2>
          <p>These terms are governed by the laws of the State of Utah, USA.</p>
        </div>
      </section>
    </>
  );
}
