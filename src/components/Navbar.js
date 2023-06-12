import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import Logo from './Logo'
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from '../components/Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter()
    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2` } onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>
                &nbsp;
            </span>
        </button>
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 border-b-[0.5px] border-dark/80 bg-light dark:bg-dark bgp'>

            <button className='flex-col items-center justify-cente hidden lg:flex' onClick={handleClick}>
                <span className={` bg-dark dark:bg-light block duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1': '-translate-y-0.5'}`}></span>
                <span className={` bg-dark dark:bg-light duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0': 'opacity-100'}`}></span>
                <span className={` bg-dark dark:bg-light duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1': 'translate-y-0.5'}`}></span>
            </button>

            {/* desktop */}
            <div className='w-full flex items-center justify-between lg:hidden'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4 heading tracking-widest' />
                <CustomLink href="/about" title="About" className='mx-4 heading tracking-widest' />
                <CustomLink href="/project" title="Project" className='mx-4 heading tracking-widest' />
                <CustomLink href="/contact" title="Contact" className='ml-4 heading tracking-widest' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://github.com/Surajpverma" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.7 }}><GithubIcon /> </motion.a>
                <motion.a href="https://www.linkedin.com/in/surajpverma/" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.7 }}><LinkedInIcon /> </motion.a>
                {/* <motion.a href="https://google.com" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3 bg-light rounded-full' whileTap={{ scale: 0.7 }}><PinterestIcon /></motion.a> */}
                <motion.a href="https://google.com" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.7 }}><DribbbleIcon /></motion.a>

                <button
                className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-yellow-200": "bg-light text-blue-900"}`}
                onClick={() => setMode(mode === "light" ? "dark" : "light")} >
                    {
                        mode === "dark" ? <SunIcon className={"fill-dark"} /> :  <MoonIcon className={"fill-dark"} />
                    }
                </button>
            </nav>
            </div>

            {/* mobile */}
            {
                isOpen ? <motion.div initial={{scale: 0, opacity: 0, x:"-50%", y:"-50%"}} animate={{scale: 1, opacity: 1}} className=' min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 backdrop-blur-md py-32 '>
                <nav className='flex items-center justify-center flex-col'>
                    <CustomMobileLink href="/" title="Home" className='heading tracking-widest' toggle={handleClick}/>
                    <CustomMobileLink href="/about" title="About" className='heading tracking-widest' toggle={handleClick}/>
                    <CustomMobileLink href="/project" title="Project" className='heading tracking-widest' toggle={handleClick}/>
                    <CustomMobileLink href="/contact" title="Contact" className='heading tracking-widest' toggle={handleClick}/>
                </nav>
    
                <nav className='flex items-center justify-center flex-wrap mt-2'>
                    <motion.a href="https://github.com/Surajpverma" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1' whileTap={{ scale: 0.7 }}><GithubIcon /> </motion.a>
                    <motion.a href="https://www.linkedin.com/in/surajpverma/" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3 sm:mx-1' whileTap={{ scale: 0.7 }}><LinkedInIcon /> </motion.a>
                    <motion.a href="https://google.com" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3 sm:mx-1' whileTap={{ scale: 0.7 }}><DribbbleIcon /></motion.a>
    
                    <button
                    className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-yellow-200": "bg-light text-blue-900"}`}
                    onClick={() => setMode(mode === "light" ? "dark" : "light")} >
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"} /> :  <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
                </motion.div> : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'><Logo /></div>
        </header>
    )
}

export default Navbar