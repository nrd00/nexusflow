import portfolio from "../../data/portfolio";

const PortfolioComponent = () => {
  // Calculate values
  const totalInvested = portfolio.reduce(
    (total, stock) =>
      total + stock.quantity * stock.avgBuyPrice,
    0
  );

  const currentValue = portfolio.reduce(
    (total, stock) =>
      total + stock.quantity * stock.currentPrice,
    0
  );

  const totalProfitLoss = currentValue - totalInvested;

  const totalProfitPercent =
    (totalProfitLoss / totalInvested) * 100;

  const isPositive = totalProfitLoss >= 0;

  return (
    <div className="space-y-5">

      {/* ================= Header ================= */}
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Portfolio
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your investments
          </p>
        </div>

        {/* Portfolio Summary */}
        <div className="flex gap-10">

          {/* Total Portfolio Value */}
          <div>
            <p className="text-xs font-medium text-gray-500">
              Total Portfolio Value
            </p>

            <p className="mt-1 text-xl font-bold text-gray-900">
              $
              {currentValue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Total Profit / Loss */}
          <div>
            <p className="text-xs font-medium text-gray-500">
              Total Profit / Loss
            </p>

            <div
              className={`mt-1 flex items-center gap-2 text-xl font-bold ${
                isPositive
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              <span>
                {isPositive ? "+" : "-"}$
                {Math.abs(totalProfitLoss).toLocaleString(
                  "en-US",
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
              </span>

              <span className="text-xs">
                {isPositive ? "↑" : "↓"}{" "}
                {Math.abs(totalProfitPercent).toFixed(2)}%
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ================= Portfolio Table ================= */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full min-w-237.5">

            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-100 text-left">

                <th className="px-5 py-3 text-xs font-medium text-gray-500">
                  Stock
                </th>

                <th className="px-5 py-3 text-xs font-medium text-gray-500">
                  Quantity
                </th>

                <th className="px-5 py-3 text-xs font-medium text-gray-500">
                  Avg. Buy Price
                </th>

                <th className="px-5 py-3 text-xs font-medium text-gray-500">
                  Current Price
                </th>

                <th className="px-5 py-3 text-xs font-medium text-gray-500">
                  Current Value
                </th>

                <th className="px-5 py-3 text-xs font-medium text-gray-500">
                  Profit / Loss
                </th>

                <th className="px-5 py-3 text-xs font-medium text-gray-500">
                  P/L %
                </th>

                <th className="px-5 py-3 text-center text-xs font-medium text-gray-500">
                  Actions
                </th>

              </tr>
            </thead>

            {/* Table Body */}
            <tbody>

              {portfolio.map((stock) => {

                const invested =
                  stock.quantity * stock.avgBuyPrice;

                const currentValue =
                  stock.quantity * stock.currentPrice;

                const profitLoss =
                  currentValue - invested;

                const profitPercent =
                  (profitLoss / invested) * 100;

                const positive = profitLoss >= 0;

                return (
                  <tr
                    key={stock.id}
                    className="border-b border-gray-100 transition hover:bg-gray-50"
                  >

                    {/* Stock */}
                    <td className="px-5 py-3">

                      <div className="flex items-center gap-3">

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50">

                          <img
                            src={stock.logo}
                            alt={stock.symbol}
                            className="h-6 w-6 object-contain"
                          />

                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {stock.company}
                          </p>

                          <p className="text-xs text-gray-400">
                            {stock.symbol}
                          </p>
                        </div>

                      </div>

                    </td>

                    {/* Quantity */}
                    <td className="px-5 py-3 text-sm font-medium text-gray-700">
                      {stock.quantity}
                    </td>

                    {/* Average Buy Price */}
                    <td className="px-5 py-3 text-sm text-gray-700">
                      $
                      {stock.avgBuyPrice.toFixed(2)}
                    </td>

                    {/* Current Price */}
                    <td className="px-5 py-3 text-sm text-gray-700">
                      $
                      {stock.currentPrice.toFixed(2)}
                    </td>

                    {/* Current Value */}
                    <td className="px-5 py-3 text-sm font-medium text-gray-700">
                      $
                      {currentValue.toLocaleString(
                        "en-US",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>

                    {/* Profit / Loss */}
                    <td
                      className={`px-5 py-3 text-sm font-semibold ${
                        positive
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {positive ? "+" : "-"}$
                      {Math.abs(profitLoss).toFixed(2)}
                    </td>

                    {/* P/L % */}
                    <td
                      className={`px-5 py-3 text-sm font-semibold ${
                        positive
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {positive ? "+" : "-"}
                      {Math.abs(profitPercent).toFixed(2)}%
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-3 text-center">

                      <button
                        type="button"
                        className="text-xl font-bold text-gray-400 hover:text-gray-700"
                      >
                        ...
                      </button>

                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>
      </div>

      {/* ================= Bottom Summary ================= */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm">

        <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

          {/* Total Invested */}
          <div className="p-5">
            <p className="text-xs font-medium text-gray-500">
              Total Invested
            </p>

            <p className="mt-2 text-lg font-semibold text-gray-900">
              $
              {totalInvested.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Current Value */}
          <div className="p-5">
            <p className="text-xs font-medium text-gray-500">
              Current Value
            </p>

            <p className="mt-2 text-lg font-semibold text-gray-900">
              $
              {currentValue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Total Profit / Loss */}
          <div className="p-5">
            <p className="text-xs font-medium text-gray-500">
              Total Profit / Loss
            </p>

            <p
              className={`mt-2 text-lg font-semibold ${
                isPositive
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              {isPositive ? "+" : "-"}$
              {Math.abs(totalProfitLoss).toLocaleString(
                "en-US",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )}
            </p>
          </div>

          {/* Profit Percentage */}
          <div className="p-5">
            <p className="text-xs font-medium text-gray-500">
              Profit / Loss %
            </p>

            <p
              className={`mt-2 text-lg font-semibold ${
                isPositive
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              {isPositive ? "+" : "-"}
              {Math.abs(totalProfitPercent).toFixed(2)}%
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PortfolioComponent;