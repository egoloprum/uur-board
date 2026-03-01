export const fontMap = [
  'font-grotesk',
  'font-montserrat',
  'font-inter',
  'font-arima',
  'font-oswald',
  'font-cascadia',
  'font-slab',
  'font-source',
  'font-lobster',
  'font-caveat',
]

export const colorMap = [
  'bg-red-300',
  'bg-orange-300',
  'bg-amber-300',
  'bg-yellow-300',
  'bg-lime-300',
  'bg-green-300',
  'bg-emerald-300',
  'bg-teal-300',
  'bg-cyan-300',
  'bg-sky-300',
  'bg-blue-300',
  'bg-indigo-300',
  'bg-violet-300',
  'bg-purple-300',
  'bg-fuchsia-300',
  'bg-pink-300',
  'bg-rose-300',
  'bg-slate-300',
  'bg-zinc-300',
  'bg-mist-300',
]

export const getRotationDegree = () => {
  const min = -10
  const max = 10
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRotation = (degree: number) => {
  return degree < 0 ? `-rotate-${Math.abs(degree)}` : `rotate-${degree}`
}

export const getRotationStyle = (degree: number) => {
  return degree ? { transform: `rotate(${degree}deg)` } : {}
}

type BorderShapeOptions = {
  pointsPerSide?: number
  variance?: number
  seed?: number
}

export function getRandomBorderShape(options: BorderShapeOptions = {}) {
  const {
    pointsPerSide = 3,
    variance = 8, // how rough the edges are (in %)
    seed,
  } = options

  // Optional seeded randomness (stable shapes per render if needed)
  let random = Math.random
  if (typeof seed === 'number') {
    let s = seed
    random = () => {
      s = Math.sin(s) * 10000
      return s - Math.floor(s)
    }
  }

  const jitter = (value: number) => value + (random() - 0.5) * variance

  const points: string[] = []

  // Top edge (left → right)
  for (let i = 0; i <= pointsPerSide; i++) {
    const x = (i / pointsPerSide) * 100
    const y = jitter(0)
    points.push(`${x}% ${y}%`)
  }

  // Right edge (top → bottom)
  for (let i = 1; i <= pointsPerSide; i++) {
    const y = (i / pointsPerSide) * 100
    const x = jitter(100)
    points.push(`${x}% ${y}%`)
  }

  // Bottom edge (right → left)
  for (let i = pointsPerSide - 1; i >= 0; i--) {
    const x = (i / pointsPerSide) * 100
    const y = jitter(100)
    points.push(`${x}% ${y}%`)
  }

  // Left edge (bottom → top)
  for (let i = pointsPerSide - 1; i > 0; i--) {
    const y = (i / pointsPerSide) * 100
    const x = jitter(0)
    points.push(`${x}% ${y}%`)
  }

  return {
    clipPath: `polygon(${points.join(',')})`,
  }
}
