import intelLogo from "../assets/images/intel.png";
import pfizerLogo from "../assets/images/pfizer.png";
import cocaColaLogo from "../assets/images/coca-cola.png";
import walmartLogo from "../assets/images/walmart.png";
import ciscoLogo from '../assets/images/cisco.png';




const topLosers = [
  {
    id: 1,
    symbol: "INTC",
    company: "Intel Corporation",
    price: 28.45,
    change: -2.35,
    logo: intelLogo,
  },
  {
    id: 2,
    symbol: "KO",
    company: "The Coca-Cola Company",
    price: 60.25,
    change: -1.75,
    logo: cocaColaLogo,
  },
  {
    id: 3,
    symbol: "PFE",
    company: "Pfizer Inc.",
    price: 25.30,
    change: -1.32,
    logo: pfizerLogo,
  },
  {
    id: 4,
    symbol: "WMT",
    company: "Walmart Inc.",
    price: 64.85,
    change: -1.15,
    logo: walmartLogo,
  },
  {
    id: 5,
    symbol: "CSCO",
    company: "Cisco Systems, Inc.",
    price: 48.15,
    change: -0.85,
    logo: ciscoLogo,
  },
];

export default topLosers;