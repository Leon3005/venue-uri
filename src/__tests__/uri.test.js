const slugify = require("slugify");

const generateUri = (town, venue) => {
  const slugifiedTown = slugify(town, {
    lower: true,
  });
  const slugifiedVenue = slugify(venue, {
    lower: true,
  });
  const uri = `/${slugifiedTown}-events/${slugifiedVenue}`;
  return uri;
};

describe("Slugified URI", () => {
  it("should return a slugified version of the URI", () => {
    const expected = "/bristol-events/thekla";
    const actual = generateUri("Bristol", "Thekla");
    expect(actual).toEqual(expected);
  });
  it("should return a slugified version of the URI", () => {
    const expected = "/weston-super-mare-events/the-playhouse";
    const actual = generateUri("Weston-Super-Mare", "The Playhouse");
    expect(actual).toEqual(expected);
  });
  it("should return a slugified version of the URI", () => {
    const expected = "/birmingham-events/o2-academy";
    const actual = generateUri("Birmingham", "O2 Academy");
    expect(actual).toEqual(expected);
  });
});
