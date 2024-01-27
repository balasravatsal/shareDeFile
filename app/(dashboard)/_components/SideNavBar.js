"use client"
import Image from 'next/image';
import {useState} from 'react'
import { FaCloudUploadAlt, FaFile } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi"

export default function sideNavBar(props) {

  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: FaCloudUploadAlt,
      path: '/upload'
    },
    {
      id: 2,
      name: 'Files',
      icon: FaFile,
      path: '/files'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: GiUpgrade,
      path: '/upgrade'
    },
  ]

  const [activeIndex, setActiveIndex] = useState()
  const { activateSideBar, setActivateSideBar } = props;

  const handleSidebarClick = (e) => {
    // Prevent the click event from propagating to the document body
    e.stopPropagation();
  }

  return (
    <div className='border-r border-gray-700 shadow-sm h-full flex flex-col items-center my-side-bar' onClick={handleSidebarClick}>
      <div className={`p-5`}>
        <Image src={'/logo-black.svg'} width={150} height={100} alt="Share"/>
      </div>
      
      <div className='flex flex-col float-left w-full text-[#111827]'>
        {
          menuList.map((item) => (
            <button 
              key={item.id}
              className={`flex gap-4 p-6 px-8 hover:bg-green-200 ${activeIndex === item.id ? 'bg-green-100 text-gray-900' : ''}`}
              onClick={() => setActiveIndex(item.id)}
            >
              <item.icon style={{ fontSize: '1.5rem' }}/>
              <h2>{item.name}</h2>
            </button>
          ))
        }
        
      </div>
    </div>
  )
}
