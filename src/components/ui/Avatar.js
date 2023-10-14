import React from 'react'

const Avatar = ({ user }) => {
    return (
        <div className={`h-[40px] w-[4  0px] rounded-full ${user?.image ? "" : "bg-gray-400"}`}>
            {
                user?.image
                    ?
                    <img
                        src={user?.image}
                        alt={user?.name ? user?.name : "User Avatar"}
                        className='rounded-full h-full w-full object-contain'
                    />
                    :
                    <span className='text-white text-xl'>{user?.name?.split(" ")[0].charAt(0)}</span>
            }
        </div>
    )
}

export default Avatar;