import { ArrowUp, ArrowDown } from "lucide-react";

const TopStocks = ({ title, stocks, type }) => {
  const isGainer = type === "gainer";

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View All
        </button>
      </div>

      {/* Stocks */}
      <div className="space-y-4">
        {stocks.map((stock) => (
          <div
            key={stock.id}
            className="flex items-center gap-3"
          >
            {/* Logo */}
            <img
              src={stock.logo}
              alt={stock.symbol}
              className="h-8 w-8 object-contain"
            />

            {/* Company */}
            <div className="min-w-0 flex-1">
              <h3 className="text-[12px] font-semibold text-gray-900">
                {stock.symbol}
              </h3>

              <p className="truncate text-xs text-gray-500">
                {stock.company}
              </p>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="text-[12px] font-semibold text-gray-900">
                ${stock.price.toFixed(2)}
              </p>
            </div>

            {/* Change */}
            <div
              className={`flex w-20 items-center justify-end gap-1 text-[12px] font-medium ${
                isGainer
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              {isGainer ? (
                <ArrowUp size={14} />
              ) : (
                <ArrowDown size={14} />
              )}

              {Math.abs(stock.change).toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStocks;