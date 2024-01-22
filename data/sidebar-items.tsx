import { RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineLocalShipping } from "react-icons/md";

export const SIDERBAR_ITEMS = [
  { link: "/dashboard", icon: <RxDashboard size={20} />, tooltip: "Home" },
  {
    link: "/dashboard/orders",
    icon: <MdOutlineLocalShipping size={20} />,
    tooltip: "Orders",
  },
  {
    link: "/dashboard/products",
    icon: <HiOutlineShoppingBag size={20} />,
    tooltip: "Products",
  },
  {
    link: "/dashboard/customers",
    icon: <RxPerson size={20} />,
    tooltip: "Customers",
  },
  {
    link: "/dashboard/settings",
    icon: <FiSettings size={20} />,
    tooltip: "Settings",
  },
];
