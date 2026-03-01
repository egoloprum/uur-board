import { titleMap } from '@/src/shared/utils'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    title: string
  }
}

const Page = async ({ params }: { params: Promise<PageProps['params']> }) => {
  const resolvedParams = await params
  const { title } = resolvedParams

  const decodedTitle = decodeURIComponent(title)

  console.log(decodedTitle)

  const article = titleMap.find(title => title === decodedTitle)

  if (!article) {
    return notFound()
  }

  return (
    <main className="min-h-screen space-y-12 px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8">
      {article}
    </main>
  )
}

export default Page
