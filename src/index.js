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

module.exports = generateUri;
