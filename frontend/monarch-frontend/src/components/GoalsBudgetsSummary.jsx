export default function GoalsBudgetsSummary() {
  const goals = [
    { name: "Emergency Fund", current: 3200, target: 5000 },
    { name: "Vacation", current: 1200, target: 3000 },
  ];

  const budgets = [
    { name: "Food", spent: 420, limit: 600 },
    { name: "Transport", spent: 180, limit: 300 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      {/* Goals */}
      <div className="bg-white rounded-xl border p-6">
        <h3 className="text-lg font-semibold mb-4">Goals</h3>

        {goals.map((g) => {
          const percent = Math.min(
            Math.round((g.current / g.target) * 100),
            100
          );

          return (
            <div key={g.name} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{g.name}</span>
                <span>{percent}%</span>
              </div>

              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-green-500 rounded"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Budgets */}
      <div className="bg-white rounded-xl border p-6">
        <h3 className="text-lg font-semibold mb-4">Budgets</h3>

        {budgets.map((b) => {
          const percent = Math.min(
            Math.round((b.spent / b.limit) * 100),
            100
          );

          const color =
            percent < 70
              ? "bg-blue-500"
              : percent < 90
              ? "bg-yellow-400"
              : "bg-red-500";

          return (
            <div key={b.name} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{b.name}</span>
                <span>
                  ${b.spent} / ${b.limit}
                </span>
              </div>

              <div className="h-2 bg-gray-200 rounded">
                <div
                  className={`h-2 ${color} rounded`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
