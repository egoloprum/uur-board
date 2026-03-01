import { Stick } from '@/src/shared/components'
import {
  colorMap,
  fontMap,
  getRandomBorderShape,
  getRotationDegree,
  getRotationStyle,
} from '@/src/shared/utils'
import Link from 'next/link'

export const Header = ({}) => {
  const randomFont = fontMap[Math.floor(Math.random() * fontMap.length)]
  const randomBgColor = colorMap[Math.floor(Math.random() * colorMap.length)]

  const rotationDegree = getRotationDegree()
  const rotationStyle = getRotationStyle(rotationDegree)

  const leftStickRotation = rotationDegree + 25
  const rightStickRotation = rotationDegree - 25

  return (
    <header className="px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8 text-black flex justify-between overflow-hidden">
      <div className="relative hover:scale-110 transition-all duration-300">
        <Stick position="left" rotation={leftStickRotation} />
        <Link href="/">
          <nav
            className={`h-fit w-fit text-black p-4 py-2 
              text-xl sm:text-4xl md:text-5xl lg:text-6xl shadow-2xl ${randomFont} ${randomBgColor}`}
            style={{
              ...getRandomBorderShape({ pointsPerSide: 10, variance: 10 }),
              ...rotationStyle,
            }}
          >
            <p>ҮҮР</p>
          </nav>
        </Link>
        <Stick position="right" rotation={rightStickRotation} />
      </div>
      <div className="relative hover:scale-110 transition-all duration-300">
        <Stick position="left" rotation={leftStickRotation} />
        <Link href="/about">
          <nav
            className={`h-fit w-fit text-black p-4 py-2 
              text-xl sm:text-2xl md:text-3xl lg:text-4xl shadow-2xl ${randomFont} ${randomBgColor}`}
            style={{
              ...getRandomBorderShape({ pointsPerSide: 10, variance: 10 }),
              ...rotationStyle,
            }}
          >
            <p>Бидний тухай</p>
          </nav>
        </Link>
        <Stick position="right" rotation={rightStickRotation} />
      </div>
    </header>
  )
}
