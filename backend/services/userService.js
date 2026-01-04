import api from "./api";

export const getCurrentUser = async () => {
  const res = await api.get("/api/me");
  return res.data;
};