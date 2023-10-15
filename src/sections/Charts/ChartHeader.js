import React from 'react'
import Search from '../../components/ui/Search'

const ChartHeader = ({ title, subtitle, showSearch, showDropdown }) => {
    return (
        <div className='w-full flex items-center justify-between mb-3'>
            <div>
                <h3 className='text-xl font-bold'>{title}</h3>
                <span className='text-sm text-gray-400'>{subtitle}</span>
            </div>

            <div className='flex items-center gap-5'>
                {showSearch && <Search />}

                {showDropdown &&
                    <div>
                        <select id="small" class="block w-full p-2 text-sm text-gray-900 border-0 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  ">
                            <option selected>Quarterly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>}
            </div>
        </div>
    )
}

export default ChartHeader