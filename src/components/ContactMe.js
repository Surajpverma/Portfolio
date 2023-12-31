import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import React, { useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@/emailjs/browser";
import emailjs from 'emailjs-com';
import Head from 'next/head'
import Layout from '@/components/Layout.js';
import phone from '../../public/phone.png'
import ct from '../../public/images/ct.png'
import Image from 'next/image.js';


const ContactMe = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .send(
            'service_0uo6j5f',
            'template_p9fsnto',
            {
              from_name: form.name,
              to_name: "Suraj Pal",
              from_email: form.email,
              to_email: "surajpv29@gmail.com",
              message: form.message,
            },
            '-9rsi51IXe58KcmnQ'
          )
          .then(
            () => {
              alert("Thank you. I will get back to you as soon as possible.");
    
              setForm({
                name: "",
                phone: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              alert("Ahh, something went wrong. Please try again.");
            }
          );
      };
      return (
        <>
          <main className="display flex items-center justify-center md:min-h-screen md:flex-row text-dark dark:text-light min-h-[90dvh] w-full bgc bg-light dark:bg-dark">
            <Layout className='pt-16'>
              <AnimatedText text="contact !" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
              <div className=' flex items-center lg:flex-col justify-between w-full h-full'>
                <div className='w-[48%] lg:w-full h-auto border border-dark dark:border-light p-6 lg:hidden'>
                <Image src={ct} alt='profile' className='w-full h-auto'/>
                </div>
    
                <div className='flex flex-col justify-center items-center w-[48%] lg:w-full h-full border border-dark dark:border-light p-6'>
                  <p className='heading text-3xl lg:text-xl tracking-[0.3rem]'>● KEEP<span className="border-b-[0.5px] pb-3"> IN </span>TOUCH ●</p>
                  <Image src={phone} alt='profile' className='w-[25%] h-auto bg-blend-multiply py-8' />
                  <div className='flex items-center justify-between w-full h-auto'>
                    <input
                      id="Your Name"
                      type='text'
                      name='name'
                      placeholder='my name is'
                      value={form.name}
                      onChange={handleChange}
                      className="heading bg-transparent py-2 border-b border-b-dark text-sm text-dark dark:text-light tracking-widest dark:border-b-light placeholder-dark dark:placeholder-light w-[48%] outline-none" />
    
                    <input
                      id="Your Number"
                      type='text'
                      name='phone'
                      placeholder='my number is'
                      value={form.phone}
                      onChange={handleChange}
                      className="heading bg-transparent py-2 border-b border-b-dark text-sm text-dark dark:text-light tracking-widest dark:border-b-light placeholder-dark dark:placeholder-light w-[48%] outline-none" />
                  </div>
    
                  <input type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="my email is" className="heading bg-transparent pt-4 py-2 border-b border-b-dark text-sm text-dark dark:text-light tracking-widest dark:border-b-light placeholder-dark dark:placeholder-light w-full outline-none" />
    
    
                  <textarea
                    rows={5} name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='What you want to say?' className="heading bg-transparent pt-4 py-2 border-b border-b-dark text-sm text-dark dark:text-light tracking-widest dark:border-b-light placeholder-dark dark:placeholder-light w-full outline-none" />
    
    
                  <button type="submit" className="flex items-center bg-light text-dark mt-6 p-2 px-6 text-lg  hover:bg-primary border border-solid border-dark dark:bg-dark dark:text-light hover:dark:bg-primaryDark hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base duration-700 heading font-[50] tracking-[0.2rem] self-start" onClick={handleSubmit} >Send message</button>
                </div>
              </div>
            </Layout>
          </main>
        </>
      )
}

export default ContactMe