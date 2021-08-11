const slugify = require("slugify");

const genrateUri = (town, venue) => {
  const uri = `/${town}-events/${venue}`;
  return slugify(uri);
};
