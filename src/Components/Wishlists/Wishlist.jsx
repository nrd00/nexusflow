import useWishlistStore from "../../Store/wishliststore";
import { useState } from "react";

const Wishlist = () => {
  const [search, setSearch] = useState("");

  const wishlist = useWishlistStore((state) => state.wishlist);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  // Search wishlist
  const filteredStocks =
    wishlist?.filter((stock) => {
      const searchText = search.toLowerCase();

      return (
        stock.company.toLowerCase().includes(searchText) ||
        stock.symbol.toLowerCase().includes(searchText)
      );
    }) || [];

  return (
    <div className="space-y-5">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Wishlist
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Track your favorite stocks
        </p>
      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

        {/* Search */}
        <div className="border-b border-gray-100 p-4">
          <div className="relative w-full sm:w-80">

            {/* Search Icon */}
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search wishlist..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />

          </div>
        </div>

        {/* Wishlist Table */}
        {filteredStocks.length > 0 ? (
          <div className="overflow-x-auto">

            <table className="w-full min-w-200">

              {/* Table Header */}
              <thead>
                <tr className="border-b border-gray-100 text-left">

                  <th className="px-5 py-3 text-xs font-medium text-gray-500">
                    Company
                  </th>

                  <th className="px-5 py-3 text-xs font-medium text-gray-500">
                    Symbol
                  </th>

                  <th className="px-5 py-3 text-xs font-medium text-gray-500">
                    Price
                  </th>

                  <th className="px-5 py-3 text-xs font-medium text-gray-500">
                    Change
                  </th>

                  <th className="px-5 py-3 text-xs font-medium text-gray-500">
                    Change %
                  </th>

                  <th className="px-5 py-3 text-center text-xs font-medium text-gray-500">
                    Actions
                  </th>

                </tr>
              </thead>

              {/* Table Body */}
              <tbody>

                {filteredStocks.map((stock) => {

                  const isPositive = stock.change >= 0;

                  return (
                    <tr
                      key={stock.symbol}
                      className="border-b border-gray-100 transition hover:bg-gray-50"
                    >

                      {/* Company */}
                      <td className="px-5 py-3">

                        <div className="flex items-center gap-3">

                          {/* Logo */}
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50">

                            <img
                              src={stock.logo}
                              alt={stock.symbol}
                              className="h-6 w-6 object-contain"
                            />

                          </div>

                          {/* Company Name */}
                          <span className="text-sm font-medium text-gray-800">
                            {stock.company}
                          </span>

                        </div>

                      </td>

                      {/* Symbol */}
                      <td className="px-5 py-3 text-sm font-medium text-gray-600">
                        {stock.symbol}
                      </td>

                      {/* Price */}
                      <td className="px-5 py-3 text-sm font-medium text-gray-700">
                        ${stock.price.toFixed(2)}
                      </td>

                      {/* Change */}
                      <td
                        className={`px-5 py-3 text-sm font-semibold ${
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
                        className={`px-5 py-3 text-sm font-semibold ${
                          isPositive
                            ? "text-emerald-500"
                            : "text-red-500"
                        }`}
                      >
                        {isPositive ? "+" : ""}
                        {stock.changePercent.toFixed(2)}%
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-3">

                        <div className="flex items-center justify-center gap-5">

                          {/* Star */}
                          <button
                            type="button"
                            className="text-lg text-amber-500 transition hover:scale-110"
                            title="In wishlist"
                          >
                            ★
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() =>
                              removeFromWishlist(stock.symbol)
                            }
                            className="text-gray-400 transition hover:text-red-500"
                            title="Remove from wishlist"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7m3 4v6m4-6v6"
                              />
                            </svg>
                          </button>

                        </div>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>
        ) : (

          /* Empty Wishlist */
          <div className="flex min-h-80 flex-col items-center justify-center px-5 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
              <span className="text-3xl text-indigo-400">
                ☆
              </span>
            </div>

            <h2 className="mt-4 text-base font-semibold text-gray-900">
              No wishlist found
            </h2>

            <p className="mt-1 max-w-sm text-sm text-gray-500">
              Add stocks to your wishlist to keep track of your favorites.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

export default Wishlist;
