import { BUSINESS as B } from '../config.js'

const CARDS = [
  { t: 'WhatsApp', v: B.whatsappDisplay, href: `https://wa.me/${B.whatsapp}`, ext: true, icon: <><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-1.5-1-2-2l1-1-1-2z" /></> },
  { t: 'Call', v: B.phone, href: `tel:${B.phoneHref}`, icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /> },
  { t: 'Email', v: B.email, href: `mailto:${B.email}`, icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></> },
  { t: 'Find us', v: B.address, href: B.mapsUrl, ext: true, icon: <><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></> },
  { t: 'Messenger', v: B.name, href: B.messenger, ext: true, icon: <><path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z" /><path d="M7 13l3.5-3.5 2.5 2 3.5-3.5" /></> },
]

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">Get in touch</div>
          <h2>We'd love to hear from you</h2>
          <p>Questions about scents, gifts or delivery? Reach out any time.</p>
        </div>
        <div className="contact-grid">
          {CARDS.map(c => (
            <a key={c.t} className="cc" href={c.href} {...(c.ext ? { target: '_blank', rel: 'noopener' } : {})}>
              <svg viewBox="0 0 24 24" aria-hidden="true">{c.icon}</svg>
              <b>{c.t}</b><span>{c.v}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
