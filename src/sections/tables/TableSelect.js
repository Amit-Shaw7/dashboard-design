import React from 'react'

const TableSelect = () => {
    return (
        <div>
            <select id="small" class="block w-full p-2 text-sm text-gray-900 border-0 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  ">
                <option selected>Last 30 days</option>
                <option value="Monthly">Last 60 days</option>
                <option value="Yearly">Last year</option>
            </select>
        </div>
    )
}

export default TableSelect