import { useCart } from '../CartContext.jsx'
import { rand } from '../data/products.js'

export default function BagBar() {
  const { count, subtotal, setOpen } = useCart()
  return (
    <button className={'bagbar' + (count ? ' show' : '')} onClick={() => setOpen(true)} aria-hidden={!count} tabIndex={count ? 0 : -1}>
      <span>View bag ({count})</span><b>{rand(subtotal)}</b>
    </button>
  )
}
