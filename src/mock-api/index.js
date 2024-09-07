import data from "../data/data.json";

export const fetchSimulated = (url, object) => {
  return Promise.resolve({
    ok: object.response != 200 ? false : true,
    json: () =>
      Promise.resolve(
        data.map((item, index) => ({ ...item, id: index + 100 })),
      ),
  });
};
