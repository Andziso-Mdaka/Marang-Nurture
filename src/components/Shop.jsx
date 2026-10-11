import { useState } from 'react'
import { PRODUCTS } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import BlendDialog from './BlendDialog.jsx'

export default function Shop() {
  const [blend, setBlend] = useState(false)
  return (
    <section id="shop">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">The collection</div>
          <h2>Luxury Bath Soaks</h2>
          <div className="divider">♡</div>
          <p>Four scents, two sizes. Choose yours below, add it to your bag and send us your order.</p>
        </div>
        <div className="grid">{PRODUCTS.map(p => <ProductCard key={p.id} p={p} />)}</div>

        <div className="mix">
          <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke="#a8874f" strokeWidth="1.3" aria-hidden="true"><rect x="10" y="12" width="28" height="30" rx="5" /><path d="M14 6h20v6H14z" /><path d="M24 34s-7-4.5-7-9a3.5 3.5 0 0 1 7-1 3.5 3.5 0 0 1 7 1c0 4.5-7 9-7 9z" /></svg>
          <div>
            <strong>Love more than one scent?</strong>
            <p>Mix two or more scents in one jar. A small extra fee applies. More joy, more you!</p>
          </div>
          <button className="btn ghost" onClick={() => setBlend(true)}>Create a blend</button>
        </div>
        <BlendDialog open={blend} onClose={() => setBlend(false)} />

        <table className="pricetable">
          <caption>Price list</caption>
          <thead>
            <tr>
              <th>Size</th>
              <th>Luxury Bath Soaks<br /><span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 300 }}>Lavender · Rose Infused · Sweet Orange</span></th>
              <th>Dreamy Vanilla Absolute</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>300 g</td><td className="p">R149.00</td><td className="p">R189.00</td></tr>
            <tr><td>500 g</td><td className="p">R259.00</td><td className="p">R315.00</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
