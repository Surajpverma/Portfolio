import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {

  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2lg
    px4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.1
        }
      }}
      whileTap={{ scale: 0.9 }}>
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 mb-16 w-full text-center md:text-6xl md:mt-32 heading'>Skills</h2>
      <div className=' w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd lmddark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark' >
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          Web
        </motion.div>

        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="NextJS" x="0vw" y="12vw" />
        <Skill name="ReactJS" x="-20vw" y="-15vw" />
        <Skill name="Web Design" x="15vw" y="-12vw" />
        <Skill name="ThreeJS" x="32vw" y="-5vw" />
        <Skill name="Figma" x="2vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        <Skill name="GitHub" x="-30vw" y="-4vw" />

      </div>


    </>
  )
}

export default Skills