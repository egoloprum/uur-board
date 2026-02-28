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

function getRandomIntInclusive() {
  const min = Math.ceil(-5)
  const max = Math.floor(5)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rotateMap: Record<number, string> = {
  [-5]: '-rotate-[5deg]',
  [-4]: '-rotate-[4deg]',
  [-3]: '-rotate-[3deg]',
  [-2]: '-rotate-[2deg]',
  [-1]: '-rotate-[1deg]',
  [0]: 'rotate-0',
  [1]: 'rotate-[1deg]',
  [2]: 'rotate-[2deg]',
  [3]: 'rotate-[3deg]',
  [4]: 'rotate-[4deg]',
  [5]: 'rotate-[5deg]',
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
            {words.split(' ').map((word, index) => (
              <div
                className={`bg-white h-fit text-black p-4 text-xl sm:texl-2xl md:text-3xl lg:text-4xl shadow-xl z-10 ${rotateMap[getRandomIntInclusive()]}`}
                key={word + index}
              >
                <p>{word}</p>
              </div>
            ))}
          </section>
        ))}
      </div>

      <article className="flex flex-wrap justify-center gap-16">
        {articles.map((article, index) => (
          <section
            className={`bg-white p-3 sm:p-4 w-full sm:w-72 md:w-80 flex flex-col gap-3 hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer ${rotateMap[getRandomIntInclusive()]}`}
            key={article.title + index}
          >
            <div className="bg-black aspect-square w-full relative overflow-hidden">
              {article.imageSrc ? (
                <Image src={article.imageSrc} alt={article.title} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 from-gray-800 to-black" />
              )}
            </div>
            <p className="text-black text-xl sm:text-2xl md:text-3xl font-bold">{article.title}</p>
            <span className="text-gray-700 text-sm sm:text-base line-clamp-4">
              {article.description}
            </span>
          </section>
        ))}
      </article>
    </div>
  )
}
