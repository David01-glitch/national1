import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-px max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 text-5xl font-display font-bold text-forest-900">Off the trail.</h1>
        <p className="mt-4 text-forest-900/75">The page you are looking for has wandered off. Let us get you back to a known waypoint.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/blog" className="btn-outline">Read the Blog</Link>
        </div>
      </div>
    </section>
  );
}
