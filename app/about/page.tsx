import { Metadata } from 'next'
import About from '../components/About/About'
export const metadata: Metadata = {
  title: 'About — Prasanna Srinivasan',
  description: 'About Prasanna Srinivasan — frontend developer focused on building accessible, performant web apps. Projects include an Event Registration page and other interactive applications.',
  keywords: ['Prasanna Srinivasan', 'Event Registration', 'Frontend Developer', 'React', 'Next.js', 'portfolio'],
  openGraph: {
    title: 'Projects by Praseanna Srinivasan',
    description: 'Portfolio and projects by Prasanna Srinivasan, including an Event Registration page and interactive web apps.',
    url: '/projects',
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <About />
    </main>
  )
} 