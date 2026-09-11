import { useState } from "react";
import stocks from "../../data//stocks";
import { useNavigate } from "react-router";

const StocksTable = () => {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("All Sectors");
  const [sortBy, setSortBy] = useState("A-Z");

  const filteredStocks = stocks
    .filter((stock) => {
      const searchMatch =
        stock.company
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        stock.symbol
          .toLowerCase()
          .includes(search.toLowerCase());

      const sectorMatch =
        sector === "All Sectors" ||
        stock.sector === sector;

      return searchMatch && sectorMatch;
    })
    .sort((a, b) => {
      if (sortBy === "A-Z") {
        return a.symbol.localeCompare(b.symbol);
      }

      if (sortBy === "Price") {
        return b.price - a.price;
      }

      if (sortBy === "Change") {
        return b.changePercent - a.changePercent;
      }

      return 0;
    });

    const navigate = useNavigate();


  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="px-5 py-3">
          <h2 className="text-xl font-bold">Stocks</h2>
        <p className="text-[16px] text-gray-700">Browse the stocks</p>
        </div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 border-b border-gray-100 p-4">

        <input
          type="text"
          placeholder="Search stocks by name or symbol..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-indigo-500 sm:w-72"
        />

        <select
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          className="h-10 rounded-lg border border-gray-200 px-3 text-sm outline-none"
        >
          <option>All Sectors</option>
          <option>Technology</option>
          <option>Automotive</option>
          <option>Consumer Cyclical</option>
          <option>Consumer Defensive</option>
          <option>Communication Services</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="h-10 rounded-lg border border-gray-200 px-3 text-sm outline-none"
        >
          <option>A-Z</option>
          <option>Price</option>
          <option>Change</option>
        </select>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-225 text-sm">

          <thead>
            <tr className="border-b border-gray-100 text-left text-gray-500">
              <th className="px-5 py-3 font-medium">
                Company
              </th>

              <th className="px-5 py-3 font-medium">
                Symbol
              </th>

              <th className="px-5 py-3 font-medium">
                Price
              </th>

              <th className="px-5 py-3 font-medium">
                Change
              </th>

              <th className="px-5 py-3 font-medium">
                Change %
              </th>

              <th className="px-5 py-3 font-medium">
                Volume
              </th>

              <th className="px-5 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredStocks.map((stock) => {
              const isPositive = stock.change >= 0;

              return (
                <tr
                  key={stock.id}
                  className="border-b border-gray-50 last:border-0"
                >
                  {/* Company */}
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={stock.logo}
                        alt={stock.symbol}
                        className="h-7 w-7 object-contain"
                      />

                      <span className="font-medium text-gray-800">
                        {stock.company}
                      </span>
                    </div>
                  </td>

                  {/* Symbol */}
                  <td className="px-5 py-3 font-medium">
                    {stock.symbol}
                  </td>

                  {/* Price */}
                  <td className="px-5 py-3">
                    ${stock.price.toFixed(2)}
                  </td>

                  {/* Change */}
                  <td
                    className={`px-5 py-3 font-medium ${
                      isPositive
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {stock.change.toFixed(2)}
                  </td>

                  {/* Change % */}
                  <td
                    className={`px-5 py-3 font-medium ${
                      isPositive
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {stock.changePercent.toFixed(2)}%
                  </td>

                  {/* Volume */}
                  <td className="px-5 py-3">
                    {stock.volume}
                  </td>

                  {/* Action */}
                  <td className="px-5 py-3">
                    <button 
                    className="rounded-md border border-indigo-300 px-3 py-1 text-xs font-medium text-indigo-600 hover:bg-indigo-50"
                    onClick={() => navigate(`/stocks/${stock.symbol}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default StocksTable;