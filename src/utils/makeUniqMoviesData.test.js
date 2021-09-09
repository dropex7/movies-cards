import { makeUniqMoviesData } from "./makeUniqMoviesData";
import { moviesMock, uniqMoviesMock } from "mocks/moviesMock";

describe("make uniq movies data function", () => {
  it("should return uniq data", () => {
    expect(makeUniqMoviesData(moviesMock)).toEqual(uniqMoviesMock);
  });
});
