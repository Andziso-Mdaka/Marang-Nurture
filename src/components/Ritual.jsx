const STEPS = [
  ['Run it warm', 'Fill your bath with comfortably warm water.'],
  ['Scoop & dissolve', 'Add 2–3 generous scoops of soak and swirl until the salts dissolve.'],
  ['Breathe it in', 'Soak for 15–20 minutes and let the scent do its work.'],
  ['Rinse & rest', 'Pat dry, moisturise, and carry the calm into your evening.'],
]

export default function Ritual() {
  return (
    <section className="ritual">
      <div className="wrap">
        <div className="head"><div className="eyebrow">The ritual</div><h2>How to soak</h2></div>
        <ol>{STEPS.map(([b, p]) => <li key={b}><b>{b}</b><p>{p}</p></li>)}</ol>
      </div>
    </section>
  )
}
