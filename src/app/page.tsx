import { HeroWidget, SeasonWidget } from '../widgets/landing'

export default function Home() {
  return (
    <main className="min-h-screen my-20 md:my-30 lg:my-40 relative space-y-12 px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8 overflow-x-clip">
      <HeroWidget />

      <SeasonWidget
        topic={{
          content: 'ДУГААР 0. НУУЦ',
        }}
        description={[
          'Өдөр бүр бидний амьдралд харагдах зүйлс',
          'Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц',
          'Нууц амьдрал, нууц код, нууц газрын зураг',
        ]}
        articles={[
          {
            title: 'Хиймэл оюун ухаан',
            description:
              'Хиймэл оюун ухаан нь анхандаа янз бүрийн дүрснүүдийг хооронд нь ялган таних, төрөл бүрийн хэл дээр ойлгох  шинэ мэдээллүүдэд суралцан дэвших зэргийг гол зорилгоо болгож байв.',
            imageSrc: '',
          },
          {
            title: 'Жазз',
            description:
              'Жазз хөгжмийг Луис Армстронгийн “​​What a Wonderful World” дуугүйгээр төсөөлөхийн аргагүй..',
            imageSrc: '',
          },
          {
            title: 'Сүүний парадокс',
            description: 'Хүнийг сүү боловсруулдаг болгосон генийн мутаци гэж юу вэ?',
            imageSrc: '',
          },
        ]}
      />
    </main>
  )
}
