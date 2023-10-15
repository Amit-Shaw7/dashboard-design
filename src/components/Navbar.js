import React from 'react'
import Search from './Search'

const Navbar = () => {
  return (
    <div className="flex items-center py-5 px-6 md:px-12 bg-transparent">
      {/* <MobilleSidebar isPro={isPro} queryCount={queryLimit} /> */}

      <div className="flex w-full justify-between">
        <h3 className='text-md sm:text-xl md:text-2xl font-bold'>Hello John , 👋</h3>
        <Search />
      </div>
    </div>
  )
}

export default Navbar