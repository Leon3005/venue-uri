const generateUri = require("../index");

describe("Slugified URI", () => {
  it("should return a slugified version of the URI", () => {
    const expected = "/bristol-events/thekla";
    const actual = generateUri("Bristol", "Thekla");
    expect(actual).toEqual(expected);
  });
  it("should return a slugified version of the URI", () => {
    const expected = "/weston-super-mare-events/thee-playhouse";
    const actual = generateUri("Weston-Super-Mare", "The Playhouse");
    expect(actual).toEqual(expected);
  });
  it("should return a slugified version of the URI", () => {
    const expected = "/birmingham-events/o2-academy";
    const actual = generateUri("Birmingham", "O2 Academy");
    expect(actual).toEqual(expected);
  });
});
