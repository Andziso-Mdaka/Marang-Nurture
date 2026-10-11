export const SIZES = [300, 500]

export const PRODUCTS = [
  { id: 'lavender', name: 'Lavender', note: 'Calming and relaxing for the mind and body.', color: '#7d6fa8', prices: { 300: 149, 500: 259 } },
  { id: 'rose', name: 'Rose Infused', note: 'Romantic and soothing for a nurturing self-care experience.', color: '#c46a7f', prices: { 300: 149, 500: 259 } },
  { id: 'orange', name: 'Sweet Orange', note: 'Uplifting and refreshing to brighten your mood and energise your day.', color: '#e08a3c', prices: { 300: 149, 500: 259 } },
  { id: 'vanilla', name: 'Dreamy Vanilla Absolute', note: 'Richer. Deeper. More luxurious. A scent that lingers, envelops and elevates.', color: '#c9a87a', prices: { 300: 189, 500: 315 }, premium: true },
]

export const rand = n => 'R' + n.toFixed(2)
