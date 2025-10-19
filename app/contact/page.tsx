import { Metadata } from 'next'
import Contact from '../components/Contact/Contact'

export const metadata: Metadata = {
  title: 'Contact Prasanna Srinivasan',
  description: 'Get in touch with Prasanna (G Prasanna Srinivasan), Software Engineer and Full Stack Developer. Connect via LinkedIn, GitHub, or email for collaboration opportunities.',
  keywords: ['Contact Prasanna', 'G Prasanna Srinivasan contact', 'Software Engineer contact', 'hire Prasanna', 'collaboration'],
  openGraph: {
    title: 'Contact Prasanna (G Prasanna Srinivasan)',
    description: 'Connect with Prasanna for software development opportunities and tech collaboration.',
    url: '/contact',
  }
}
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <Contact />
    </main>
  )
} 