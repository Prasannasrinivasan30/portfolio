'use client'

import { useState, useEffect, useRef } from 'react'
import ScrollReveal from '../ScrollReveal'
import { usePathname } from 'next/navigation'

const About = () => {
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const inputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()

  const commands = {
    ls: 'Available commands:\n• whoami\n• skills\n• projects\n• contact\n• clear',
  whoami: `Hey, I’m Prasanna Srinivasan\n• I craft digital experiences — from symposium websites to polished Next.js apps\n• Design on Figma, build with code — UI, UX, and everything in between\n• Code + caffeine = my comfort zone\n• Movie buff by night, developer by day (sometimes both at once)\n• Running on logic, creativity, and a “never-give-up” mindset`,
  skills: `• Adapts fast, builds faster
• I don't actually use ctrl+C && ctrl+V
• Code, create, repeat - until it’s perfect.`,
  projects: `• Event Registration Page — a smooth, responsive signup flow built for our college symposium.
• Portfolio — my personal corner on the web, designed and built with Next.js and a bit of caffeine.
• Interactive UI — playful, accessible animations with Framer Motion + GSAP.`,
    contact: 'Contact Information:\n• GitHub: https://github.com/Prasannasrinivasan30\n• LinkedIn: www.linkedin.com/in/prasanna-srinivasan-g-\n• Email: prasanna.srinivasan.edu@gmail.com',
    clear: 'CLEAR',
    help: 'Type "ls" to see available commands'
  }

  useEffect(() => {   
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    if (inputRef.current) {
      inputRef.current.focus()
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    if (trimmedCmd === 'clear') {
      setOutput([])
      return
    }

    const response = commands[trimmedCmd as keyof typeof commands] || 'Command not found. Type "ls" for available commands.'
    setOutput([...output, `> ${cmd}`, response])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  return (
    <section className={`relative min-h-[100dvh] pt-40 ${
      pathname === '/' ? 'pb-0' : 'pb-32 md:pb-40'
    } px-4`} id="about">
      {/* Gradient Background */}
      <div 
        className="fixed inset-0 bg-black z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(57, 255, 20, 0.08), transparent 10%)`
        }}
      >
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#333333 1px, transparent 1px), linear-gradient(to right, #333333 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal width="100%">
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl mb-20 md:mb-32">
            {/* Terminal Header */}
            <div className="bg-[#2D2D2D] px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
                <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
              </div>
              <div className="text-gray-400 text-sm ml-2">about.exe</div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-sm h-[450px] overflow-y-auto terminal-scroll">
              <div className="text-green-400 mb-4">
                Welcome to my terminal! Type &apos;ls&apos; to see available commands.
              </div>

              {/* Command Output */}
              <div className="space-y-2">
                {output.map((line, i) => (
                  <div 
                    key={i} 
                    className={`${
                      line.startsWith('>') ? 'text-gray-400' : 'text-green-400'
                    } whitespace-pre-wrap`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Command Input */}
              <form onSubmit={handleSubmit} className="flex items-center mt-2">
                <span className="text-green-400 mr-2">{'>'}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-gray-300 outline-none"
                  spellCheck="false"
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About 