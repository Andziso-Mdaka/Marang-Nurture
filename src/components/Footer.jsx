import { BUSINESS as B } from '../config.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <a href="#top" className="logo"><div><b>MARANG</b><small>NURTURE</small></div></a>
        <span className="script">Relax · Restore · Renew</span>
        <nav>
          <a href="#shop">Shop</a><a href="#about">Why us</a><a href="#delivery">Delivery</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
          <a href={B.facebook} target="_blank" rel="noopener">Facebook</a>
        </nav>
        <p style={{ marginTop: 6, fontSize: 14 }}>WhatsApp {B.whatsappDisplay} · {B.email} · Pretoria</p>
        <small>© {new Date().getFullYear()} {B.name} · Luxury bath soaks, handmade in South Africa</small>
      </div>
    </footer>
  )
}
