"use client";

import Link from 'next/link'
import React from 'react'
import { useMenu } from '../MenuProvider';

const Header = () => {

    const { isOpen, setIsOpen } = useMenu();


    return (
        <header className='relative z-auto md:z-[1]'>
            <div className='__blurFilter'></div>

            <div className='flex relative justify-between items-center max-w-[1208px] w-full mx-auto px-4 py-4'>
                <Link href="/" className='max-w-[120px] md:max-w-[159px] w-full'>
                    <img src='/assets/img/my-sifarish_logo.svg' alt='Logo' className='w-full' />
                </Link>

                
                <div className="">

                    <div className="hamburger-icon " id="icon" onClick={() => setIsOpen(!isOpen)}>
                        <div className="icon-1" id="a"></div>
                        <div className="icon-2" id="b"></div>
                        <div className="icon-3" id="c"></div>
                        <div className="clear"></div>
                    </div>


                    <ul className="gap-10 hidden md:flex ">
                        <li><Link href="/" className='text-[16px] font-normal'>Home</Link></li>
                        <li><Link href="/about" className='text-[16px] font-normal'>About</Link></li>
                        <li><Link href="/faq" className='text-[16px] font-normal'>FAQs</Link></li>
                        <li><Link href="/kyb" className='text-[16px] font-normal'>Know Your Bird</Link></li>
                    </ul>

                    <div className='__mainMenu'>
                        <ul className="_otrMenu_bx ">
                            <div className=' absolute h-full flex  md:hidden'><div className='__menuBlur'></div></div>
                            <div className=' md:hidden mb-5'><img src='/assets/img/my-sifarish_logo.svg' className='max-w-[120px] w-full' alt='Logo' /></div>
                            <li><Link href="/" className='text-[16px] font-normal' onClick={() => setIsOpen(false)}>Home</Link></li>
                            <li><Link href="/about" className='text-[16px] font-normal' onClick={() => setIsOpen(false)}>About</Link></li>
                            <li><Link href="/faq" className='text-[16px] font-normal' onClick={() => setIsOpen(false)}>FAQs</Link></li>
                            <li><Link href="/kyb" className='text-[16px] font-normal' onClick={() => setIsOpen(false)}>Know Your Bird</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header