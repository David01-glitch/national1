import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('np-cookies-ok')) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-white border border-forest-100 shadow-soft rounded-2xl p-4">
      <p className="text-sm text-forest-900">
        We use cookies to enhance your experience and analyze site traffic. By continuing, you agree to our use of cookies.
      </p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => { localStorage.setItem('np-cookies-ok', '1'); setVisible(false); }}
          className="btn-primary text-sm py-1.5 px-4"
        >
          Accept
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-sm text-forest-700 hover:text-forest-900 font-medium px-3"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
