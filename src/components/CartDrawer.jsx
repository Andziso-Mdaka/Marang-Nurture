import { useState } from 'react'
import { useCart } from '../CartContext.jsx'
import { rand } from '../data/products.js'
import { BUSINESS } from '../config.js'

export default function CartDrawer() {
  const { items, change, subtotal, setOpen } = useCart()
  const [f, setF] = useState({ name: '', phone: '', branch: '', notes: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })

  const send = e => {
    e.preventDefault()
    const lines = items.map(i => `• ${i.qty} × ${i.title} (${i.size} g) @ ${rand(i.price)}${i.blend ? ' + blend fee' : ''}`)
    const msg = [
      "Hi Marang Nurture! I'd like to order:", '', ...lines, '',
      `Subtotal: ${rand(subtotal)} (excl. PostNet delivery)`, '',
      `Name: ${f.name}`, `Phone: ${f.phone}`, `PostNet branch: ${f.branch}`,
      ...(f.notes ? [`Notes: ${f.notes}`] : []),
    ].join('\n')
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      <div className="overlay" onClick={() => setOpen(false)} />
      <aside className="drawer" aria-label="Your bag">
        <header><h3>Your bag</h3><button className="x" onClick={() => setOpen(false)} aria-label="Close">×</button></header>
        <div className="items">
          {items.length ? items.map(i => (
            <div className="line" key={i.key}>
              <div><div className="t">{i.title}</div><div className="s">{i.size} g · {rand(i.price)}{i.blend && ' + blend fee'}</div></div>
              <div className="qty">
                <button onClick={() => change(i.key, -1)} aria-label="Less">−</button>{i.qty}
                <button onClick={() => change(i.key, 1)} aria-label="More">+</button>
              </div>
            </div>
          )) : <p className="empty">Your bag is empty.<br />Time for a soak?</p>}
        </div>
        <form onSubmit={send}>
          <div className="total"><span>Subtotal</span><span>{rand(subtotal)}</span></div>
          <p className="fine">PostNet delivery fee (and any blend fee) is confirmed with your order.</p>
          <div><label htmlFor="name">Your name</label><input id="name" required value={f.name} onChange={set('name')} /></div>
          <div><label htmlFor="phone">Phone number</label><input id="phone" type="tel" required value={f.phone} onChange={set('phone')} /></div>
          <div><label htmlFor="branch">Nearest PostNet branch</label><input id="branch" placeholder="e.g. PostNet Menlyn" required value={f.branch} onChange={set('branch')} /></div>
          <div><label htmlFor="notes">Notes (optional)</label><textarea id="notes" rows="2" placeholder="Gift message, blend details…" value={f.notes} onChange={set('notes')} /></div>
          <button className="btn" type="submit" disabled={!items.length}>Send order on WhatsApp</button>
        </form>
      </aside>
    </>
  )
}
