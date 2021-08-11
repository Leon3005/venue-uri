const slugify = require("slugify");

const generateUri = (town, venue) => {
  const slugifiedTown = slugify(town);
  const slugifiedVenue = slugify(venue);
  const uri = `/${slugifiedTown}-events/${slugifiedVenue}`;
  return uri;
};
