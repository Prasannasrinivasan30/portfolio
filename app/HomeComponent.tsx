// app/HomeContent.tsx
'use client'

import { useEffect } from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

export default function HomeContent() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Venkat Portfolio - K B Venkataramana",
            "description": "Professional portfolio of Venkat (K B Venkataramana), Software Engineer and Full Stack Developer",
            "url": "https://whencut.in",
            "mainEntity": {
              "@type": "Person",
              "name": "K B Venkataramana",
              "alternateName": "Venkat",
              "jobTitle": "Software Engineer"
            }
          })
        }}
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
