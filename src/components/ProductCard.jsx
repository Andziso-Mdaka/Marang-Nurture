import { useState } from 'react'
import { useCart } from '../CartContext.jsx'
import SizePicker from './SizePicker.jsx'

export default function ProductCard({ p }) {
  const [size, setSize] = useState(300)
  const { add } = useCart()
  return (
    <article className={'card' + (p.premium ? ' premium' : '')}>
      {p.premium && <span className="badge">Signature</span>}
      <div className="jar" style={{ '--c': p.color }}><div className="lid" /><div className="body" /></div>
      <h3>{p.name}</h3>
      <p className="note">{p.note}</p>
      <SizePicker value={size} onChange={setSize} priceFor={s => p.prices[s]} />
      <button className="btn" onClick={() => add({ key: p.id + size, title: p.name, size, price: p.prices[size] })}>Add to bag</button>
    </article>
  )
}
