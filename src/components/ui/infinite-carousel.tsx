'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { CheckIcon } from 'lucide-react'

const links = [
  { label: 'gutters cleaning', href: '/gutters-cleaning' },
  { label: 'window washing', href: '/window-washing' },
  { label: 'pressure washing', href: '/pressure-washing' },
  { label: 'cabinet makeover', href: '/cabinet-makeover' },
]

export default function InfiniteLinkCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2)
    }
  }, [])

  return (
    <div className="overflow-hidden w-full py-6 bg-blue-600">
      <motion.div
        className="flex gap-8 whitespace-nowrap my-auto"
        ref={containerRef}
        animate={{ x: ['0%', `-${scrollWidth}px`] }}
        transition={{
          ease: 'linear',
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...links, ...links].map((link, idx) => (
          <span
            key={idx}
            className="flex gap-3 text-xl font-semibold text-white uppercase tracking-wide"
          >
            <CheckIcon className='w-5 h-5 my-auto text-blue-200'/>
            {link.label}
          </span>
        ))}
      </motion.div>
    </div>
  )
}