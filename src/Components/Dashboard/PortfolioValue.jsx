import PortfolioChart from "./PortfolioChart";

const PortfolioValue = () => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Portfolio Value
        </h2>

        {/* Time buttons */}
        <div className="flex gap-2">
          {["1D", "1W", "1M", "3M", "1Y", "ALL"].map(
            (period) => (
              <button
                key={period}
                className={`rounded-lg px-4 py-2 text-sm font-medium ${
                  period === "1D"
                    ? "border border-indigo-500 text-indigo-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                {period}
              </button>
            )
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4">
        <PortfolioChart />
      </div>
    </div>
  );
};

export default PortfolioValue;