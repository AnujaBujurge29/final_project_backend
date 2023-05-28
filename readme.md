
##  Middleware
- Middleware configures things BEFORE routes happen. It's the middle man between the user sending a request, and getting a response

- What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

- You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

Add dotenv

Imports or Dependencies

Mongoose info

Middleware

Data

Routes...

Listen

### =====================Installations===============================

touch server.js

npm init -y

npm i nodemon

npm i express

npm install jsx-view-engine react react-dom dotenv --save 

npm i -g nodemon (one time install)

npm i mongoose@6.11.1

npm i method-override

npm install cors --save

touch vercel.json