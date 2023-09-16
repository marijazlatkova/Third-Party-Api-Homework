const { getCharacters } = require("../pkg/rick_and_morty");

const getCharacterByName = async (req, res) => {
  try {
    const { name } = req.params;
    const characterName = await getCharacters(name);
    return res.status(200).send(characterName);
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getCharacterByName
};