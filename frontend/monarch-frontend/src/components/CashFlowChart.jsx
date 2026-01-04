import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function CashFlowChart({ transactions = [] }) {
  // group by date
  const dataMap = {};

  transactions.forEach((t) => {
    if (!dataMap[t.date]) {
      dataMap[t.date] = {
        date: t.date,
        income: 0,
        expense: 0,
      };
    }

    if (t.type === "income") {
      dataMap[t.date].income += Number(t.amount);
    } else {
      dataMap[t.date].expense += Number(t.amount);
    }
  });

  const data = Object.values(dataMap).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="bg-white rounded-xl border p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Cash Flow
        </h3>
        <span className="text-sm text-gray-400">
          Income vs Expense
        </span>
      </div>

      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#16a34a"
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#dc2626"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
