//? 1. Naprevete folder vo pkg/rick_and_morty i vnatre index.js so funkcija za povik na api-to
//* 2. Implementirajte kesiranje za /characters od api-to, za kesiranje ni treba timestamp, kesirajte po IME
//? 3. Ke napravite handler za da ja povikuva taa funkcija
//* 4. Ke napravite ruta za pristap vo index.js glavniot fajl

const express = require("express");

const config = require("./pkg/config");
const { getCharacterByName } = require("./handlers/rickandmorty");

const app = express();

app.get("/api/v1/characters/:name", getCharacterByName);

app.listen(config.getSection("rick_and_morty").PORT, (err) => {
  err
  ? console.log(err)
  : console.log(`Server started successfully or port ${config.getSection("rick_and_morty").PORT}`);
});