import { v4 as uuidv4 } from "uuid";
export async function sendOrder({ orderList, total }, id) {
  const url = "https://api.restful-api.dev/objects";
  const orderId = uuidv4();

  // The customer id is just a placeholder as there is no user authentication
  const customerId = id || uuidv4();

  const body = {
    name: "market-order",
    data: {
      orderId,
      customerId,
      order: {
        orderList,
        total,
      },
    },
  };
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  };
  const res = await fetch(url, options);
  if (!res.ok) {
    const error = "[API][ERROR]: There was an error in sending the order.";
    console.error(error);
    throw new Error(error);
  } else {
    console.log("[API][SUCCESS]: The order was successfully sent.");
    const data = await res.json();
    return data;
  }
}
