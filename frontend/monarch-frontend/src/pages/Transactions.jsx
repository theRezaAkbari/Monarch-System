import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import TransactionTable from "../components/TransactionTable";
import AddTransactionForm from "../components/AddTransactionForm";
import { getTransactions } from "../services/transactionService";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const data = await getTransactions(token);
      setTransactions(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Transactions
        </h1>
        <p className="text-gray-500 mt-1">
          Track and manage all your income and expenses
        </p>
      </div>

      {/* Add Transaction */}
      <AddTransactionForm onAdd={fetchTransactions} />

      {/* Table */}
      {loading ? (
        <p className="text-gray-500 mt-6">Loading...</p>
      ) : (
        <TransactionTable transactions={transactions} />
      )}
    </DashboardLayout>
  );
}
