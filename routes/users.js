"use strict";

const express = require('express');
const router  = express.Router();

const dataHelpers = require('../lib/users-data-helpers');

module.exports = (knex) => {

  router.get("/", (req, res) => {
    // knex
    //   .select("*")
    //   .from("users")
    //   .then((results) => {
    //     res.json(results);
    // });
    
  });

 
  router.get("/feature", (req, res) => {
    res.render("user_page");
  });

  return router;
}
