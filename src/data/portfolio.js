import nvdaLogo from "../assets/images/nvda.png";
import teslaLogo from "../assets/images/tesla.png";
import metaLogo from "../assets/images/meta.png";
import amazonLogo from "../assets/images/amazon.png";
import appleLogo from '../assets/images/apple.png';
import intelLogo from "../assets/images/intel.png";
import microsoftLogo from "../assets/images/microsoft.png";
import cocaColaLogo from "../assets/images/coca-cola.png";


const portfolio = [
  {
    id: 1,
    symbol: "AAPL",
    company: "Apple Inc.",
    logo: appleLogo,
    quantity: 10,
    avgBuyPrice: 175,
    currentPrice: 186.25,
  },
  {
    id: 2,
    symbol: "MSFT",
    company: "Microsoft Corporation",
    logo: microsoftLogo,
    quantity: 5,
    avgBuyPrice: 390,
    currentPrice: 412.5,
  },
  {
    id: 3,
    symbol: "AMZN",
    company: "Amazon.com, Inc.",
    logo: amazonLogo,
    quantity: 3,
    avgBuyPrice: 175,
    currentPrice: 187.32,
  },
  {
    id: 4,
    symbol: "TSLA",
    company: "Tesla, Inc.",
    logo: teslaLogo,
    quantity: 4,
    avgBuyPrice: 220,
    currentPrice: 248.75,
  },
  {
    id: 5,
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    logo: nvdaLogo,
    quantity: 8,
    avgBuyPrice: 110,
    currentPrice: 128.35,
  },
  {
    id: 6,
    symbol: "META",
    company: "Meta Platforms, Inc.",
    logo: metaLogo,
    quantity: 2,
    avgBuyPrice: 480,
    currentPrice: 509.78,
  },
  {
    id: 7,
    symbol: "KO",
    company: "The Coca-Cola Company",
    logo: cocaColaLogo,
    quantity: 15,
    avgBuyPrice: 58,
    currentPrice: 60.25,
  },
  {
    id: 8,
    symbol: "INTC",
    company: "Intel Corporation",
    logo: intelLogo,
    quantity: 30,
    avgBuyPrice: 30,
    currentPrice: 28.45,
  },
];

export default portfolio;