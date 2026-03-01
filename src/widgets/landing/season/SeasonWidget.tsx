import { Stick } from '@/src/shared/components'
import {
  colorMap,
  fontMap,
  getRandomBorderShape,
  getRotationDegree,
  getRotationStyle,
} from '@/src/shared/utils'
import Image from 'next/image'

interface SeasonWidgetProps {
  topic: {
    content: string
    style?: string
  }
  description: string[]
  articles: {
    title: string
    description: string
    imageSrc: string
  }[]
}

export const SeasonWidget = ({ topic, description, articles }: SeasonWidgetProps) => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div
        className="bg-white h-fit w-full text-center 
      text-black font-bold p-4 text-2xl sm:text-3xl 
      md:text-4xl lg:text-5xl -rotate-2 shadow-xl z-10"
        style={{
          ...getRandomBorderShape({ pointsPerSide: 5, variance: 5 }),
        }}
      >
        <h2>{topic.content}</h2>
      </div>

      <div className="mb-10 md:mb-15 lg:mb-20 space-y-12">
        {description.map((words, index) => (
          <SeasonDescription words={words} key={words + index} />
        ))}
      </div>

      <article className="flex flex-wrap justify-center gap-16">
        {articles.map((article, index) => (
          <SeasonArticle article={article} key={article.title + index} />
        ))}
      </article>
    </div>
  )
}

const SeasonDescription = ({ words }: { words: string }) => {
  return (
    <section className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
      {words.split(' ').map((word, index) => {
        const randomFont = fontMap[Math.floor(Math.random() * fontMap.length)]
        const randomBgColor = colorMap[Math.floor(Math.random() * colorMap.length)]
        const rotationDegree = getRotationDegree()
        const rotationStyle = getRotationStyle(rotationDegree)

        const leftStickRotation = rotationDegree + 25
        const rightStickRotation = rotationDegree - 25

        return (
          <div className="relative" key={word + index}>
            <Stick
              position="left"
              rotation={leftStickRotation}
              className="h-4 w-2 md:h-4 md:w-2 lg:h-6 lg:w-3 xl:h-8 xl:w-4"
            />
            <div
              className={`h-fit text-black px-2 py-1 md:px-4 md:py-2 
                    text-xl sm:texl-2xl md:text-3xl lg:text-4xl 
                    shadow-xl z-10 ${randomFont} ${randomBgColor}`}
              style={{
                ...getRandomBorderShape({ pointsPerSide: 10, variance: 10 }),
                ...rotationStyle,
              }}
            >
              <p>{word}</p>
            </div>
            <Stick
              position="right"
              rotation={rightStickRotation}
              className="h-4 w-2 md:h-4 md:w-2 lg:h-6 lg:w-3 xl:h-8 xl:w-4"
            />
          </div>
        )
      })}
    </section>
  )
}

const SeasonArticle = ({
  article,
}: {
  article: {
    title: string
    description: string
    imageSrc: string
  }
}) => {
  return (
    <div className="w-fit space-y-4">
      <section
        className={`bg-white p-3 sm:p-4 flex flex-col gap-3 
                  hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer`}
      >
        <div className="bg-black aspect-square w-full relative overflow-hidden">
          {article.imageSrc ? (
            <Image src={article.imageSrc} alt={article.title} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 from-gray-800 to-black" />
          )}
        </div>
        <p className="text-black text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
          {article.title}
        </p>
      </section>
      <div
        className={`bg-white text-gray-700 text-sm sm:text-base px-2 py-1 
                  md:px-4 md:py-2 hover:scale-105 transition-all duration-300 max-w-100 cursor-pointer`}
        style={{ ...getRandomBorderShape({ pointsPerSide: 5, variance: 5 }) }}
      >
        <p className="line-clamp-3">{article.description}</p>
      </div>
    </div>
  )
}
