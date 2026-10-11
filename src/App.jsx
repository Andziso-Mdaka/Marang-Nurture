import { useEffect } from 'react'
import { useCart } from './CartContext.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Shop from './components/Shop.jsx'
import Why from './components/Why.jsx'
import Ritual from './components/Ritual.jsx'
import Delivery from './components/Delivery.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import BagBar from './components/BagBar.jsx'
import { WhatsAppFloat } from './components/Icons.jsx'

export default function App() {
  const { open, setOpen, toast } = useCart()
  useEffect(() => { document.body.classList.toggle('open', open) }, [open])
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <div className="strip"><div className="wrap"><span>Relax</span><i>✦</i><span>Restore</span><i>✦</i><span>Renew</span></div></div>
        <Shop />
        <Why />
        <Ritual />
        <Delivery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BagBar />
      <WhatsAppFloat />
      <CartDrawer />
      <div className={'toast' + (toast ? ' show' : '')} role="status">{toast}</div>
    </>
  )
}
