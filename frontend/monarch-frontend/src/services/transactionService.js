
// import api from "./api";

// /**
//  * Get transactions
//  * @param {string} month - format: YYYY-MM (optional)
//  */
// export const getTransactions = async (month) => {
//   const params = {};

//   if (month) {
//     params.month = month; // backend filter
//   }

//   const res = await api.get("/api/transactions", {
//     params,
//   });

//   return res.data;
// };

// /**
//  * Create new transaction
//  * @param {Object} data
//  */
// export const createTransaction = async (data) => {
//   const res = await api.post("/api/transactions", {
//     amount: Number(data.amount),
//     type: data.type,
//     category: data.category,
//     date: data.date,
//   });

//   return res.data;
// };
import api from "./api";

/**
 * Get ALL transactions (NO filter)
 */
export const getTransactions = async () => {
  const res = await api.get("/api/transactions");
  return res.data;
};

/**
 * Create transaction
 */
export const createTransaction = async (data) => {
  const res = await api.post("/api/transactions", {
    amount: Number(data.amount),
    type: data.type,
    category: data.category,
    date: data.date,
  });

  return res.data;
};
