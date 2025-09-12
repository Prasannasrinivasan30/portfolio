import { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"
import ClientLayout from './components/ClientLayout'
import { metadata as siteMetadata, siteMetadata as site } from './metadata'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export { siteMetadata as metadata }

// Structured Data Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "K B Venkataramana",
  "alternateName": ["Venkat", "Venkataramana K B", "Whencut"],
  "url": site.siteUrl,
  "image": site.siteUrl + site.image,
  "description": "Software Engineer, Full Stack Developer, and Tech Innovator with expertise in AI/ML, Web Development, and Problem Solving",
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Tech Industry"
  },
  "knowsAbout": [
    "Software Engineering",
    "Full Stack Development", 
    "Artificial Intelligence",
    "Machine Learning",
    "React",
    "Python",
    "Node.js",
    "Computer Vision",
    "Web Development"
  ],
  "sameAs": [
    site.linkedIn,
    site.github,
    "https://x.com/encryptedvenkat"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Engineering College"
  },
  "award": ["2X Hackathon Winner"],
  "email": "venkataramanakbala@gmail.com", 
  "birthPlace": {
    "@type": "Place",
    "name": "India"
  },
  "nationality": "Indian"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Enhanced SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#39ff14" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/venkataramana.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={site.siteUrl} />
        
        {/* Additional meta tags for name variations */}
        <meta name="dc.creator" content="K B Venkataramana" />
        <meta name="dc.subject" content="Venkat, Venkataramana, Software Engineer, Developer Portfolio" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//x.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-black`}
      >
        {/* Hidden text for SEO - contains all name variations */}
        <div className="sr-only">
          K B Venkataramana also known as Venkataramana, Venkat, Venkataramana K B, Whencut - Software Engineer, 
          Full Stack Developer, AI Engineer, Machine Learning Engineer, React Developer, Python Developer, 
          2X Hackathon Winner, Tech Innovator, Problem Solver
        </div>
        
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
