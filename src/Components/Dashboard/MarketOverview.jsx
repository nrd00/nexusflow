import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";

import marketOverview from "../../data/marketOverview";

const MarketOverview = () => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h2 className="mb-5 text-sm font-semibold text-gray-900">
        Market Overview
      </h2>

      <div className="space-y-5">
        {marketOverview.map((market) => (
          <div key={market.id} className="flex items-center justify-between">
            {/* Information */}
            <div>
              <p className="text-[10px] font-medium text-gray-600">
                {market.name}
              </p>

              <div className="mt-1 flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-900">
                  {market.value.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>

                <span className="text-[10px] font-medium text-emerald-500">
                  ↑ {market.change.toFixed(2)}%
                </span>
              </div>
            </div>

            {/* Sparkline */}
            <div className="h-12 w-24">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={market.data}
                  margin={{
                    top: 3,
                    right: 0,
                    left: 0,
                    bottom: 3,
                  }}
                >
                  <defs>
                    <linearGradient
                      id={`marketGradient-${market.id}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#10B981"
                        stopOpacity={0.18}
                      />

                      <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  {/* IMPORTANT */}
                  <YAxis hide domain={["dataMin - 100", "dataMax + 100"]} />

                  <Area
                    type="linear"
                    dataKey="value"
                    stroke="#10B981"
                    strokeWidth={1.5}
                    fill={`url(#marketGradient-${market.id})`}
                    dot={false}
                    activeDot={false}
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;
