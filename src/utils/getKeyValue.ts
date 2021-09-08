import { ratingI } from "types/movieDataI";

export const getKeyValue =
  <U extends keyof T, T extends object>(key: U) =>
  (obj: T) => {
    if (key === "Poster" || key === "Response") {
      return null;
    }
    return obj[key];
  };

// export const makeRatingsArray = (array: any): ratingI[] => {
//   // array.map(rating =>{

//   // })
//   // return [{ Source: "movie", Value: "20" }];
// };
