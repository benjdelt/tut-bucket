"use strict";

const express = require('express');
const router  = express.Router();

const dataHelpers = require('../lib/resources-data-helpers');


function areNotEmpty(field) {
  return field.every((e) => String(e).trim());
}


module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/:id/comments", (req, res) => {
    knex
      .select("comments.id", "comments.resources_id", "comments.text", "comments.timestamp", "users.name", "users.avatar_url")
      .from("comments")
      .join('users', {'users.id': 'comments.user_id'})
      .where({'comments.resources_id': req.params.id})
      .then((results) => {
        if (!results.length) {
          res.json({error: "Not found"});
        } else {
          res.json(results);
        }
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

  router.post("/search", (req, res) => {
    knex
        .select('*')
        .from('resources')
        .join("categories", {"resources.category_id":"categories.id"})
        .where(knex.raw(`lower(title) like lower('%${req.body.searchkey}%')`))
        .orWhere(knex.raw(`lower(name) like lower('%${req.body.searchkey}%')`))
        .then((resources) => {
          if(!resources.length) {
            res.json({error: "Not found"});
          } else {
            res.json(resources);
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

  router.get("/:id/likes", (req, res) => {
    knex
       .count('id')
       .from("likes")
       .where({'resources_id': req.params.id})
       .then((results) => {
          if(!results.length) {
            res.json({error: "Not found"});
          } else {
            res.json(results);
          }
       });
  });

  router.get("/:id/ratings", (req, res) => {
    knex
       .avg('value')
       .from("ratings")
       .where({'resources_id': req.params.id})
       .then((results) => {
          if(!results.length) {
            res.json({error: "Not found"});
          } else {
            res.json(Math.floor(results[0].avg));
          }
       });
  });

  router.post("/", (req, res) => {
    const {id, title, imageUrl, description, category, url} = req.body;
    // Form validation Server side
    if(areNotEmpty([title, description, category, url]) && req.cookies["userId"]) {
      // Update db
      knex
      .select("id")
      .from("categories")
      .where({name: category})
      .then((resources) => {
        // Update
        if (id) {
          knex("resources")
            .where({id: id})
            .andWhere({user_id: req.cookies["userId"]})
            .update({url: url, title: title, description: description, image_url: imageUrl, category_id: resources[0].id})
            .returning('*')
            .then((resources) => {
              res.json(resources);

            })
        // Create new resource
        } else {
          knex("resources")
            .insert({url: url, user_id: req.cookies["userId"], title: title, description: description, image_url: imageUrl, category_id: resources[0].id, timestamp: new Date().toISOString()})
            .returning("*")
            .then((resources) => {
              res.json(resources);
            })
        }
      })
    } else {
      res.status(400).json({error: "invalid form submission"});
    }


  });

  // Delete resource
  router.post("/:id", (req, res) => {
    knex("resources")
      .where({id: req.params.id})
      .andWhere({user_id: req.cookies["userId"]})
      .del()
      .then((results) => {
        res.json(results);
      })
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
    .join("likes", {"likes.resources_id": "resources.id"})
    .join("users", {"likes.user_id": "users.id"})
    .where({"users.id": req.params.id})
    .then((resources) => {
      console.log("resources", resources);
      if(!resources.length) {
        res.json({error: "Not found"});
      } else {
        console.log("resources are:",resources);
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
      .returning("*")
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


  // allows db to insert the comment
  router.post("/:id/comments", (req, res) => {
    let comment = req.body.commentContent;
    console.log("comment:", comment);

    knex('comments')
    .returning("*")
    .insert({resources_id: req.params.id, user_id: req.cookies["userId"], text: comment, timestamp: new Date().toISOString()})
    .then((results) => {
      res.json(results);
    });
  });

  return router;
};
