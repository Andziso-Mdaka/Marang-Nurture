const STEPS = [
  ['Build your bag', 'Pick your scents and sizes, or create a custom blend.'],
  ['Send your order', 'Add your name and nearest PostNet branch, then send the order to us on WhatsApp.'],
  ['Pay & we pack', 'We confirm your total with delivery and share payment details. Your jars are packed with care.'],
  ['Collect at PostNet', "You're notified when your parcel arrives at your chosen branch."],
]

export default function Delivery() {
  return (
    <section className="delivery" id="delivery">
      <div className="wrap deliv">
        <div>
          <div className="eyebrow">Delivery</div>
          <h2>Delivered to your nearest PostNet</h2>
          <p style={{ color: 'var(--muted)' }}>We send orders anywhere in South Africa through PostNet. Tell us your nearest PostNet branch when you order, and we'll let you know when your parcel is on its way. The delivery fee is confirmed with your order.</p>
        </div>
        <div className="steps">
          {STEPS.map(([b, p], i) => (
            <div className="step" key={b}><div className="n">{i + 1}</div><div><b>{b}</b><p>{p}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  )
}
