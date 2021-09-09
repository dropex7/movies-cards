import movieReducer from "./reducer";
import * as actions from "./actions";
import { mockMovie } from "mocks/movieMock";

describe("movie reducer test", () => {
  it("should return the initialState", () => {
    expect(movieReducer(undefined, {})).toEqual({
      movie: null,
      isLoading: false,
      error: null,
    });
  });
  it("should return isLoading true", () => {
    const startLoading = {
      type: actions.getMovieLoading,
    };
    expect(movieReducer({}, startLoading)).toEqual({});
  });
  it("should load data in store", () => {
    const getMovieData = {
      type: actions.getMovieSuccess,
      payload: mockMovie,
    };
    expect(movieReducer({}, getMovieData)).toEqual({ mockMovie });
  });
});
