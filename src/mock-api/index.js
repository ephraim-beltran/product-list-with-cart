import data from "../data/data.json";

export const fetchSimulated = (url, object) => {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
};
