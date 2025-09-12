// app/page.tsx
import type { Metadata } from 'next'
import HomeContent from './HomeComponent'

export const metadata: Metadata = { title: 'Whencut | Portfolio', 
  description: 'Venkat (K B Venkataramana) - Experienced Software Engineer, Full Stack Developer, AI Engineer. 2X Hackathon Winner specializing in React, Python, Machine Learning. Portfolio and projects.', 
  keywords: [ 'Venkataramana','Venkat', 'K B Venkataramana', 'Venkataramana K B', 'Whencut', 'Software Engineer', 'Full Stack Developer', 'AI Engineer', 'React Developer', 'Python Developer', 'Portfolio', 'Hackathon Winner' ], 
  openGraph: { title: 'Venkat (K B Venkataramana) - Software Engineer Portfolio', 
    description: 'Portfolio of Venkat, experienced Software Engineer and Full Stack Developer.', 
    url: '/', } }

export default function Page() {
  return <HomeContent />
}
