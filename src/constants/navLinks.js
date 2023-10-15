import { MdDashboard } from "react-icons/md";
import { TbCube } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineLiveHelp } from "react-icons/md";
export const routes = [
    {
        label: "Dashboard",
        icon: MdDashboard,
        href: "/dashboard",
    },
    {
        label: "Product",
        icon: TbCube,
        href: "/product",
    },
    {
        label: "Customers",
        icon: BsPerson,
        href: "/customers",
    },
    {
        label: "Income",
        icon: BiWalletAlt,
        href: "/income",
    },
    {
        label: "Promote",
        icon: TbDiscount2,
        href: "/promote",
    },
    {
        label: "Help",
        icon: MdOutlineLiveHelp,
        href: "/help",
    },
];