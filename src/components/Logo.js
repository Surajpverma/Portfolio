import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <motion.div className='flex item-center justify-center mt-2'>
      <MotionLink href="/" className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold dark:border-light border border-solid border-transparent heading tracking-widest'
        whileHover={{
          backgroundColor: ["#333333", "#A8C1D1", "#4D675A", "#6A87A5", "#C76E7A", "#895570", "#333333"],
          transition: {
            duration: 1,
            repeat: Infinity
          }
        }}
        whileTap={{ scale: 0.7 }}>
        SPV
      </MotionLink>
    </motion.div>
  )
}

export default Logo