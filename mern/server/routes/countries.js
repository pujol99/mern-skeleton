const express = require("express");

const countryRoutes = express.Router();

var countries = require("./countries.json");

countryRoutes.get("/countries", (req, res) => {
    res.send(countries);
});

countryRoutes.get("/randomCountry", (req, res) => {
    res.send(countries[Math.floor(Math.random() * countries.length)]);
});

module.exports = countryRoutes;
