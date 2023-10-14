import React from 'react';
import Avatar from './ui/Avatar';
import { ChevronDown } from 'lucide-react';

const UserDetails = ({ user }) => {
  return (
    <div className='p-3 bg-[#2d2d69] rounded-md flex items-center relative'>
      <Avatar user={user} />

      <div className='ml-3 flex flex-col'>
        <span className='text-sm text-white font-semibold'>{user?.name}</span>
        <span className='text-xs text-gray-400'>{user?.role}</span>
      </div>

      <ChevronDown className='absolute right-2 h-3 w-3' />
    </div>
  )
}

export default UserDetails