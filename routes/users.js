"use strict";

const express = require('express');
const router  = express.Router();

const dataHelpers = require('../lib/users-data-helpers');

module.exports = (knex) => {
  let user = {};
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .where({id: 1})
      .then((result) => {
        let templateVars = {
          name: result[0].name,
          email: result[0].email,
          avatar: result[0].avatar_url
        }
        console.log(templateVars);
        res.render("user_page", templateVars);
    });
  });

 
  router.get("/feature", (req, res) => {
    res.render("user_page");
  });

  return router;
}
