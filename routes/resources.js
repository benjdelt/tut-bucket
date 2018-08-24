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

  router.get("/users/:id", (req, res) => {
    knex
    .select('*')
    .from("resources")
    .where({'user_id': req.params.id})
    .then((resources) => {
      if(!resources.length) {
        res.status(404).json({error: "Not found"});
      } else {
        res.json(resources);
      }
    });
  });

  router.get("/liked/:id", (req, res) => {
    knex
    .select('*')
    .from("resources")
    .join("likes", {"likes.resources_id": "resources.id"})
    .join("users", {"likes.user_id": "users.id"})
    .where({"users.id": req.params.id})
    .then((resources) => {
      if(!resources.length) {
        res.status(404).json({error: "Not found"});
      } else {
        res.json(resources);
      }
    });
  });

  return router;
}
