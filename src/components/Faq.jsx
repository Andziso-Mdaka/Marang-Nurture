import { BUSINESS } from '../config.js'

const QA = [
  ["What's inside each jar?", 'Epsom salts, sweet almond oil and essential oils, in a reusable glass jar.'],
  ['Which scent should I choose?', 'Lavender to calm the mind and body. Rose Infused for a romantic, soothing self-care moment. Sweet Orange to brighten your mood and energise your day. Dreamy Vanilla Absolute is richer and deeper: warm, comforting, and made for deep relaxation.'],
  ['Can I mix scents?', 'Yes! You can mix more than one scent in a single jar for a small extra fee. Use “Create a blend” in the shop.'],
  ['How does delivery work?', `We deliver nationwide via PostNet. Share your nearest branch with your order on WhatsApp (${BUSINESS.whatsappDisplay}) and we'll confirm the delivery fee before you pay.`],
  ['Do they make good gifts?', "Absolutely. Leave a note with your order if it's a gift and we'll do our best to make it special."],
]

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="head"><div className="eyebrow">Questions</div><h2>Good to know</h2></div>
        <div className="faq">
          {QA.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </div>
    </section>
  )
}
