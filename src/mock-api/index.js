import data from "../data/data.json";

export const fetchSimulated = () => {
  return Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve(
        data.map((item, index) => ({ ...item, id: index + 100 })),
      ),
  });
};
