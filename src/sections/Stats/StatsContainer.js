import React from 'react'

const StatsContainer = ({children}) => {
  return (
    <div className='grid grid-cols-4 gap-4 justify-around bg-transparent'>
        {children}
    </div>
  )
}

export default StatsContainer