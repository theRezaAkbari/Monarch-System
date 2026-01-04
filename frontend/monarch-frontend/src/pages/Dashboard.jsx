
// import { useEffect, useState } from "react";
// import DashboardLayout from "../layouts/DashboardLayout";
// import SummaryCard from "../components/SummaryCard";
// import GoalsBudgetsSummary from "../components/GoalsBudgetsSummary";
// import CashFlowChart from "../components/CashFlowChart";
// import SpendingPieChart from "../components/SpendingPieChart";
// import DashboardHeader from "../components/DashboardHeader";

// import { getTransactions } from "../services/transactionService";
// import { getCurrentUser } from "../services/userService";

// export default function Dashboard() {
//   const [transactions, setTransactions] = useState([]);
//   const [user, setUser] = useState(null);

//   const [month, setMonth] = useState(
//     new Date().toISOString().slice(0, 7)
//   );

//   const token = localStorage.getItem("token");

//   // 🔐 Load user
//   useEffect(() => {
//     if (!token) return;

//     getCurrentUser(token)
//       .then(setUser)
//       .catch(() => console.log("User not authenticated"));
//   }, [token]);

//   // 💰 Load transactions (REAL month filter)
//   useEffect(() => {
//   getTransactions(month)
//     .then(setTransactions)
//     .catch((err) =>
//       console.error("Failed to load transactions:", err)
//     );
// }, [month]);


//   // 🔢 Calculations
//   const income = transactions
//     .filter((t) => t.type === "income")
//     .reduce((sum, t) => sum + Number(t.amount), 0);

//   const expenses = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((sum, t) => sum + Number(t.amount), 0);

//   const netWorth = income - expenses;



//   return (
//     <DashboardLayout>
//       <DashboardHeader
//         user={user}
//         currentMonth={month}
//         onMonthChange={setMonth}
//       />

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <SummaryCard
//           title="Net Worth"
//           value={`$${netWorth.toLocaleString()}`}
//           subtitle="All time"
//         />

//         <SummaryCard
//           title="Income"
//           value={`$${income.toLocaleString()}`}
//           subtitle="This month"
//           color="text-green-600"
//         />

//         <SummaryCard
//           title="Expenses"
//           value={`$${expenses.toLocaleString()}`}
//           subtitle="This month"
//           color="text-red-500"
//         />

//         <SummaryCard
//           title="Savings Rate"
//           value={
//             income
//               ? `${Math.round(
//                   ((income - expenses) / income) * 100
//                 )}%`
//               : "0%"
//           }
//           subtitle="This month"
//           color="text-blue-600"
//         />
//       </div>

//       {/* Charts */}
//       <section className="mt-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <CashFlowChart transactions={transactions} />
//           <SpendingPieChart transactions={transactions} />
//         </div>
//       </section>

//       {/* Goals & Budgets */}
//       <section className="mt-10">
//         <GoalsBudgetsSummary />
//       </section>
//     </DashboardLayout>
//   );
// }
import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import SummaryCard from "../components/SummaryCard";
import GoalsBudgetsSummary from "../components/GoalsBudgetsSummary";
import CashFlowChart from "../components/CashFlowChart";
import SpendingPieChart from "../components/SpendingPieChart";
import DashboardHeader from "../components/DashboardHeader";

import { getTransactions } from "../services/transactionService";
import { getCurrentUser } from "../services/userService";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState(null);

  // YYYY-MM (مثلاً 2026-01)
  const [month, setMonth] = useState(
    new Date().toISOString().slice(0, 7)
  );

  const token = localStorage.getItem("token");

  // 🔐 Load user
  useEffect(() => {
    if (!token) return;

    getCurrentUser()
      .then(setUser)
      .catch(() =>
        console.log("User not authenticated")
      );
  }, [token]);

  // 💰 Load ALL transactions (NO filter)
  useEffect(() => {
    getTransactions()
      .then(setTransactions)
      .catch((err) =>
        console.error(
          "Failed to load transactions:",
          err
        )
      );
  }, []);

  // 📅 Filter transactions by selected month (FRONTEND ONLY)
  const filteredTransactions = transactions.filter(
    (t) => {
      const txDate = new Date(t.date);
      const [year, monthIndex] =
        month.split("-");

      return (
        txDate.getFullYear() ===
          Number(year) &&
        txDate.getMonth() ===
          Number(monthIndex) - 1
      );
    }
  );

  // 🔢 Calculations (BASED ON FILTERED DATA)
  const income = filteredTransactions
    .filter((t) => t.type === "income")
    .reduce(
      (sum, t) => sum + Number(t.amount),
      0
    );

  const expenses = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce(
      (sum, t) => sum + Number(t.amount),
      0
    );

  const netWorth = income - expenses;

  return (
    <DashboardLayout>
      {/* Header */}
      <DashboardHeader
        user={user}
        currentMonth={month}
        onMonthChange={setMonth}
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Net Worth"
          value={`$${netWorth.toLocaleString()}`}
          subtitle="This month"
        />

        <SummaryCard
          title="Income"
          value={`$${income.toLocaleString()}`}
          subtitle="This month"
          color="text-green-600"
        />

        <SummaryCard
          title="Expenses"
          value={`$${expenses.toLocaleString()}`}
          subtitle="This month"
          color="text-red-500"
        />

        <SummaryCard
          title="Savings Rate"
          value={
            income
              ? `${Math.round(
                  ((income - expenses) /
                    income) *
                    100
                )}%`
              : "0%"
          }
          subtitle="This month"
          color="text-blue-600"
        />
      </div>

      {/* Charts */}
      <section className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CashFlowChart
            transactions={
              filteredTransactions
            }
          />
          <SpendingPieChart
            transactions={
              filteredTransactions
            }
          />
        </div>
      </section>

      {/* Goals & Budgets */}
      <section className="mt-10">
        <GoalsBudgetsSummary />
      </section>
    </DashboardLayout>
  );
}
