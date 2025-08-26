'use client'

// import { motion } from 'framer-motion' // Disabled to prevent layout shifts
import { useEffect, useRef, useState } from 'react'
import { CheckIcon } from 'lucide-react'

const links = [
  { label: 'pool painting', href: '/pool-painting' },
  { label: 'fence painting', href: '/fence-painting' },
  { label: 'garage floor painting', href: '/garage-floor-painting' },
  { label: 'cabinet makeover', href: '/cabinet-makeover' },
]

export default function InfiniteLinkCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  // Removed scrollWidth state as it's no longer needed with CSS animation

  return (
    <div className="overflow-hidden w-full py-6 bg-blue-600">
      <div
        className="flex gap-8 whitespace-nowrap my-auto animate-scroll"
        ref={containerRef}
        style={{
          animation: 'scroll-left 20s linear infinite',
          willChange: 'transform',
        }}
      >
        {[...links, ...links].map((link, idx) => (
          <span
            key={idx}
            className="flex gap-3 text-xl font-semibold text-white uppercase tracking-wide flex-shrink-0"
          >
            <CheckIcon className='w-5 h-5 my-auto text-blue-200'/>
            {link.label}
          </span>
        ))}
        <style jsx>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  )
}