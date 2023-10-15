import {IoIosArrowForward} from "react-icons/io";
import { routes } from "../constants/navLinks";
import UserDetails from "./UserDetails";
import { TbSettings2 } from "react-icons/tb";
import { user } from "../mocks/user";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className="pt-4 pb-12 flex flex-col h-full text-white bg-[#040440]">

            <div className="py-3 px-5 flex-1">

                <Link href="/dashboard" className="flex items-center justify-start mb-10">
                    <div className="relative w-8 h-8 mr-4">
                        <TbSettings2 className="w-full h-full" />
                    </div>
                    <h1 className="text-xl font-bold">
                        Dashboard
                    </h1>
                </Link>

                <div>
                    {
                        routes?.map((route) => (
                            <Link
                                key={route.href}
                                to={route.href}
                                className={`m-1 text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/30 rounded-lg transition ${location.pathname === route.href ? "bg-[#2d2d69]" : ""}`}
                            >
                                <div className="flex items-center flex-1">
                                    <route.icon color={location.pathname === route.href ? "white" : "lightGray"} className="w-5 h-5 mr-3" />
                                    <span className={`font-${location.pathname === route.href ? "bold" : "semibold"} text-sm text-${location.pathname === route.href ? "white" : "gray-400"} `}>{route.label}</span>
                                </div>

                                {location.pathname !== route.href && <IoIosArrowForward color="lightGray" className="mt-1" />}
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="px-5">
                <UserDetails user={user}/>
            </div>
        </div>
    )
};

export default Sidebar;