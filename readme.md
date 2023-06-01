# MERN SP Application

# Book-Store
Book Store is as MERN Application created using ReactJS, JavaScript and TailWind in Frontend And NodeJS, Express, MongoDB, Mongoose.

## INTRODUCTION:

I have created a Full Stack CRUD Web application using MERN. 
As a Book Store user, in your store admin account, you can add books in your store, edit details of books, remove book from store list, and read deatils about specific book. 

## TECHNOLOGIES: 
## Back End Technologies:
### Initial Installations:
    
    touch server.js

    npm init -y

    npm i nodemon

    npm i express

    npm install jsx-view-engine react react-dom dotenv --save 

    npm i -g nodemon (one time install)

    npm i mongoose@6.11.1

    npm i method-override

    npm install cors --save

### Some Rules that need to follow while working on backend:
You need to follow some guideline before running backend server. Please check Sequence of block of code. 
- Add dotenv
- Imports all Dependencies
- Mongoose Connection
- Middleware
    - Middleware configures things BEFORE routes happen. It's the middle man between the user sending a request, and getting a response
    - What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.
    - You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
- Import data in neccesory 
- Routes
    - Routes also should follow some sequence to avoid futher conflicts.
    - I-N-D-U-C-E-S
        - I - Index ----------- GET -------- /things
        - N - New ------------- GET -------- /things/new
        - D - Destroy --------- DELETE ----- /things/:id
        - U - Update ---------- PUT -------- /things/:id
        - C - Create ---------- POST ------- /things	
        - E - Edit------------- GET -------- /things/:id/edit
        - S - Show ------------ GET -------- /things/:id
- Listening To PORT


You can find Complete MERN APP here.
#### [Book Store](https://mern-project-frontend-p8un.onrender.com)