import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'
import { RiMenu5Fill } from "react-icons/ri";

export default function TopHeader() {
  return (
    <div className='flex p-5 border-b border-gray-700 shadow-sm items-center justify-between md:justify-end bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
      <RiMenu5Fill className='md:hidden'/>
      <Image src={'/logo-white.svg'} width={150} height={100} alt="Share" className='md:hidden'/>
      <UserButton/>
    </div>
  )
}
