import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import profilePic from '../../public/images/profile/developer-pic-1.png'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>SPV || Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-[95vh] dark:text-light '>
        <Layout className='p-0 md:p-1.5 sm:p-8 '>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full bg-transparent'>
              <Image src={profilePic} alt='profile' className='w-[80%] h-auto lg:hidden md:inline-block md:w-full' priority sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              50vw'/> </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center heading'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:text-3xl' />
              <p className='my-4 text-base font-medium md:!text-sm sm:!texr-xs'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex item-center self-start mt-4 lg:self-center'>
                <Link href="/resume.pdf" target={"_blank"} className='flex items-center bg-light text-dark p-2 px-6 text-lg  hover:bg-primary border-2 border-solid border-dark dark:bg-dark dark:text-light hover:dark:bg-primaryDark hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base duration-700 heading font-[50] tracking-[0.2rem]' download={true}>Resume <LinkArrow className="w-6 ml-1" /> </Link>
                <Link href="/contact" target={"_blank"} className='m-4 ml-6 text-lg  capitalize text-dark underline underline-offset-4 dark:text-light md:text-base heading font-[50] tracking-[0.2rem]'>contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className='absolute w-24 right-8 bottom-4 inline-block md:hidden'>
          <Image src={lightBulb} alt='Bulb' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
