import { colorMap, fontMap, rotateMap } from '@/src/shared/utils'
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
      <div className="bg-white h-fit w-full text-center text-black font-bold p-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl -rotate-2 shadow-xl z-10">
        <h2>{topic.content}</h2>
      </div>

      <div className="mb-10 md:mb-15 lg:mb-20 space-y-12">
        {description.map((words, index) => (
          <section className="flex flex-wrap gap-4 justify-center" key={words + index}>
            {words.split(' ').map((word, index) => {
              const randomFont = fontMap[Math.floor(Math.random() * fontMap.length)]
              const randomBgColor = colorMap[Math.floor(Math.random() * colorMap.length)]
              const randomRotate = rotateMap[Math.floor(Math.random() * rotateMap.length)]

              return (
                <div
                  className={`h-fit text-black px-2 py-1 md:px-4 md:py-2 text-xl sm:texl-2xl md:text-3xl lg:text-4xl shadow-xl z-10 ${randomRotate} ${randomFont} ${randomBgColor}`}
                  key={word + index}
                >
                  <p>{word}</p>
                </div>
              )
            })}
          </section>
        ))}
      </div>

      <article className="flex flex-wrap justify-center gap-16">
        {articles.map((article, index) => {
          const randomRotate = rotateMap[Math.floor(Math.random() * rotateMap.length)]

          return (
            <section
              className={`bg-white p-3 sm:p-4 w-full sm:w-72 md:w-80 flex flex-col gap-3 hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer ${randomRotate}`}
              key={article.title + index}
            >
              <div className="bg-black aspect-square w-full relative overflow-hidden">
                {article.imageSrc ? (
                  <Image src={article.imageSrc} alt={article.title} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 from-gray-800 to-black" />
                )}
              </div>
              <p className="text-black text-xl sm:text-2xl md:text-3xl font-bold">
                {article.title}
              </p>
              <span className="text-gray-700 text-sm sm:text-base line-clamp-4">
                {article.description}
              </span>
            </section>
          )
        })}
      </article>
    </div>
  )
}
