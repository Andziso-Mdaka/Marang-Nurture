import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react'

const CartCtx = createContext(null)
const KEY = 'mn_cart'

function load() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState('')
  const timer = useRef()

  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(items)) } catch {} }, [items])

  const notify = useCallback(msg => {
    setToast(msg)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(''), 2600)
  }, [])

  const add = useCallback(item => {
    setItems(prev => {
      const ex = prev.find(i => i.key === item.key)
      return ex ? prev.map(i => i.key === item.key ? { ...i, qty: i.qty + 1 } : i) : [...prev, { ...item, qty: 1 }]
    })
    notify(`${item.title} (${item.size} g) added`)
  }, [notify])

  const change = useCallback((key, d) => {
    setItems(prev => prev.map(i => i.key === key ? { ...i, qty: i.qty + d } : i).filter(i => i.qty > 0))
  }, [])

  const count = items.reduce((a, i) => a + i.qty, 0)
  const subtotal = items.reduce((a, i) => a + i.qty * i.price, 0)

  return (
    <CartCtx.Provider value={{ items, add, change, count, subtotal, open, setOpen, toast, notify }}>
      {children}
    </CartCtx.Provider>
  )
}

export const useCart = () => useContext(CartCtx)
