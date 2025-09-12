import { Metadata } from 'next'
import About from '../components/About/About'
export const metadata: Metadata = {
  title: 'About Whencut',
  description: 'Explore innovative projects by Venkat (K B Venkataramana) including MedScript, LicenseLens, AI solutions, and hackathon-winning applications. Full Stack Developer portfolio.',
  keywords: ['Venkat projects', 'K B Venkataramana portfolio', 'Software Engineer projects', 'AI projects', 'React projects', 'Python projects'],
  openGraph: {
    title: 'Projects by Venkat (K B Venkataramana)',
    description: 'Explore innovative tech projects and solutions built by Venkat.',
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