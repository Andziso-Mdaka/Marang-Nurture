import { useEffect, useRef, useState } from 'react'
import { PRODUCTS } from '../data/products.js'
import { useCart } from '../CartContext.jsx'
import SizePicker from './SizePicker.jsx'

export default function BlendDialog({ open, onClose }) {
  const ref = useRef()
  const [picks, setPicks] = useState([])
  const [size, setSize] = useState(300)
  const { add, notify } = useCart()

  useEffect(() => {
    const d = ref.current
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  const toggle = id => setPicks(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])

  const submit = () => {
    if (picks.length < 2) return notify('Choose at least two scents')
    const chosen = PRODUCTS.filter(p => picks.includes(p.id))
    add({
      key: 'blend-' + picks.slice().sort().join('+') + size,
      title: 'Blend: ' + chosen.map(p => p.name).join(' + '),
      size,
      price: Math.max(...chosen.map(p => p.prices[size])),
      blend: true,
    })
    setPicks([])
    onClose()
  }

  return (
    <dialog ref={ref} onClose={onClose}>
      <div className="in">
        <h3>Create a blend</h3>
        <p className="fine">Pick two or more scents for one jar. A small extra fee applies.</p>
        <div className="opts">
          {PRODUCTS.map(p => (
            <label key={p.id}><input type="checkbox" checked={picks.includes(p.id)} onChange={() => toggle(p.id)} /> {p.name}</label>
          ))}
        </div>
        <SizePicker value={size} onChange={setSize} priceFor={s => (s === 500 ? 259 : 149)} prefix="from " />
        <div className="row">
          <button className="btn ghost" onClick={onClose}>Cancel</button>
          <button className="btn" onClick={submit}>Add blend</button>
        </div>
      </div>
    </dialog>
  )
}
