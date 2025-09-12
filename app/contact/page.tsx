import { Metadata } from 'next'
import Contact from '../components/Contact/Contact'

export const metadata: Metadata = {
  title: 'Contact Venkat | K B Venkataramana - Software Engineer',
  description: 'Get in touch with Venkat (K B Venkataramana), Software Engineer and Full Stack Developer. Connect via LinkedIn, GitHub, or email for collaboration opportunities.',
  keywords: ['Contact Venkat', 'K B Venkataramana contact', 'Software Engineer contact', 'hire Venkat', 'collaboration'],
  openGraph: {
    title: 'Contact Venkat (K B Venkataramana)',
    description: 'Connect with Venkat for software development opportunities and tech collaboration.',
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