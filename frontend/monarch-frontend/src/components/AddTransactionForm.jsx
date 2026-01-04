// import { useState } from "react";
// import { createTransaction } from "../services/transactionService";

// export default function AddTransactionForm({ onAdd }) {
//   const [amount, setAmount] = useState("");
//   const [type, setType] = useState("expense");
//   const [category, setCategory] = useState("");
//   const [date, setDate] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await createTransaction({
//         amount: Number(amount),
//         type,
//         category,
//         date,
//       });

//       setAmount("");
//       setCategory("");
//       setDate("");

//       onAdd && onAdd();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add transaction");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border mt-6 space-y-4">
//       <h2 className="text-xl font-semibold">Add Transaction</h2>

//       <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
//       <select value={type} onChange={e => setType(e.target.value)}>
//         <option value="expense">Expense</option>
//         <option value="income">Income</option>
//       </select>
//       <input value={category} onChange={e => setCategory(e.target.value)} required />
//       <input type="date" value={date} onChange={e => setDate(e.target.value)} required />

//       <button>Add</button>
//     </form>
//   );
// }
import { useState } from "react";
import { createTransaction } from "../services/transactionService";

export default function AddTransactionForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !category || !date) return;

    try {
      setLoading(true);

      await createTransaction({
        amount: Number(amount),
        type,
        category,
        date,
      });

      setAmount("");
      setCategory("");
      setDate(
        new Date().toISOString().slice(0, 10)
      );

      onAdd && onAdd();
    } catch (err) {
      console.error(err);
      alert("Failed to add transaction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border p-6 mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Add Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Amount */}
        <div>
          <label className="block text-sm text-gray-500 mb-1">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              $
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              className="w-full pl-7 pr-4 py-3 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="0.00"
              required
            />
          </div>
        </div>

        {/* Type Toggle */}
        <div>
          <label className="block text-sm text-gray-500 mb-2">
            Type
          </label>
          <div className="flex rounded-xl border overflow-hidden">
            <button
              type="button"
              onClick={() =>
                setType("expense")
              }
              className={`flex-1 py-2 text-sm font-medium ${
                type === "expense"
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              Expense
            </button>

            <button
              type="button"
              onClick={() =>
                setType("income")
              }
              className={`flex-1 py-2 text-sm font-medium ${
                type === "income"
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              Income
            </button>
          </div>
        </div>

        {/* Category + Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="e.g. Food, Rent, Salary"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-medium transition ${
            loading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {loading
            ? "Adding..."
            : "Add Transaction"}
        </button>
      </form>
    </div>
  );
}
