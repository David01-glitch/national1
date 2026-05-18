import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-900 text-sand-50 mt-20">
      <div className="container-px py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="w-8 h-8 grid place-items-center rounded-lg bg-sunset-500 text-white text-sm">NP</span>
            National Park Explorer
          </div>
          <p className="mt-4 text-sm text-sand-50/70 leading-relaxed">
            Travel stories, RV journeys, scenic photography, and hiking guides from across America's national parks.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-sand-50/80">
            <li><Link to="/category/national-parks" className="hover:text-sunset-400">National Parks</Link></li>
            <li><Link to="/category/rv-travel" className="hover:text-sunset-400">RV Travel</Link></li>
            <li><Link to="/category/hiking-guides" className="hover:text-sunset-400">Hiking Guides</Link></li>
            <li><Link to="/category/scenic-photography" className="hover:text-sunset-400">Scenic Photography</Link></li>
            <li><Link to="/category/travel-stories" className="hover:text-sunset-400">Travel Stories</Link></li>
            <li><Link to="/category/camping-adventures" className="hover:text-sunset-400">Camping Adventures</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-sand-50/80">
            <li><Link to="/about" className="hover:text-sunset-400">About</Link></li>
            <li><Link to="/blog" className="hover:text-sunset-400">Blog</Link></li>
            <li><Link to="/tutorials" className="hover:text-sunset-400">Tutorials</Link></li>
            <li><Link to="/community" className="hover:text-sunset-400">Community</Link></li>
            <li><Link to="/contact" className="hover:text-sunset-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Get in Touch</h4>
          <p className="text-sm text-sand-50/80">510 Canyon Road<br/>Salt Lake City, UT 84101, USA</p>
          <p className="mt-3 text-sm">
            <a href="mailto:nationalparkexplorer@gmail.com" className="hover:text-sunset-400">nationalparkexplorer@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-sand-50/60">
          <p>© {year} National Park Explorer. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-5">
            <li><Link to="/privacy" className="hover:text-sunset-400">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-sunset-400">Terms</Link></li>
            <li><Link to="/refund" className="hover:text-sunset-400">Refund</Link></li>
            <li><Link to="/about" className="hover:text-sunset-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-sunset-400">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
