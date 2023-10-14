import React from 'react'

const ChartContainer = ({children}) => {
  return (
    <div className='grid grid-cols-3 gap-4 justify-between'>
        {children}
    </div>
  )
}

export default ChartContainer