import { v4 as uuidv4 } from "uuid";
export async function sendOrder(order, id) {
  const url = "https://api.restful-api.dev/objects";
  const orderId = uuidv4();

  // The customer id is just a placeholder as there is no user authentication
  const customerId = id || uuidv4();

  const body = {
    name: "market-order",
    data: {
      orderId,
      customerId,
      order,
    },
  };
  const headers = {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(url, headers);
    if (!res.ok) throw new Error("[API][ERROR]: The order was not sent.");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
