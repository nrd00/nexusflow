import nvdaLogo from "../assets/images/nvda.png";
import teslaLogo from "../assets/images/tesla.png";
import metaLogo from "../assets/images/meta.png";
import amazonLogo from "../assets/images/amazon.png";
import amdLogo from '../assets/images/amd.png';

const topGainers = [
  {
    id: 1,
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    price: 128.35,
    change: 4.35,
    logo: nvdaLogo,
  },
  {
    id: 2,
    symbol: "AMD",
    company: "Advanced Micro Devices",
    price: 172.45,
    change: 3.21,
    logo: amdLogo,
  },
  {
    id: 3,
    symbol: "TSLA",
    company: "Tesla, Inc.",
    price: 248.75,
    change: 2.85,
    logo: teslaLogo,
  },
  {
    id: 4,
    symbol: "META",
    company: "Meta Platforms, Inc.",
    price: 509.78,
    change: 2.45,
    logo: metaLogo,
  },
  {
    id: 5,
    symbol: "AMZN",
    company: "Amazon.com, Inc.",
    price: 187.32,
    change: 1.92,
    logo: amazonLogo,
  },
];

export default topGainers;