import { FiDollarSign } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { BiWalletAlt } from "react-icons/bi";
import { TbShoppingBag } from "react-icons/tb";


export const stats = [
    {
        bgColor: "bg-[#05ab4c]/10",
        iconColor: "text-[#05ab4c]",
        icon: FiDollarSign,
        title: "Earning",
        currencyIcon: <FaDollarSign fontSize="0.9rem" className="mr-0" />,
        number: 198,
        numberUnit: "k",
        trend: "UP",
        trendPercentage: 37,
        trendTimePeriod: "month",
    },
    {
        bgColor: "bg-[#a408ff]/10",
        iconColor: "text-[#a408ff]",
        icon: CgNotes,
        title: "Orders",
        currencyIcon: <FaDollarSign fontSize="0.9rem" fontWeight={700} />,
        number: 2.4,
        numberUnit: "k",
        trend: "DOWN",
        trendPercentage: 2,
        trendTimePeriod: "month",
    },
    {
        bgColor: "bg-[#0e5ec2]/10",
        iconColor: "text-[#0e5ec2]",
        icon: BiWalletAlt,
        title: "Balance",
        currencyIcon: <FaDollarSign fontSize="0.9rem" fontWeight={700} />,
        number: 198,
        numberUnit: "k",
        trend: "DOWN",
        trendPercentage: 2,
        trendTimePeriod: "month",
    },
    {
        bgColor: "bg-[#dc1427]/10",
        iconColor: "text-[#dc1427]",
        icon: TbShoppingBag,
        title: "Total Sales",
        currencyIcon: <FaDollarSign fontSize="0.9rem" fontWeight={700} />,

        number: 198,
        numberUnit: "k",
        trend: "UP",
        trendPercentage: 11,
        trendTimePeriod: "week",
    },
]