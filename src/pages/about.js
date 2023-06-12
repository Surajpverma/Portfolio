import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useEffect, useRef } from 'react'

import hello from '../../public/images/profile/hello.png'
import Head from 'next/head'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Exp from '@/components/Exp'
import Edu from '@/components/Edu'
import TransitionEffect from '@/components/TransitionEffect'
import profile from '../../public/images/profile/profile.jpg'


const AnimatedNum = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            motionValue.set(value)
        }
    }, [inView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}>

    </span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>SPV || About Page</title>
                <meta name="description" content="later" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light dark:bg-dark bgpl bg-light dark:bg-dark/'>
                <Layout className='pt-16'>
                    <AnimatedText text="OVERVIEW !" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                        <div className=' col-span-5 flex flex-col items-start justify-start xl:col-span-5 md:order-2 md:col-span-8'> <h2 className='mb-4 text-2xl font-bold uppercase dark:text-primaryDark text-primary heading tracking-widest'>ABOUT ME</h2>
                            <p className='font-medium '>Hi, I`&apos;`m SURAJ PAL, a web developer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. I am always looking for
                                new and innovative ways to bring my clients`&apos;` visions to life.</p>
                                <p className='font-medium mt-4'> Currently I am persuing B.E. Computer Science and M.Sc. Chemistry dual degree at BITS PILANI, Pilani, Rajasthan. </p>
                            <p className='font-medium my-4'>I believe that design is about more than just making things look pretty – it`&apos;`s about solving problems and
                                creating intuitive, enjoyable experiences for users. </p>
                            <p className='font-medium '>When I`&apos;`m working on a website or any digital product, I bring my commitment to design excellence and user-centered thinking. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                        <Image src={hello} alt='meri photu' className='w-1/3 h-auto 2xl:invisible dark:rounded-full dark:bg-light dark:px-8 dark:mt-4'/>
                        </div>

                        <div className='col-span-3 relative h-max border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-3 md:order-1 md:col-span-8'>
                            <div className='absolute top-2 -right-3 -z-10 w-[100%] h-[102%]  bg-dark dark:bg-light' />
                            <Image src={profile} alt='meri photu' className='w-full h-auto ' priority sizes='(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            33vw'/>
                        </div>

                        {/* <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNum value="58" />+
                                </span>
                                <h2 className='text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Customers</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNum value="58" />+
                                </span>
                                <h2 className='text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Comleted</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNum value="58" />+
                                </span>
                                <h2 className='text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years Of Experience</h2>
                            </div></div> */}

                    </div>
                    <Skills />
                    <Exp />
                    <Edu />
                </Layout>
            </main>
        </>
    )
}

export default about