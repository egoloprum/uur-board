import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[80vh] relative space-y-12 px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8">
      <div className="bg-white">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </main>
  )
}
