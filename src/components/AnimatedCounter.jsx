import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

export default function AnimatedCounter({ value, display, duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.floor(v)),
    })
    return () => controls.stop()
  }, [isInView, value, duration])

  const formatted = display
    ? display
    : count.toLocaleString()

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display ? formatted : count.toLocaleString()}
    </motion.span>
  )
}
