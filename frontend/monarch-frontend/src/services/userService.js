// import api from "./api";

// export const getCurrentUser = async () => {
//   const res = await api.get("/api/me");
//   return res.data;
// };
import api from "./api";

export const getCurrentUser = (token) => {
  return api
    .get("/api/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};
