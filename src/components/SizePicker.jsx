import { SIZES, rand } from '../data/products.js'

export default function SizePicker({ value, onChange, priceFor, prefix = '' }) {
  return (
    <div className="sizes" role="group" aria-label="Size">
      {SIZES.map(s => (
        <button key={s} type="button" aria-pressed={value === s} onClick={() => onChange(s)}>
          {s} g<b>{prefix}{rand(priceFor(s))}</b>
        </button>
      ))}
    </div>
  )
}
