import { useState } from "react";
import axios from "axios";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function dataFetch({ url, method = "GET", body }) {
    setLoading(true);
    setError(null);
    method = method.toUpperCase();
    body = method !== "GET" ? body : null;

    try {
      const res = await axios({ url, method, data: body });
      const resData = res?.data?.data || res?.data;
      switch (method) {
        case "POST":
          setData((prev) => (prev ? [resData,...prev] : [resData]));
          break;
        case "PUT":
        case "PATCH":
          setData((prev) => {
            return prev.map((item) =>
              item.id === resData.id ? { ...item, ...resData } : item
            );
          });
          break;
        case "DELETE":
          setData((prev) =>
            prev ? prev.filter((item) => item.id !== resData.id) : []
          );
          break;
        default:
          setData(resData);
      }
    } catch (error) {
      console.error("Error detail: ", error);
      setError(error.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return [data, dataFetch, loading, error];
}
