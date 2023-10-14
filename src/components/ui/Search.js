import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
    return (
        <div className='border border-1 border-gray-100 rounded-md gap-1 p-1 flex items-center bg-white'>
            <SearchIcon className='text-gray-300 h-5'/>
            <input
                className='border-0 outline-none text-sm'
                type="text"
                placeholder='Search'
            />

        </div>
    )
}

export default Search