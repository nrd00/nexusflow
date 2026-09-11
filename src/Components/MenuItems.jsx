import { RxDashboard, RxHeart, RxPieChart } from "react-icons/rx";

import { HiTrendingUp } from "react-icons/hi";

export const MenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: RxDashboard,
    path: "/",
  },
  { id: "stocks", title: "Stocks", icon: HiTrendingUp, path: "/stocks" },
  { id: "wishlist", title: "Wishlist", icon: RxHeart, path: "/wishlist" },
  { id: "portfolio", title: "Portfolio", icon: RxPieChart, path: "/portfolio" },
];
