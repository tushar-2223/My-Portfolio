"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Navitem } from '@/data/Navitem';

const Navbar = () => {
    return (
        <div className='invisible lg:visible fixed z-50 w-[18rem] h-full bg-gray-950 border-r'>
            <div className='flex justify-center pb-8 pt-10'>
                <div className='h-36 w-36 rounded-full flex justify-center items-center overflow-hidden bg-gradient-to-r from-blue-500/60 to-purple-700/60'>
                    <Image src={'/images/profilepic.png'} width={125} height={125} alt='profile Image' />
                </div>
            </div>

            <div className='flex flex-col gap-4 items-start justify-center px-14'>
                {Navitem.map((item, index) => (
                    <Link href={item.link} key={index} className='flex items-center scroll-m-20 text-lg hover:text-xl transition-all tracking-wide font-poppins font-medium gap-3 hover:bg-gray-900 p-2 rounded-lg border border-transparent hover:border-slate-700 text-slate-400 hover:text-white'>
                        <span className='text-purple-600 text-2xl'>{item.icon}</span>{item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar