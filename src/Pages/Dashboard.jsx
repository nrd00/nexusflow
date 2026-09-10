import DashboardCards from "../Components/Dashboard/DashboardCards";
import Greeting from "../Components/Dashboard/Greeting";
import MarketOverview from "../Components/Dashboard/MarketOverview";
import PortfolioValue from "../Components/Dashboard/PortfolioValue";
import TopStocks from "../Components/Dashboard/TopStocks";
import topGainers from "../data/topGainers";
import topLosers from '../data/topLosers';

const Dashboard = () => {
  return (
    <>
      <Greeting />
      <DashboardCards />
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div class="md:col-span-7 bg-[#FEFEFE] p-6 rounded-lg">
          <PortfolioValue />
        </div>

        <div class="md:col-span-5 bg-[#FEFEFE] p-6 rounded-lg">
          <TopStocks title="Top Gainers" stocks={topGainers} type="gainer" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div class="md:col-span-5 bg-[#FEFEFE] p-6 rounded-lg">
          <MarketOverview />
        </div>

        <div class="md:col-span-7 bg-[#FEFEFE] p-6 rounded-lg">
          <TopStocks title="Top Losers" stocks={topLosers} type="losers" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
