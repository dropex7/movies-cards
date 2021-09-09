import { makeTitleSmaller } from "./makeTitleSmaller";

describe("make title smaller function", () => {
  it("should return smaller title", () => {
    expect(makeTitleSmaller("Nova")).toEqual("Nova");
    expect(
      makeTitleSmaller(
        "WEWORK: OR THE MAKING AND BREAKING OF A $47 BILLION UNICORN"
      )
    ).toEqual("WEWORK: OR THE MAKING AND...");
    expect(makeTitleSmaller("BAD TRIP")).toEqual("BAD TRIP");
    expect(makeTitleSmaller("THE MAP OF TINY PERFECT THINGS")).toEqual(
      "THE MAP OF TINY PERFECT T..."
    );
  });
});
