"use strict";

const express = require('express');
const router  = express.Router();

const dataHelpers = require('../lib/resources-data-helpers');

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then((results) => {
        res.json(results);
    });
  });

  
  router.get("/categories", (req, res) => {
    knex
    .select("name")
    .from("categories")
    .then((results) => {
      res.json(results);
    });
  });
  
  router.get("/:id", (req, res) => {
     knex
       .select('*')
       .from("resources")
       .where({'id': req.params.id})
       .then((results) => {
          if(!results.length) {
            res.status(404).json({error: "Not found"});
          } else {
            let templateVars = results[0];
            console.log(templateVars);
            res.render("resources_id", templateVars);
          }
       });
  });
  
  router.post("/", (req, res) => {

  });
  router.post("/:id", (req, res) => {

  });
  return router;
}
