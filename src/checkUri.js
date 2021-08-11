const axios = require("axios");
const generateUri = require("./index");

const args = process.argv.slice(2);

const generatedUri = generateUri(...args);

const fetchEvents = async () => {
  const apiUrl = `https://www.ents24.com${generatedUri}`;

  const status = await axios.get(apiUrl);

  console.log(status.status);

  return status.status;
};

fetchEvents();
