export default function Hero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="wrap">
        <div>
          <div className="eyebrow">Handmade luxury bath soaks</div>
          <h1>Nurture your body.<br />Nourish your soul.</h1>
          <span className="script">handmade with care</span>
          <p className="lead">Small-batch bath soaks of Epsom salts, sweet almond oil and pure essential oils, poured into reusable glass jars. Draw a bath, breathe out, and give yourself a moment.</p>
          <div className="actions">
            <a href="#shop" className="btn">Shop the soaks</a>
            <a href="#delivery" className="btn ghost">Nationwide via PostNet</a>
          </div>
        </div>
        <div className="hero-img">
          <img src="./jars.jpg" alt="Three jars of Marang Nurture luxury bath soak in deep blue, rose pink and lavender purple" />
        </div>
      </div>
    </section>
  )
}
