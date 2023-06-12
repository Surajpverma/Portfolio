import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-[0.5px] border-solid border-dark font-medium text-lg dark:text-light dark:border-light bg-light dark:bg-dark bgp'>
            <Layout className='py-6 flex items-center justify-between sm:text-base lg:flex-col lg:py-6 '>
                <span className=''>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center lg:py-2 '>Build with ❤️ by&nbsp;<Link href="https://github.com/Surajpverma" className='underline underline-offset-2 heading font-bold tracking-wide'>SPV</Link></div>
                <Link href="/contact" target={"_blank"} className='underline underline-offset-2'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer