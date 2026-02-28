import { colorMap, fontMap } from '@/src/shared/utils'

const heroDescription = 'Монгол хэл дээрх шинжлэх ухаан технологи урлагийн товхимол'

export const HeroWidget = () => {
  const words = heroDescription.split(' ')

  const styles = [
    '-rotate-6 z-10',
    'rotate-5 z-20 -ml-4 mt-8',
    '-rotate-2 z-10 -ml-2',
    'rotate-7 z-30 -ml-6 mt-12',
    '-rotate-4 z-10',
    'rotate-3 z-20 -ml-3 mt-6',
    '-rotate-5 z-10',
    'rotate-6 z-30 -ml-5 -mt-4',
  ]

  return (
    <section className="flex flex-wrap gap-4 justify-center my-24 md:my-32 lg:my-40">
      {words.map((word, index) => {
        const randomFont = fontMap[Math.floor(Math.random() * fontMap.length)]
        const randomBgColor = colorMap[Math.floor(Math.random() * colorMap.length)]

        return (
          <div
            key={index}
            className={`h-fit text-black p-4 py-2 text-xl sm:text-4xl md:text-5xl lg:text-6xl shadow-2xl ${styles[index] || ''} ${randomFont} ${randomBgColor}`}
          >
            <p>{word}</p>
          </div>
        )
      })}
    </section>
  )
}
