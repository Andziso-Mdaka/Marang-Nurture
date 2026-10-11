const FEATS = [
  { t: 'Handmade & curated', d: 'Infused with sweet almond oil and essential oils for relaxation.', icon: <><path d="M24 40s-14-8-14-18a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 10-14 18-14 18z" /><path d="M6 30c4 0 6 4 10 4M42 30c-4 0-6 4-10 4" /></> },
  { t: 'Nourishing ingredients', d: 'Leaves skin nourished and your mind rejuvenated.', icon: <><path d="M24 6s-12 14-12 22a12 12 0 0 0 24 0C36 20 24 6 24 6z" /><path d="M18 30a6 6 0 0 0 6 6" /></> },
  { t: 'Good for your skin', d: 'Indulge in a soak that helps relax your body and restore your natural glow.', icon: <><path d="M24 40V18M24 26c-7-1-11-6-11-13 7 0 11 6 11 13zM24 26c7-1 11-6 11-13-7 0-11 6-11 13z" /><path d="M10 40h28" /></> },
  { t: 'Reusable glass', d: 'A conscious choice for you and the environment. Keep the jar, love it twice.', icon: <><rect x="13" y="13" width="22" height="28" rx="4" /><path d="M16 7h16v6H16zM20 27l3 3 6-6" /></> },
]

export default function Why() {
  return (
    <section className="why" id="about">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">Why Marang Nurture</div>
          <h2>Made slowly, for slow moments</h2>
          <p>Every jar is handmade and thoughtfully curated, so your bath feels like a ritual rather than a routine.</p>
        </div>
        <div className="feats">
          {FEATS.map(f => (
            <div className="feat" key={f.t}>
              <svg viewBox="0 0 48 48" aria-hidden="true">{f.icon}</svg>
              <h3>{f.t}</h3><p>{f.d}</p>
            </div>
          ))}
        </div>
        <div className="ingredients"><span>Epsom salts</span><span>Sweet almond oil</span><span>Essential oils</span></div>
      </div>
    </section>
  )
}
