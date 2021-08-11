const slugify = require("slugify");

const generateUri = (town, venue) => {
  const slugifiedTown = slugify(town);
  const slugifiedVenue = slugify(venue);
  const uri = `/${slugifiedTown}-events/${slugifiedVenue}`;
  return uri;
};

describe("Slugified URI", () => {
  it("should return a slugified version of the URI", () => {
    const expected = "/bristol-events/thekla";
    const actual = generateUri("bristol", "thekla");
    expect(actual).toEqual(expected);
  });
});
