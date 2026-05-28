import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import heroImg from '../assets/images/parks/glacier.jpg';
import { trackEvent } from '../utils/analytics.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    trackEvent('contact_form_submit');
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Drop us a line."
        subtitle="Trip questions, story pitches, partnership inquiries — we read every message and reply within two business days."
        image={heroImg}
      />
      <section className="section">
        <div className="container-px grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-forest-900">By email or post.</h2>
            <p className="mt-3 text-forest-900/75">For sponsorships, press, and editorial inquiries.</p>
            <div className="mt-6 space-y-4 text-forest-900/85 text-sm">
              <div>
                <p className="font-semibold text-forest-900">Email</p>
                <a className="text-sunset-600 hover:text-sunset-500" href="mailto:nationalparkexplorer@gmail.com">nationalparkexplorer@gmail.com</a>
              </div>
              <div>
                <p className="font-semibold text-forest-900">Phone</p>
                <p>+1 (541) 682-9034</p>
              </div>
              <div>
                <p className="font-semibold text-forest-900">Mailing address</p>
                <p>510 Canyon Road<br/>Salt Lake City, UT 84101, USA</p>
              </div>
              <div>
                <p className="font-semibold text-forest-900">Response time</p>
                <p>Within two business days, Monday–Friday.</p>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="card p-6 sm:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm">
                <span className="text-forest-900 font-medium">Name</span>
                <input required value={form.name} onChange={update('name')} className="mt-1 w-full rounded-lg border border-forest-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </label>
              <label className="block text-sm">
                <span className="text-forest-900 font-medium">Email</span>
                <input required type="email" value={form.email} onChange={update('email')} className="mt-1 w-full rounded-lg border border-forest-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </label>
            </div>
            <label className="block text-sm">
              <span className="text-forest-900 font-medium">Subject</span>
              <input required value={form.subject} onChange={update('subject')} className="mt-1 w-full rounded-lg border border-forest-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500" />
            </label>
            <label className="block text-sm">
              <span className="text-forest-900 font-medium">Message</span>
              <textarea required rows="5" value={form.message} onChange={update('message')} className="mt-1 w-full rounded-lg border border-forest-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500" />
            </label>
            <button type="submit" className="btn-primary w-full justify-center">Send message</button>
            {sent && <p className="text-sm text-forest-700">Thanks — your message is on its way.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
