// src/api/coingecko.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const fetchCryptoData = async (
  page = 1,
  perPage = 10,
  currency = "usd"
) => {
  const { data } = await api.get("/coins/markets", {
    params: {
      vs_currency: currency,
      page,
      per_page: perPage,
    },
  });
  return data;
};
