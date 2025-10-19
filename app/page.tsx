// app/page.tsx
import type { Metadata } from 'next'
import HomeContent from './HomeComponent'

export const metadata: Metadata = { title: 'Prasanna | Portfolio', 
  description: 'Prasanna (G Prasanna Srinivasan) - Experienced Software Engineer, Full Stack Developer. Portfolio and projects.', 
  keywords: [ 'Prasanna','G Prasanna Srinivasan', 'Prasanna Srinivasan', 'Software Engineer', 'Full Stack Developer', 'React Developer', 'Portfolio' ], 
  openGraph: { title: 'Prasanna (G Prasanna Srinivasan) - Software Engineer Portfolio', 
    description: 'Portfolio of Prasanna, experienced Software Engineer and Full Stack Developer.', 
    url: '/', } }

export default function Page() {
  return <HomeContent />
}
