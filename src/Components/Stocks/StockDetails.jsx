import { useParams, Link } from "react-router";
import stocks from "../../data/stocks";
import StockStat from "./Stockstat";
import useWishlistStore from "../../Store/wishliststore";

const StockDetails = () => {
   const { symbol } = useParams();

  const stock = stocks.find(
    (item) => item.symbol === symbol
  );

  const addToWishlist = useWishlistStore(
    (state) => state.addToWishlist
  );

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  const inWishlist = useWishlistStore((state) =>
    state.wishlist.some(
      (item) => item.symbol === stock?.symbol
    )
  );

  if (!stock) {
    return (
      <div className="rounded-xl bg-white p-6">
        <h2 className="text-lg font-semibold">Stock not found</h2>

        <Link to="/stocks" className="mt-3 inline-block text-indigo-600">
          ← Back to Stocks
        </Link>
      </div>
    );
  }

  const isPositive = stock.change >= 0;

  return (
    <div className="space-y-4">
      {/* Back */}
      <Link
        to="/stocks"
        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-500"
      >
        ← Back to Stocks
      </Link>

      {/* Main stock information */}
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
              <img
                src={stock.logo}
                alt={stock.symbol}
                className="h-9 w-9 object-contain"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {stock.company} ({stock.symbol})
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {stock.sector} • {stock.industry}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                if (inWishlist) {
                  removeFromWishlist(stock.symbol);
                } else {
                  addToWishlist(stock);
                }
              }}
              className={`rounded-md border px-4 py-2 text-sm font-medium ${
                inWishlist
                  ? "border-amber-300 bg-amber-50 text-amber-600"
                  : "border-indigo-300 text-indigo-600"
              }`}
            >
              {inWishlist ? "★ In Wishlist" : "☆ Add to Wishlist"}
            </button>

            <button className="rounded-md border border-gray-200 px-4 py-2 text-sm">
              ↗ Share
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">
              ${stock.price.toFixed(2)}
            </span>

            <span
              className={
                isPositive
                  ? "font-semibold text-emerald-500"
                  : "font-semibold text-red-500"
              }
            >
              {isPositive ? "↑" : "↓"} {Math.abs(stock.change).toFixed(2)} (
              {isPositive ? "+" : ""}
              {stock.changePercent.toFixed(2)}%)
            </span>
          </div>

          <p className="mt-2 text-sm font-medium text-emerald-500">
            Market Open
          </p>

          <p className="mt-1 text-xs text-gray-500">May 21, 2024 3:30 PM EST</p>
        </div>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-2 gap-5 border-t border-gray-100 pt-5 sm:grid-cols-3 lg:grid-cols-5">
          <StockStat label="Open" value={`$${stock.open.toFixed(2)}`} />

          <StockStat label="High" value={`$${stock.high.toFixed(2)}`} />

          <StockStat label="Low" value={`$${stock.low.toFixed(2)}`} />

          <StockStat label="Volume" value={stock.volume} />

          <StockStat label="Market Cap" value={stock.marketCap} />
        </div>
      </div>

      {/* About */}
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        <h2 className="text-base font-semibold text-gray-900">
          About {stock.company}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {stock.description}
        </p>
      </div>

      {/* 52 Week */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">52 Week High</p>

          <p className="mt-2 text-lg font-semibold">
            ${stock.week52High.toFixed(2)}
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">52 Week Low</p>

          <p className="mt-2 text-lg font-semibold">
            ${stock.week52Low.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
