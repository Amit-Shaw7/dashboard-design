import { ChevronRight } from "lucide-react";
import { routes } from "../constants/navLinks";
import UserDetails from "./UserDetails";
import { TbSettings2 } from "react-icons/tb";
import { user } from "../mocks/user";

const Sidebar = () => {
    return (
        <div className="pt-4 pb-12 flex flex-col h-full text-white bg-[#040440]">

            <div className="py-3 px-5 flex-1">

                <a href="/dashboard" className="flex items-center justify-start mb-10">
                    <div className="relative w-8 h-8 mr-4">
                        <TbSettings2 className="w-full h-full" />
                    </div>
                    <h1 className="text-xl font-bold">
                        Dashboard
                    </h1>
                </a>

                <div>
                    {
                        routes?.map((route) => (
                            <a
                                key={route.href}
                                href={route.href}
                                className={`m-1 text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/30 rounded-lg transition ${route.href === "/dashboard" ? "bg-[#2d2d69]" : ""}`}
                            >
                                <div className="flex items-center flex-1">
                                    <route.icon className="w-5 h-5 mr-3" />
                                    <span className="text-sm">{route.label}</span>
                                </div>

                                {route.href !== "/dashboard" && <ChevronRight className="mt-1 h-3 w-3" />}
                            </a>
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