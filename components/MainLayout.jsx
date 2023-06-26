"use client";
import MainHeader from './MainHeader'
import Link from "next/link";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout, SiSinglestore } from "react-icons/si";
import { Children, useContext } from 'react';
import { MenuContext } from '@/context/MenuContext';


const MainLayout = ({children}) => {
   
  const {open,toggle} = useContext(MenuContext)
  
  const closeToggle = ()=>{
   toggle();
  }

   return (
    
    <div className='bg-gray-100 w-screen min-h-screen'>
     <MainHeader />

        <div className='flex justify-start items-start'>
        {/* <aside className={`bg-white top-4 left-4 lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden`}> */}
        <aside className={`bg-white lg:w-60 lg:p-4 overflow-hidden transition-all duration-100 ${open ? 'w-60 p-4 flex' : 'w-0'}`}>
         <ul onClick={closeToggle}>
            <li className="flex justify-end items-center lg:hidden">
               <AiOutlineClose onClick={closeToggle}
                
                  className="text-red-500 hover:text-red-800 cursor-pointer"
               />
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <AiOutlineHome className="mr-2" />
               <Link href="/">
                  Home
               </Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <GrProjects className="mr-2" />
               <Link href="/projects">
               <h3 className="flex-1">Projects</h3>
               </Link>
               <FaAngleRight />
            </li>
            <li className="flex flex-col justify-start items-start  hover:text-blue-800 rounded-xl p-2">
               <div className="w-full flex flex-row justify-start items-center hover:bg-blue-200 p-2 rounded-xl">
                  <FaCheck className="mr-2" />
                  <h3 className="flex-1">Singular</h3>
                  <FaAngleRight />
               </div>
               <ul className="ml-8 mt-4">
                  <li className="flex justify-center items-center gap-3 hover:bg-blue-200 p-2 rounded-xl">
                     <SiSinglestore />
                     <Link href="/singular/selectbox">
                        Select Box
                     </Link>
                  </li>
               </ul>
            </li>
            <li className="flex flex-col justify-start items-start  hover:text-blue-800 rounded-xl p-2">
               <div className="w-full flex flex-row justify-start items-center hover:bg-blue-200 p-2 rounded-xl">
                  <FaCheckDouble className="mr-2" />
                  <h3 className="flex-1">Complex</h3>
                  <FaAngleRight />
               </div>
               <ul className="ml-8 mt-4">
                  <li className="flex justify-start items-center gap-3 my-1 hover:bg-blue-200 p-2 rounded-xl">
                     <SiSinglestore />
                     <Link href="/">
                        Scrollbar
                     </Link>
                  </li>
                  <li className="flex justify-start items-center gap-3 my-1 hover:bg-blue-200 p-2 rounded-xl">
                     <SiSinglestore />
                     <Link href="/">
                        Tabs
                     </Link>
                  </li>
                  <li className="flex justify-start items-center gap-3 my-1 hover:bg-blue-200 p-2 rounded-xl">
                     <SiSinglestore />
                     <Link href="/">
                        Slider
                     </Link>
                  </li>
               </ul>
            </li>
           
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <FiPhoneCall className="mr-2" />
               <Link href="/contact-us">
                  Contact us
               </Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <SiHelpscout className="mr-2" />
               <Link href="/about-us">
                  About us
               </Link>
            </li>
         </ul>
      </aside>

      <main>{children}</main>
        </div>
      </div>
   );
};

export default MainLayout;