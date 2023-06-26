'use client';
import { MenuContext } from '@/context/MenuContext'
import React, { useContext } from 'react'
import {FaBars} from 'react-icons/fa'
import UserAreaSelect from './UserAreaSelect';

const MainHeader = () => {
    const{ toggle } = useContext(MenuContext)

  return (
    <div className='bg-white flex justify-between items-center px-4 h-12 mb-4'> 
        <div>Dashbord</div>
        <div className='flex justify-center items-center gap-3'>
        <div onClick={toggle} className='lg:hidden'>
            <FaBars className=' cursor-pointer' />
        </div>
        <div>
          <UserAreaSelect />
        </div>
        </div>
    </div>
  )
}

export default MainHeader