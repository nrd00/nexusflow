import recentTransactions from "../../data/recentTransactions";

const RecentTransactions = () => {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-sm my-5">
      <div className="px-5 py-3 flex justify-between">
        <h2 className="text-lg font-bold">Recent Transactions</h2>
      <button className="text-blue-800 ">View All</button>
      </div>
  <table className="w-full min-w-225 text-sm">
    <thead>
      <tr className="border-b border-gray-100 text-left text-gray-600">
        <th className="px-5 py-3 font-medium">Date</th>
        <th className="px-5 py-3 font-medium">Type</th>
        <th className="px-5 py-3 font-medium">Symbol</th>
        <th className="px-5 py-3 font-medium">Company</th>
        <th className="px-5 py-3 font-medium">Quantity</th>
        <th className="px-5 py-3 font-medium">Price</th>
        <th className="px-5 py-3 font-medium">Total</th>
        <th className="px-5 py-3 font-medium">Status</th>
      </tr>
    </thead>

    <tbody>
      {recentTransactions.map((transaction) => (
        <tr
          key={transaction.id}
          className="border-b border-gray-50 last:border-0"
        >
          <td className="px-5 py-3">
            {transaction.date}
            <span className="ml-2 text-gray-500">
              {transaction.time}
            </span>
          </td>

          <td className="px-5 py-3">
            <span
              className={
                transaction.type === "BUY"
                  ? "rounded bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600"
                  : "rounded bg-red-50 px-2 py-1 text-xs font-medium text-red-600"
              }
            >
              {transaction.type}
            </span>
          </td>

          <td className="px-5 py-3 font-medium">
            {transaction.symbol}
          </td>

          <td className="px-5 py-3">
            {transaction.company}
          </td>

          <td className="px-5 py-3">
            {transaction.quantity}
          </td>

          <td className="px-5 py-3">
            ${transaction.price.toFixed(2)}
          </td>

          <td className="px-5 py-3">
            ${transaction.total.toFixed(2)}
          </td>

          <td className="px-5 py-3 text-emerald-500">
            {transaction.status}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default RecentTransactions;