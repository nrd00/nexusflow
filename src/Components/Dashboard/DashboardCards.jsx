import cardData  from '../../data/dashboardCards';
import DashboardCard from './DashboardCard';

const DashboardCards = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 py-5">
      {cardData.map((card) => (
        <DashboardCard key={card.id} card={card} />
      ))}
    </div>
    );
};

export default DashboardCards;