export const getKeyValue =
  <U extends keyof T, T extends object>(key: U) =>
  (obj: T) => {
    if (key === "Poster" || key === "Response") {
      return "";
    }
    return obj[key];
  };
