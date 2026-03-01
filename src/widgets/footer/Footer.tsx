import { Stick } from '@/src/shared/components'
import {
  colorMap,
  fontMap,
  getRandomBorderShape,
  getRotationDegree,
  getRotationStyle,
} from '@/src/shared/utils'
import Link from 'next/link'

export const Footer = ({}) => {
  const randomFont = fontMap[Math.floor(Math.random() * fontMap.length)]
  const randomBgColor = colorMap[Math.floor(Math.random() * colorMap.length)]

  const rotationDegree = getRotationDegree()
  const rotationStyle = getRotationStyle(rotationDegree)

  const leftStickRotation = rotationDegree + 25
  const rightStickRotation = rotationDegree - 25

  return (
    <footer className="px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8 text-black flex flex-col gap-8">
      <section className=" flex justify-between">
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
          <Link href="https://www.instagram.com/uur.mn" target="_blank">
            <nav
              className={`h-fit w-fit text-black p-4 py-2 
              text-xl sm:text-2xl md:text-3xl lg:text-4xl shadow-2xl ${randomFont} ${randomBgColor}`}
              style={{
                ...getRandomBorderShape({ pointsPerSide: 10, variance: 10 }),
                ...rotationStyle,
              }}
            >
              <p>Instagram</p>
            </nav>
          </Link>
          <Stick position="right" rotation={rightStickRotation} />
        </div>
      </section>

      <div className="relative">
        <Stick position="left" rotation={leftStickRotation} />
        <div
          className={`h-fit w-full text-center 
      text-black p-4 text-lg sm:text-xl 
      md:text-2xl lg:text-3xl rotate-1 shadow-xl z-10 mb-10 ${randomFont} ${randomBgColor}`}
          style={{
            ...getRandomBorderShape({ pointsPerSide: 5, variance: 5 }),
          }}
        >
          <p>
            © 2026 он. Бүх бичвэрүүд зохиогчийн эрхээр хамгаалагдсан. Бичвэр, дүрслэлийг ашиглахдаа
            заавал эш татна.
          </p>
        </div>
        <Stick position="right" rotation={rightStickRotation} />
      </div>
    </footer>
  )
}
