const slugify = require("slugify");

const generateUri = (town, venue) => {
  const slugifiedTown = slugify(town, {
    lower: true,
    strict: true,
  });
  const slugifiedVenue = slugify(venue, {
    lower: true,
    strict: true,
  });
  const uri = `/${slugifiedTown}-events/${slugifiedVenue}`;
  return uri;
};

module.exports = generateUri;
