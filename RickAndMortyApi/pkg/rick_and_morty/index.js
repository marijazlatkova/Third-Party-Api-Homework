const config = require("../config");

const CACHE = {};

const getCharacters = async (name) => {
  let now = new Date().getTime() / 1000;

  if (CACHE[name] && now < CACHE[name].timestamp + config.getSection("rick_and_morty").cache_expiery) {
    console.log("Character returned from name!");
    return CACHE[name];
  }

  const URL = `${config.getSection("rick_and_morty").API_URL}/?name=${name}`;

  try {
    //* pravime http provik kon API-to
    const res = await fetch(URL);
    const data = await res.json();

    CACHE[name] = {
      timestamp: new Date().getTime() / 1000,
      data: data
    };
    console.log("CACHE initialized!");

    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getCharacters
};