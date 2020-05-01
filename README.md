# The Quarantine Survival Kit
Group final project for Code Fellows seattle-301d61 

## Live deployment

Check out our app out in the wild [here](https://quarantine-survival-kit.herokuapp.com/)! 

<hr>

## Table of Contents
- [Overview](#Overview)
- [Project Scope](#Project-Scope)
- [Functional and non-functional requirements](#Functional-requirements)
- [Getting Started](#Getting-Started)
- [Technologies used in this project](#Technologies-used-in-this-project)
- [Change Log](#Change-Log)
- [Domain Modeling](#Domain-Modeling)
- [Wire Frames](#Wireframes)
- [Problem Domain](#Problem-Domain)
- [User Stories](#User-Stories)
- [Group Workflow](#Group-Workflow)
- [Contributing](#Contributing)
- [Authors](#Authors)
- [Acknowledgements](#Acknowledgements)
- [License](#LICENSE)

<hr>

## Overview
This is an interactive web app that allows a user to search for movies, recipes, and books. The search will return a collection of 10 items based on the search term. The user will have the ability to save their information to be accessed at a later point in time. The app will also display Covid-19 data currently only for Washington State. Dynamic location data will be a feature added at a later date. 

### What is the vision of this project?
As a user I would like to have a clean, simple UI where I can enter a category that I want to learn more about and be presented with a random selection of things based off that category.  The categories that we are offering recommendations for include movies, recipes, and books.  The user will have the ability to save their information to be accessed at a later point of time.

### What pain point does this web application solve?
This application will offer users the ability to experience some new recipes, movies and books to help to break up the monotony of the quarantine life.  It takes the pain out of searching for new things to eat, watch and read, saving you time.  

### Why should we care about your web application?
It is a way to explore the vastness of the world wide web.  We are helping to broaden your horizons by offering new experiences while you are stuck at home.  We make it easy to save your recommendations to be revisited at a later time.

[Return to the top](#Table-of-Contents)

<hr>

## Project Scope

### What will your product do

- Allow for user profile creation and sign-in
- Show a selection of movies based on title, director or genre
- Show a selection of recipes based off of cuisine types
- Show a selection of books based off of title or author
- Contain a database with saved items
- Display a favorites page that will show results based on user profile
- Allow favorites to be removed
- Persistent cookie to keep user signed in
- Display to the user current Covid-19 data

### What will the product not do

- We will not charge for the use of our product.
- This web application will not directly sell any of the items searched for

### Minimum Viable Product

The user will be able to search for recommendations for the following categories:
- Movies based on title, director or genre
- Recipes based off of cuisine types
- Books based off of title or author
- The user will be able to create a profile.
- The user will be able to save their favorite recommendations to their profile to be accessed at a later time. 

[Return to the top](#Table-of-Contents)

<hr>

## Functional requirements

See [Domain Modeling](#Domain-Modeling) section below

## Non-Functional Requirements

### Security

- All of our forms are security enabled to prohibit data attacks.
- All of our API keys will be placed within our environmental variables.  
- All of our SQL values will be obfuscated.  
- We will validate for HTTPS in the URL.

### Usability

- Fully working from all states and multiple origins. 
- Fully compliant with all Web Accessibility Initiative (WAI) checks.  
- The amount of the clicks to obtain your goal will be efficient and optimized.
- Our documentation will be fully replicable and readable
- The user interface will be designed in such a way that the user can quickly figure out their goal and how to obtain it.

[Return to the top](#Table-of-Contents)

<hr>

## Getting Started
This project is licensed under the free MIT license. As such, if you are interested in getting a version of this project locally for testing or added development, here are the steps needed to get started:
1. Prerequisites:
    - Knowledge of HTML, CSS and JavaScript
    - Experience working with node.js servers
    - Understanding of server-side templating
    - Working knowledge of REST APIs
    - A text editor ([VSCode](https://code.visualstudio.com/download) is recommended)
    - A web browser (We recommend using Google Chrome)
    - A desire to build cools stuff!
2. Clone repo from GitHub [here](https://github.com/quarantine-survival-kit/301d61-class-project).
    - On the GitHub repo page, click the `clone or download` button and copy the provided url.
    - In your command-line, or CLI, run this command: `git clone <url goes here>`
3. Inside of the repo on your local machine, install the necessary dependencies and libraries:
    - In your CLI, run the command `npm init` which will initialize the project with `node.js`. If you don't have npm package manager installed, you can download node.js [here](https://nodejs.org/en/download/) which includes npm.
    - Follow the prompts to fill out the `package.json` file that `node.js` will pull from to run the server.
        - <ins>**Important!**</ins> Ensure that your `package.json` has `server.js` listed under the `start` parameter!
    - Install these libraries from npm that are used on this project with the `npm install` command on your CLI (more info below):
        - dotenv
        - express
        - superagent
        - cors
        - ejs
        - method-override
        - pg
        - chalk (very, **very** optional)
4. You should now have a full copy of this project on your local machine. If you would like to contribute to this project in any way, checkout the [Contributing](#Contributing) section below! 

[Return to the top](#Table-of-Contents)

<hr>

## Technologies used in this project

- [HTML](https://html.spec.whatwg.org/multipage/) - A standard markup language used for web site structure.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - A simple language used to add styling to web documents.
- [JavaScript](http://es6-features.org/#Constants) - A dynamically typed programming language used heavily in front-end development.
- [jQuery](https://jquery.com/) - A fast, small JavaScript library that makes tasks like DOM manipulation and event handling much easer. 
- [Dotenv](https://www.npmjs.com/package/dotenv) - An npm package used to create and load environmental variables from a hidden .env file.
- [Express](https://expressjs.com/) - A node.js web application framework.
- [Superagent](https://visionmedia.github.io/superagent/) - A light-weight ajax API for handling requests and responses.
- [EJS](https://ejs.co/) - A server-side templating language to generate HTML markup with plain JavaScript.
- [Method-Override](https://github.com/expressjs/method-override) - An npm package used in conjunction with express that allows for the use of HTTP verbs such as `PUT` and `DELETE` in place of the standard HTML methods `GET` and `POST`.
- [PostgreSQL](https://www.postgresql.org/) - An open-source relational database utilizing the standard SQL syntax.

### APIs
- Movies: [TMDB](https://www.themoviedb.org/documentation/api)
- Books: [Google Books](https://developers.google.com/books/docs/overview)
- Recipes: [EDAMAM](https://developer.edamam.com/edamam-recipe-api)
- User Icons: [Adorable Avatars](http://avatars.adorable.io/) - future implementation
- COVID Data:[The COVID Tracking Project](https://covidtracking.com/api) 
### Custom Fonts
- [Google Fonts](https://fonts.google.com/)
  - Press Start 2p
  - Roboto
### Links 
- [Just watch](https://www.justwatch.com/) - Link with locations to watch selected movies
- [Amazon](https://www.amazon.com/) - Link to Amazon search page for selected books

[Return to the top](#Table-of-Contents)

<hr>

## Change Log

See the attached [CHANGELOG.md](CHANGELOG.md) file.

[Return to the top](#Table-of-Contents)

<hr>

## Domain Modeling: 

### Database Model

This diagram is a visual representation of the data structure for this project.

![img](assets/diagrams/Database-Relationship-Diagram.jpg)

### Data Flow

This is a visual representation of our MVC process.

![img](/assets/diagrams/MVC-Diagram.jpg)

[Return to the top](#Table-of-Contents)

<hr>

## Wire Frames:

These are the wire frames we used when designing the front-end of this web application.

![img](assets/diagrams/Web-Prototype.jpg)
![img](assets/diagrams/Web-Wireframe-Details.jpg)
![img](assets/diagrams/Web-Wireframe-Favorites.jpg)
![img](assets/diagrams/Web-Wireframe.jpg)
![img](assets/diagrams/Web-Wireframe-About-Us.jpg)

[Return to the top](#Table-of-Contents)

<hr>

## Problem Domain:  

*As a user I would like to have a clean, simple UI where I can enter a category that I want to learn more about and be presented with a random selection of things based off that category: ie: workout routines, movies, wines, travel destinations, books, new hobby, meetups, recipes based on place*

These are the features we wanted at the start of this project. 

1. Server with saved items that can randomly generate/suggest
2. Movies based on popularity
3. Display options based on search
4. Recipes based off of cuisines type
5. Show recipes
6. Steps, Ingredients
7. Save a grocery list
8. Show grocery store near this location
9. Books 
10. Display a Selection of books,
11. Click on book, gives similar books
12. Same genre?
13. Synthesized User Profile creation and sign-in 
14. Persistent cookie to keep signed in?
15. 10-15 minute time frame? Cookies

[Return to the top](#Table-of-Contents)

<hr>

## User Stories:

1. ### User Profiles
- I, as a user, would like the site I interact with often to remember my settings and choices.
- Create a sign-in/up form which saves a user profile to the DB
- Can save and recall/sign-in a user

2. ### Movie recommendations
- I, as a user, would like to search for movie recommendations based on genre, director or title.
- Given the user inputs a valid genre or title, when they click on a button and then the top 10 movie recommendations are displayed on the /display page.
- The user can view and save the movie recommendations to the database.  The display will include title, synopsis, director, image, genre, popularity, and run time.
- Stretch Goal: Display a random movie recommendation.

3. ### Recipes
- I, as a user, would like to search for a cuisine type and receive recipe ideas based on my search.
- Given the user inputs a valid cuisine type, when they click on a button the top 10 recipes recommendations are displayed on the /display page.
- The user can view and save the recipes that they like to the database.  The display will include title, image, ingredients and instructions.
- Stretch Goal: Save a grocery list
  - Show grocery store near this location

4. ### Books
- I, as a user, would like to search books based on the genre, author or title.
- Given the user inputs a valid book genre, author or title, when they click on a button then the top 10 book recommendations are displayed on the /display page.
- The user can view and save the books that they like to the database.  The display will include title, synopsis, author, image.
- Stretch Goal: After a recommendation is chosen allow the user to click on a button and generate 10 more recommendations based on this title.
- Stretch Goal: Display a link to a retailer to purchase the book.

5. ### Covid-19 Information
- I, as a user, would like to know the latest data pertaining to Covid-19.
- Given the user loads into the homepage, a scrolling ticker across the top of the content body will display basic information on the Covid-19 situation.

### Other Stretch Goals:

Possible future implementation of:

- Exercise recommendations.
- Beverage selections.
- Bored API display random ideas of new activities to kill time
- After a recommendation is chosen for a given category, allow the user to click on a button and generate 10 more recommendations based on their selection.

[Return to the top](#Table-of-Contents)

<hr>

## Group workflow

### Communication Plan
- Communicate primarily through Discord for project meetings and a simulated group work environment.
- A Trello kanban board for individual assignment tracking.
- Utilize Google Drive for cloud-based file sharing.
- 9:30 am daily stand up meeting so that everyone can stay on the same page.

### Conflict
- Whenever we come to a decision point, you must say something.
- Feel free to say anything.
- Ensure every member's voice is heard in all decision making.

### Work Plan
- Commitment to working between the hours of 9-6

### Git Process 
- Joe will be the git manager
  - 1 other approval per development
  - 3 other approval for master  

[Return to the top](#Table-of-Contents)

<hr> 

## Contributing

If you would like to contribute to this project, open up an issue on the project's [GitHub](https://github.com/quarantine-survival-kit/301d61-class-project).
- Use the `bug` flag for any problems using the application.
- Use the `enhancement` flag if you have a recommendation on something to improve
- Use the `question` flag if you simply have questions about the development of this project.

[Return to the top](#Table-of-Contents)

<hr>

## Authors

* Volha Charnysh - Full-stack Javascript Developer [GitHub](https://github.com/charnysho)
* Kent Sheats - Full-stack Javascript Developer [GitHub](https://github.com/KentFletcher)
* Paul Depew - Full-stack Javascript Developer [GitHub](https://github.com/PaulDepew)
* Joe Pennock - Full-stack Javascript Developer [GitHub](https://github.com/penjoe)

[Return to the top](#Table-of-Contents)

<hr>

## Acknowledgements

This section goes out to Joseph Zabaleta, our biggest supporter.

[Return to the top](#Table-of-Contents)

<hr>

## License

See the attached [LICENSE](LICENSE) file for details.

[Return to the top](#Table-of-Contents)

<hr>