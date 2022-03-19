# My Contacts Manager

### Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Learning Objectives](#learning-objectives)
- [References](#references)

## Description
- Contacts Manager is a web application that keeps track of your contacts and their phone number sorted in alphabetical order according to their last name, then first. Users can input contact information and have all their contacts saved into their local machine for future use. This application was built with express and node, using many different modules to handle rendering, data persistence, and flash messages.  

| Homepage | Add a New Contact |
| :------: | :----------: |
| ![Homepage](https://github.com/VincentZ-42/LaunchSchool/blob/main/js175/contacts/public/images/contacts.jpg) | ![new-contact](https://github.com/VincentZ-42/LaunchSchool/blob/main/js175/contacts/public/images/contact-new.jpg) |

## Usage
1. Clone repositiory into desired directory location
2. Navigate to directory in the terminal
3. In the terminal:
	- Install packages with `npm install`
	- Create server with `npm start`
4. Open any browser and type in `http://localhost:3000`
5. Use the application by viewing your list of contacts or creating new contacts

## Learning Objectives
- Using Express.js framework to create a Node.js-based web application
	- Handling HTTP requests through method routing such as `app.get` and `app.post`
	- Understanding the use of middleware and how Express can access and manipulate request and response objects
- Understanding and creating views using Pug, a view templating engine in Express.js
	- Creating view templates, layouts, and using view helpers (JavaScript functions invoked within templates)
- Modules:
	- `express-validator` for validation and sanitization for user-supplied data
	- `express-session`& `connect-loki` to create data store and allow presistent sessions for our application
	- `express-flash` for handling flash messages

## References
- Project created for amademic learning based on curriculum by Launch School
