import React, { useContext } from 'react'
import Search from './Search'
import { MdMenu } from 'react-icons/md'
import { AppContext } from '../store/AppProvider'

const Navbar = () => {
  const { setShowMobileSidebar } = useContext(AppContext);
  return (
    <div className="flex items-center py-5 px-6 md:px-12 bg-transparent">
      <div className="flex w-full items-center justify-between">

        <div className='flex items-center gap-5'>
          <div className='flex lg:hidden shadow-md p-2  rounded-full'>
            <MdMenu onClick={() => setShowMobileSidebar(true)} fontSize="1.5rem" color='#5A32EA' />
          </div>
          <h3 className='hidden sm:flex text-md sm:text-xl md:text-2xl font-bold'>Hello John , 👋</h3>
        </div>
        <Search />
      </div>
    </div>
  )
}

export default Navbar