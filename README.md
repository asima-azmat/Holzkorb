# Holzkorb

# Frontend
Application Depedencies
React / React-DOM
React-Router
React-MD - React community library that provides Google Material Design styles
Styled Components - React community library that facilitates tailored styling of components
Webfont-Loader - Library that facilitates the inclusion of remote web fonts

Development Dependencies
Webpack - JavaScript module bundler (generates optimized assets (JS, CSS, Images…) for the production stage, provides different loaders (Babel, CSS, HTML, …) and a development server/middleware for the development stage
Babel - JavaScript transpiler that converts ES6 and JSX into browser-compatible JavaScript (e.g.ES5)
CSS-Loader - Library that loads CSS resources
HTML-Loader - Library that constructs HTML resources and injects CSS & JS resources

# Backend

Dependencies:
Express - Server-side web framework based on NodeJS
Bcrypt - Library that helps to hash passwords
BodyParser - Library that parses web requests (marshalling/unmarshalling)
JWT JSON Web Token (JWT) - library for authorization
Mongoose - MongoDB object-to-document-mapper including MongoDB access
Helmet - Library for securing Express applications by setting HTTP headers
Nodemon - Restarts application when changed files are saved

# Deployment

Heroku could be configured via Heroku Web-Interface (configure Github repository urls) for Heroku-App).
We provide the source code for the backend and the frontend application on Github.
The frontend application has two branches:
1. Master branch: Regular Movie App
2. Serverless branch: This version of the Movie App frontend has dummy data and can work without the backend application running
We provide a deployed Backend on Heroku: https://seba-movies-api.herokuapp.com/
You can also host your database on mLab: https://mlab.com/
