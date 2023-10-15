import React from 'react'

const ChartContainer = ({children}) => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        {children}
    </div>
  )
}

export default ChartContainer