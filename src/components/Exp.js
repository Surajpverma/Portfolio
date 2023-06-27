import React, { useRef } from 'react'
import { useScroll, motion, spring } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, cLink, time, address, work }) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-8 last:mb-8 w-3/5 mx-auto flex flex-col items-center justify-between md:w-4/5'>
        <LiIcon reference={ref} />
        <motion.div initial={{ y:50 }} whileInView={{y:0}} transition={{duration: 0.5, type: spring}}>
            <h3 className=' capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}
                &nbsp;
                <a href={cLink} target='_blank' className='heading tracking-widest text-primary capitalize dark:text-primaryDark'>
                    @{company}
                </a>
            </h3>
            <span className=' capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Exp = () => {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
 
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 heading'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div style={{scaleY: scrollYProgress}} className='absolute top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[0px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details position="Summer Intern" company="Northcorp Software Pvt. Ltd." time="May 2023-Present" address="Gurugram, Haryana" work="--will update soon--"
                    cLink="https://northcorpsoftware.com" />
                    <Details position="Joint Secretory" company="Coding Club BITSP" time="Feb 2022-Present" address="BITS PILANI" work="Leading Coding Club as Joint Secretory throughout various activities, including events, skill training, recruitments, etc. Worked with my teammates to develop Frontend for club events during university fests. Teaching juniors in the club about concepts and technologies related to Frontend development."
                    cLink="" />
                    <Details position="Core Team Member" company="GDSC BITSP" time="Apr 2022-Present" address="BITS PILANI" work="Leading Design Team of GDSC BITSP Chapter. Actively participated in various activities, including events, skill training workshops, recruitments, etc. Designed many posters and UI for club."
                    cLink="https://gdsc.community.dev/birla-institute-of-technology-science-bits-pilani" />
                    <Details position="Team Member" company="Students' Union Media Team" time="Nov 2022-Jan 2023" address="BITS PILANI" work="Designed many items including posters, coupons, passes, standees etc."
                    cLink="https://su-bitspilani.org/" />
                </ul>
            </div>
        </div>
    )
}

export default Exp