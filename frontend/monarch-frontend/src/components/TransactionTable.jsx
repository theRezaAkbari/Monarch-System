// export default function TransactionTable({ transactions }) {
//   if (!transactions.length) {
//     return (
//       <p className="mt-6 text-gray-500">
//         No transactions yet
//       </p>
//     );
//   }

//   return (
//     <div className="mt-6 bg-white rounded-xl border">
//       <table className="w-full text-sm">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="p-3 text-left">Date</th>
//             <th className="p-3 text-left">Category</th>
//             <th className="p-3 text-left">Type</th>
//             <th className="p-3 text-right">Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((t) => (
//             <tr key={t.id} className="border-t">
//               <td className="p-3">{t.date}</td>
//               <td className="p-3">{t.category}</td>
//               <td className="p-3 capitalize">{t.type}</td>
//               <td
//                 className={`p-3 text-right font-medium ${
//                   t.type === "income"
//                     ? "text-green-600"
//                     : "text-red-500"
//                 }`}
//               >
//                 ${t.amount}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
export default function TransactionTable({ transactions = [] }) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="mt-6 bg-white rounded-xl border p-6 text-center text-gray-500">
        No transactions for this month
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white rounded-xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr
              key={t.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-3">
                {new Date(t.date).toLocaleDateString()}
              </td>

              <td className="p-3">{t.category}</td>

              <td className="p-3 capitalize">
                {t.type}
              </td>

              <td
                className={`p-3 text-right font-medium ${
                  t.type === "income"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                ${Number(t.amount).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
