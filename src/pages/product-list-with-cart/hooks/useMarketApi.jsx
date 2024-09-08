import { useState, useEffect } from "react";
import { fetchSimulated } from "../../../mock-api";

const url = "https://fakeApiEndpoint.com/v1/api";

export function useMarketApi() {
  const [marketItems, setMarketItems] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  useEffect(() => {
    setStatus("loading");
    async function getMarketItems(url) {
      try {
        const res = await fetchSimulated(url);
        if (!res.ok) throw new Error("Fetching market data failed.");
        const data = await res.json();
        setMarketItems(data);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
        setError(error);
      }
    }
    getMarketItems(url);
  }, []);

  return { marketItems, status, error };
}
