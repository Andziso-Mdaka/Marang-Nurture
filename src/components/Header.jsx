import { useEffect, useState } from 'react'
import { useCart } from '../CartContext.jsx'
import { LogoMark } from './Icons.jsx'
import { BUSINESS as B } from '../config.js'

const LINKS = [['#shop', 'Shop'], ['#about', 'Why us'], ['#delivery', 'Delivery'], ['#faq', 'FAQ'], ['#contact', 'Contact']]

export default function Header() {
  const { count, setOpen } = useCart()
  const [menu, setMenu] = useState(false)

  useEffect(() => { document.body.classList.toggle('menu-open', menu) }, [menu])
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setMenu(false)
    const onResize = () => window.innerWidth > 760 && setMenu(false)
    window.addEventListener('keydown', onKey); window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a href="#top" className="logo" aria-label="Marang Nurture home" onClick={() => setMenu(false)}>
            <LogoMark />
            <div><b>MARANG</b><small>NURTURE</small></div>
          </a>
          <ul>{LINKS.map(([h, t]) => <li key={h}><a href={h}>{t}</a></li>)}</ul>
          <div className="nav-right">
            <button className="cart-btn" onClick={() => { setMenu(false); setOpen(true) }}>Bag<span>{count}</span></button>
            <button className="burger" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(m => !m)}><i /><i /><i /></button>
          </div>
        </div>
      </header>
      <nav className="mobile-menu" aria-hidden={!menu}>
        {LINKS.map(([h, t]) => <a key={h} href={h} tabIndex={menu ? 0 : -1} onClick={() => setMenu(false)}>{t}</a>)}
        <div className="mm-contact">
          <a href={`https://wa.me/${B.whatsapp}`} target="_blank" rel="noopener" tabIndex={menu ? 0 : -1}>WhatsApp · {B.whatsappDisplay}</a>
          <a href={`tel:${B.phoneHref}`} tabIndex={menu ? 0 : -1}>Call · {B.phone}</a>
        </div>
      </nav>
    </>
  )
}
