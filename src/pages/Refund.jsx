import PageHero from '../components/PageHero.jsx';

export default function Refund() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Refund Policy" subtitle="Our promise on paid products and digital downloads." />
      <section className="section">
        <div className="container-px max-w-3xl text-forest-900/85 leading-relaxed space-y-5 text-sm">
          <p><strong>Last updated:</strong> May 19, 2026</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Free content</h2>
          <p>All articles, tutorials, and newsletters on National Park Explorer are free. There is nothing to refund.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Paid downloads and guides</h2>
          <p>If you ever purchase a downloadable guide, you may request a full refund within 14 days of purchase — no questions asked — by emailing nationalparkexplorer@gmail.com with your order details.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Workshops and trips</h2>
          <p>Deposits for workshops or guided trips are refundable up to 30 days before the event. Between 30 and 14 days out, deposits are 50% refundable. Inside 14 days, deposits are non-refundable but transferable to a future date or another participant.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">How to request a refund</h2>
          <p>Email nationalparkexplorer@gmail.com with the subject line "Refund Request" and your purchase confirmation. We process refunds within 7 business days.</p>
          <h2 className="font-display text-xl font-semibold text-forest-900">Questions</h2>
          <p>Email us anytime at nationalparkexplorer@gmail.com.</p>
        </div>
      </section>
    </>
  );
}
