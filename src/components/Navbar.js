import React from 'react'
import Search from './ui/Search'

const Navbar = () => {
  return (
    <div className="flex items-center py-6 px-12 bg-transparent">
      {/* <MobilleSidebar isPro={isPro} queryCount={queryLimit} /> */}

      <div className="flex w-full justify-between">
        <h3 className='text-2xl font-bold'>Hello John , 👋</h3>
        <Search />
      </div>
    </div>
  )
}

export default Navbar