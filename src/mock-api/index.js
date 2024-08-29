import data from "../data/data.json";

export const fetchSimulated = (url, object) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
