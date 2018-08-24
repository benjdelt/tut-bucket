# TUT BUCKET

# DATA
 - users
 - URLs
   - title
   - descriptions
   - pictures
   - topic
 - comments
 - likes
 - ratings
 
## TOPICS
  - Cooking
  - Math
  - Science
  - Programming
  - Sports
  - Tech
  - Photography
  - Drawing
  - Music
  - History
  - Business
  - Finance
  - Gaming
  - Makeup
  - Fashion
  - Health
  - DIY
  - Graphic Design
  - Languages
  - Psychology
## Ratings
A - 100
B - 85
C+ - 75
C - 70
C- - 60
D - 45
F - 0


# UNIVERSAL VALUES
- Feel Good:
  - people like your content and share it
- Look Good:
  - People can see your cool interests
- Saves Time:
  - you don't need to scour the web to find thing you like

# USER STORIES
  - As a user, I should be able to save an external URL along with a title and description, because I want others to see how cool I am and I found it useful
  - As a user, I should be able to search for already-saved resources created by any user, because I'm looking for new resources for what I'm interested in
  - As a user, I should be able to categorize any resource under a topic, because it makes finding those resources easier
  - As a user, I should be able to comment on any resource, because I want to voice my opinion
  - As a user, I should be able to rate any resource, because I want to be a part of deciding whether something is actually useful
  - As a user, I should be able to like any resource, because I want to keep track of what I like or found interesting
  - As a user, I should be able to view all my own and all liked resources on one page ("My resources"), because it makes looking for resources easier A-HA
  - As a user, I should be able to register, log in, log out and update my profile, because it helps me track my resources, and I don't want other people to change my resources

# USER SCENARIOS
  - Given that I've found something interesting online, when I fill out a form and submit it, then it will save the resource on my account and on my page
  - Given that I'm curious about an interest, when I enter a search in the search bar, then results are displayed or categories are provided (optional data-list dropdown)
  - Given that I am creating or updating a URL, when I pick a category from the drop down list and click save, then my URL will be associated with that category
  - Given that I have something to say, when I fill out the comment form and submit it, then my comment will be displayed under that resource
  - Given that I am viewing a resource, when I choose a letter grade for that resource, then the average of all ratings are displayed as a letter grade next to that resource
  - Given that I like what I'm viewing, when I click the like button, then the number of likes on that resource will be incremented and the button will change to show that I've clicked it
  - Given that I visit my own page, when my page is displayed, then both categories (my resources, and all liked resources) will be displayed
  - Given that I want to sign up for this app, when I click the register button, then I'm taken to a form to fill out and submit, then I will have an account
  - Given that I have an account and want to log in, when I click the login button and provide my credentials, then I am redirected to my page

# ROUTES
  ## USERS
    - GET
      - login: /login/:id
      - Register user: /users
      - Home: /users/:id

 ## RESOURCES
    RESOURCES
      - GET
          - View the single resource: /resources/:id
          - Search for already-saved resources: /resources
        - POST
          - Save external URL: /resources
        - PUT
          - Update the single resource: /resources/:id
        - DELETE
          - Delete resource: resources/:id
      - COMMENTS
        - GET
          - Get a comment to edit: /resources/:id/comments/:id
        - POST
          - Comment on resource: /resources/:id/comments
        - PUT
          - Update/edit comments: resources/:id/comments/:id
        - DELETE
          - Delete comment: resources/:id/comment/:id
      - LIKES
        - POST
          - Like a resource: /resources/:id/likes
        - DELETE
          - Delete like: resources/:id/likes/:id
      - RATINGS
        - POST
          - Rate a resource: /resources/:id/rating
        - PUT
          - Update/edit rating: resources/:id/rating/:id


# TECH
  - Express
  - node.js
  - jQuery
  - Bootstrap
  - Knex
  - postgres
  - git

#GIT procedure
  - create branch
  - code on branch
  - close the file
  - add, commit, push the branch (keep track of branch) (git push origin <branch-name>)
  - check out master
  - pull origin master
  - test, check conflict if one? SOS on slack
  - if fixed, merge branch to master
  - push




