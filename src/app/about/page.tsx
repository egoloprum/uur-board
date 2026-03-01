import { Stick } from '@/src/shared/components'
import { colorMap, fontMap, getRandomBorderShape, getRotationDegree } from '@/src/shared/utils'

export default function Page({}) {
  const randomFont = fontMap[Math.floor(Math.random() * fontMap.length)]
  const randomBgColor = colorMap[Math.floor(Math.random() * colorMap.length)]
  const rotationDegree = getRotationDegree()
  const leftStickRotation = rotationDegree + 25
  const rightStickRotation = rotationDegree - 25

  return (
    <main className="min-h-[80vh] relative space-y-12 px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8">
      <div className="relative">
        <Stick position="left" rotation={leftStickRotation} />
        <div
          className="bg-white h-fit w-full text-center 
            text-black font-bold p-4 text-2xl sm:text-3xl 
            md:text-4xl lg:text-5xl -rotate-2 shadow-xl z-10"
          style={{
            ...getRandomBorderShape({ pointsPerSide: 20, variance: 15 }),
          }}
        >
          <h1>Бидний тухай</h1>
        </div>
        <Stick position="right" rotation={rightStickRotation} />
      </div>

      <div className="relative">
        <Stick position="left" rotation={leftStickRotation} />
        <div
          className={`h-fit w-full text-center mb-20 lg:mb-40
            text-black p-4 text-lg sm:text-xl 
            md:text-2xl lg:text-3xl -rotate-1 shadow-xl z-10 ${randomFont} ${randomBgColor}`}
          style={{
            ...getRandomBorderShape({ pointsPerSide: 5, variance: 5 }),
          }}
        >
          <p>
            Сайн байцгаана уу! Бид бол сайн дураараа нэгдсэн шинжлэх ухаан, технологи, урлагт
            хайртай залуус. Монгол хэлнийхээ дархлааг хамгаалах зорилгоор бид &apos;ҮҮР&apos;
            товхимолыг үүсгэн байгуулсан. Бид шинжлэх ухаан, технологи, урлагийн талаарх мэдлэгийг
            монгол хэл дээр судалгаанд суурилсан, ойлгомжтой бөгөөд сонирхолтойгоор түгээхийг хичээж
            байна.
          </p>
        </div>
        <Stick position="right" rotation={rightStickRotation} />
      </div>

      <div className="relative">
        <Stick position="left" rotation={leftStickRotation} />
        <div
          className="bg-white h-fit w-full text-center 
            text-black font-bold p-4 text-2xl sm:text-3xl 
            md:text-4xl lg:text-5xl rotate-2 shadow-xl z-10"
          style={{
            ...getRandomBorderShape({ pointsPerSide: 20, variance: 15 }),
          }}
        >
          <h2>Манай баг</h2>
        </div>
        <Stick position="right" rotation={rightStickRotation} />
      </div>
    </main>
  )
}
