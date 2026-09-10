const DashboardCard = ({ card }) => {
  const Icon = card.icon;
  console.log(card);

  return (
    <div className="bg-[#fefefe] p-5 rounded shadow flex justify-between items-center">
      <div>
        <h3>{card.title}</h3>
        <h2 className="text-2xl font-bold py-2.5">{card.value}</h2>
        {card.change && <span>{card.change}</span>}
      </div>
      <div 
      className={`w-12 h-12 rounded-full flex justify-center items-center`}
      style={{ backgroundColor: card.iconBgColor, color: card.iconColor }}
      >
        <Icon size={24} />
      </div>
    </div>
  );
};

export default DashboardCard;
