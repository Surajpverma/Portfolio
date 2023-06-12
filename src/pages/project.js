import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Layout from '@/components/Layout'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import decrypt from '../../public/images/projects/decrypt.png'
import electives from '../../public/images/projects/electives.png'
import netflix from '../../public/images/projects/netflix.png'
import pf from '../../public/images/projects/pf.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)


const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return(
        <article className='w-full flex justify-between items-center border border-solid border-dark bg-light shadow-2xl p-12 relative  dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:ronded-2xl xs:p-4 bgpr bg-right-top'>
            <div className='absolute top-2 -right-3 -z-10 w-[100%] h-[101%] bg-dark  dark:bg-light xs:ring-2 sm:h-[102%] xs:w-[100%] ' />
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden  lg:w-full' >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.9}}
                transition={{duration: 0.2}}
                priority sizes='(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                50vw' />
            </Link>
            <div className=' w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className=' dark:text-primary font-medium text-xl text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank"  >
                    <h2 className='my-2 w-full text-left text-4xl font-bold hover:underline hover:underline-offset-2'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10' > <GithubIcon /> </Link>
                <Link href={link} target="_blank" className= 'mx-4 flex items-center bg-light text-dark p-2.5 px-6 text-lg  hover:bg-primary border-2 border-solid border-dark dark:bg-dark dark:text-light hover:dark:bg-primaryDark hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base duration-700 heading font-[50] tracking-[0.2rem]' > Visit Project </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = ({title, type, img, link, github}) => {

    return(
        <article className='w-full flex justify-center items-center border border-solid border-dark bg-light shadow-2xl p-6 relative flex-col dark:bg-dark dark:border-light xs:p-4 bgpr'>
            <div className='absolute top-2 -right-3 -z-10 w-[100%] h-[101%] bg-dark  dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] ' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden' >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.9}}
                transition={{duration: 0.2}} />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className=' dark:text-primary font-medium text-xl text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank"  >
                    <h2 className='my-2 w-full text-left text-3xl font-bold hover:underline hover:underline-offset-2 lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target="_blank" className= 'flex items-center bg-light text-dark p-1 px-6 text-sm  hover:bg-primary border-2 border-solid border-dark dark:bg-dark dark:text-light hover:dark:bg-primaryDark hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base duration-700 heading font-[10] tracking-[0.2rem]' > Visit </Link>
                <Link href={github} target="_blank" className='w-8 md:w-6' > <GithubIcon /> </Link>
                </div>
            </div>
        </article>
    )
}

const project = () => {
    return (
        <div className=''>
            <Head>
                <title>SPV || Projects Page</title>
                <meta name="description" content="later" />
            </Head>

            <TransitionEffect />

            <main className='w-full flex flex-col items-center justify-center dark:text-light bg-light dark:bg-dark bgpl'>
                <Layout className='pt-16 '>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-8'>
                        <div className='col-span-12'>
                            <FeaturedProject type="APOGEE 2023" title="Decrypt" summary="A website designed for the pre-APOGEE 2023 event by Coding Club BITSP, in which participants type their input and get output, after which they must write right code to obtain such result. I contributed by integrating backend, changing UI and fixing many bugs. (Note: Currently backend server is down)" img={decrypt} link="https://decrypt-bits.tech" github="https://github.com/Surajpverma/ReverseCoding" />
                        </div>
                        <div className=' col-span-6 sm:col-span-12'>
                            <Projects type="Clone" title="Netflix Clone with Firebase Authentication" img={netflix} github="https://github.com/Surajpverma/netflix-clone.git" link="https://netflix-clone-spv.netlify.app" />
                        </div>
                        <div className=' col-span-6 sm:col-span-12'>
                        <Projects type="Frotend" title="Fully Responsive Portfolio" summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency." img={pf} link="/" github="www.github.com" />
                        </div>
                        <div className='col-span-12'>
                        <FeaturedProject type="Frotend" title="--Will be revealed soon--" summary="I am working on this project for Coding Club." img={electives} link="/" github="www.github.com" />
                        </div>
                    </div>
                </Layout>
            </main>
        </div>
    )
}

export default project