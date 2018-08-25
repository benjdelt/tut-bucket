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
    .select("*")
    .from("categories")
    .then((results) => {
      res.json(results);
    });
  });

  router.get("/categories/:id", (req, res) => {
    knex
        .select("*")
        .from("categories")
        .join("resources", {"resources.category_id":"categories.id"})
        .where({'categories.id': req.params.id})
        .then((results) => {
            if(!results.length) {
              res.status(404).json({error: "Not found"});
            } else {
              res.json(results);
            }
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
            res.json(results);
          }
       });
  });
  
  router.post("/", (req, res) => {
    const {title, imageUrl, description, category, url} = req.body;
    knex
      .select("id")
      .from("categories")
      .where({name: category})
      .then((resources) => {
        knex("resources")
        .insert({url: url, title: title, description: description, image_url: imageUrl, category_id: resources[0].id})
        .returning("*")
        .then((resources) => {
          res.json(resources);
        })
      })

    
  });
  router.post("/:id", (req, res) => {

  });

  router.get("/users/:id", (req, res) => {
    knex
    .select('*')
    .from("resources")
    .where({'user_id': req.params.id})
    .then((resources) => {
      if(!resources.length) {
        res.json({error: "Not found"});
      } else {
        res.json(resources);
      }
    });
  });

  router.get("/liked/:id", (req, res) => {
    knex
    .select('*')
    .from("resources")
    .join("likes", {"likes.resources_id": resources.id})
    .join("users", {"likes.user_id": users.id})
    .where({"users.id": req.params.id})
    .then((resources) => {
      if(!resources.length) {
        res.json({error: "Not found"});
      } else {
        res.json(resources);
      }
    });
  });

  // allows db to be updated with like if it doesn't already exist,
  // and deletes the like if the user has already liked the resource
  router.post("/:id/likes", (req, res) => {
    let duplicate = false;

    knex
      .count('id')
      .from('likes')
      .where({resources_id: req.params.id})
      .andWhere({user_id: req.cookies["userId"]})
      .then((result) => {
        if(result[0].count > 0) {
          duplicate = true;
        }
      })
      .then(() => {
        knex
        .select('*')
        .from('likes')
        .where({resources_id: req.params.id})
        .andWhere({user_id: req.cookies["userId"]})
        .then((result)=> {
          if(!duplicate) {
            knex('likes')
            .returning("*")
            .insert({resources_id: req.params.id, user_id: req.cookies["userId"]})
            .then((results) => {
              if(!results.length) {
                res.status(404).json({error: "Not found"});
              } else {
                res.json(results);
              }
            });
          } else {
            knex('likes')
            .where('id', result[0].id)
            .del()
            .then((result) => {
              res.json(result);
            })
          }
        });
      })
  });

  function changeLetterToValue(letter) {
    switch(letter) {
      case 'A':
        return 100;
      case 'B':
        return 85;
      case 'C+':
        return 75;
      case 'C':
        return 70;
      case 'C-':
        return 60;
      case 'D':
        return 45;
      case 'F':
        return 0;
      default:
        return 0;
    }
  }

  // allows db to be updated with inserting the rating if it doesn't already exist,
  // and updates the rating if the user has already rated the resource
  router.post("/:id/ratings/:value", (req, res) => {
    let duplicate = false;
    let value = changeLetterToValue(req.params.value);
    console.log('value:', value);

    knex
      .count('id')
      .from('ratings')
      .where({resources_id: req.params.id})
      .andWhere({user_id: req.cookies["userId"]})
      .then((result) => {
        if(result[0].count > 0) {
          duplicate = true;
        }
      })
      .then(() => {
        knex
        .select('*')
        .from('ratings')
        .where({resources_id: req.params.id})
        .andWhere({user_id: req.cookies["userId"]})
        .then((result)=> {
          if(!duplicate) {
            knex('ratings')
            .returning("*")
            .insert({resources_id: req.params.id, user_id: req.cookies["userId"], value})
            .then((results) => {
              if(!results.length) {
                res.status(404).json({error: "Not found"});
              } else {
                res.json(results);
              }
            });
          } else {
            knex('ratings')
            .where('id', result[0].id)
            .update({value})
            .then((result) => {
              res.json(result);
            })
          }
        });
      })
  });

  return router;
};
