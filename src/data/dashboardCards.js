// dashboardCards.js

import {
  Wallet,
  TrendingUp,
  PieChart,
  ChartNoAxesCombined,
} from "lucide-react";

const dashboardCards = [
  {
    id: 1,
    title: "Portfolio Value",
    value: "$48,750.25",
    change: "+2.35%",
    period: "Today",
    icon: Wallet,
    iconColor: "blue",
    iconBgColor: "#EAEAFA "
  },
  {
    id: 2,
    title: "Total Profit / Loss",
    value: "$2,350.75",
    change: "+4.75%",
    period: "Today",
    icon: TrendingUp,
    iconColor: "green",
    iconBgColor: "#DCF7EC"
  },
  {
    id: 3,
    title: "Total Stocks",
    value: "12",
    subtitle: "Across 5 Sectors",
    icon: PieChart,
    iconColor: "orange",
    iconBgColor: "#FFECDE"

  },
  {
    id: 4,
    title: "Market Status",
    value: "Bullish",
    change: "+1.15%",
    subtitle: "S&P 500",
    icon: ChartNoAxesCombined,
    iconColor: "green",
    iconBgColor: "#DCF7EC"
    
  },
];

export default dashboardCards;