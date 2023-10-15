import React, { useContext } from 'react'
import { AppContext } from '../store/AppProvider';
import Sidebar from './Sidebar';
import { MdClose } from 'react-icons/md';

const MobileSidebar = () => {
    const { showMobileSidebar, setShowMobileSidebar } = useContext(AppContext);
    return (
        <>
            <div className={`lg:hidden fixed top-0 left-0 h-full flex w-full z-50 shadow-lg transform transition-transform duration-300 ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className={`w-[70%] sm:w-[40%] relative h-full`}>
                    <div className='absolute top-2 right-2'>
                        <MdClose color='white' onClick={() => setShowMobileSidebar(false)} fontSize="1.5rem" />
                    </div>
                    <Sidebar />
                </div>
                <div className="'w-[30%] sm:w-[60%] h-full z-50" onClick={() => setShowMobileSidebar(false)}></div>
            </div>
        </>
    )
}

export default MobileSidebar;




