import { Metadata } from "next"

// Enhanced SEO metadata for Venkat/Venkataramana K B
export const siteMetadata = {
  title: "Venkat | K B Venkataramana - Software Engineer & Developer Portfolio",
  description: "Venkat (K B Venkataramana) - Experienced Software Engineer, Full Stack Developer, and Tech Innovator. 2X Hackathon Winner specializing in AI/ML, Web Development, and Problem Solving. Explore projects, skills, and professional experience.",
  keywords: [
    "Venkat",
    "Venkataramana", 
    "K B Venkataramana",
    "Venkataramana K B",
    "K B Venkat",
    "Venkat KB",
    "Whencut",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "React Developer",
    "Python Developer",
    "Portfolio",
    "Tech Innovator",
    "Hackathon Winner"
  ],
  author: "K B Venkataramana (Venkat)",
  siteUrl: "https://whencut.in",
  image: "/venkataramana.png",
  twitterHandle: "@encryptedvenkat",
  linkedIn: "https://www.linkedin.com/in/venkataramanakb",
  github: "https://github.com/venkataramanakb"
}

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.author}`
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  publisher: siteMetadata.author,
  applicationName: "Venkat Portfolio",
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.siteUrl,
    siteName: "Venkat Portfolio",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.image,
        width: 1200,
        height: 630,
        alt: "K B Venkataramana (Venkat) - Software Engineer Portfolio"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.image]
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Additional metadata
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  
  // Verification (add your verification codes)
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // bing: 'your-bing-verification-code', // Add your Bing verification if needed
  }
}

// export { siteMetadata } 