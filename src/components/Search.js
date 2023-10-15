import { MdSearch } from 'react-icons/md';
import React from 'react'

const Search = () => {
    return (
        <div className='border shadow-md border-1 border-gray-100 rounded-md gap-1 p-2 flex items-center bg-white'>
            <MdSearch fontSize="1.2rem" className='text-gray-300'/>
            <input
                className='border-0 outline-none text-sm'
                type="text"
                placeholder='Search'
            />

        </div>
    )
}

export default Search