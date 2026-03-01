import { Stick } from '@/src/shared/components'
import {
  colorMap,
  fontMap,
  getRandomBorderShape,
  getRotationDegree,
  getRotationStyle,
} from '@/src/shared/utils'

const heroDescription = 'Монгол хэл дээрх шинжлэх ухаан технологи урлагийн товхимол'

export const HeroWidget = () => {
  const words = heroDescription.split(' ')

  return (
    <section className="flex flex-wrap gap-x-10 gap-y-4 justify-center my-24 md:my-32 lg:my-40">
      {words.map((word, index) => {
        const randomFont = fontMap[Math.floor(Math.random() * fontMap.length)]
        const randomBgColor = colorMap[Math.floor(Math.random() * colorMap.length)]

        const rotationDegree = getRotationDegree()
        const rotationStyle = getRotationStyle(rotationDegree)

        const leftStickRotation = rotationDegree + 25
        const rightStickRotation = rotationDegree - 25

        return (
          <div className="relative" key={word + index}>
            <Stick position="left" rotation={leftStickRotation} />
            <div
              className={`h-fit text-black p-4 py-2 text-xl sm:text-4xl md:text-5xl lg:text-6xl shadow-2xl ${randomFont} ${randomBgColor}`}
              style={{
                ...getRandomBorderShape({ pointsPerSide: 10, variance: 10 }),
                ...rotationStyle,
              }}
            >
              <p>{word}</p>
            </div>
            <Stick position="right" rotation={rightStickRotation} />
          </div>
        )
      })}
    </section>
  )
}
