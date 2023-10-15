import React from 'react'

const StatsContainer = ({children}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-around bg-transparent'>
        {children}
    </div>
  )
}

export default StatsContainer