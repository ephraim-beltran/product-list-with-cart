const url =
  "https://data-placeholder.netlify.app/data/product-list-with-cart/db.json";
export const fetchList = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error("[API][ERROR]: Fetching product list failed");
    const data = await response.json();
    return data.map((item, index) => ({ ...item, id: index }));
  } catch (error) {
    console.error(error);
  }
};
