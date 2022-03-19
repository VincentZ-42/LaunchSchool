# To-Do List Manager

### Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Learning Objectives](#learning-objectives)
- [References](#references)

## Description
To-Do List Manager is an application that helps users track their custom built To-Do lists. Users can create or edit a To-Do list as well as tasks within each list. This application is run locally and is built with the express.js framework with code written in JavaScript. 

See below for a snapshot of all the features offerred by the application:

| Feature | Picture |
| :------: | :----------: |
| Homepage | [homepage](./public/images/homepage.png) |
| Creating a new To-Do List | [new-todolist](./public/images/new-todolist.png) |

## Usage
- Application is run on your local machine or localhost in port 3000
- Must have node pre-installed in order to run 

### Steps to run application
1. Clone repositiory into desired directory location
2. Navigate to directory in the terminal
3. In the terminal:
	- Install packages with `npm install`
	- Create server with `npm start`
4. Open any browser and type in `http://localhost:3000`
5. Use the application by viewing your creating, viewing or editing your to-do lists

## Learning Objectives
- Creating a web application using Express.js framework
	- Understanding the use of middleware and how Express can access and manipulate request and response objects 
- Understanding and creating dynamic content using Pug, a view templating engine in Express.js
	- Creating view templates, layouts, and using view helpers (JavaScript functions invoked within templates)
- Learning how to use specific modules:
	- `express-validator` for validation and sanitization for user-supplied data
	- `express-session`& `connect-loki` to create a NoSQL database as the session data store to allow presistent sessions for our application (data from user is saved on user's local machine as a file `session-store.db`)
	- `express-flash` for handling flash messages

## Future Improvements
- Create unique usernames and passwords for each user and save data accordingly
- Run server on Heroku so application is accessible by public
- Add more functionality such as due dates and alerts

## Refernces
- Project created for amademic learning based on curriculum by Launch School