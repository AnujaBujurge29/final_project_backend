
const express = require('express')
const app = express()
// // Environmental Varibles
require('dotenv').config()
const mongoose = require('mongoose')
const cors =require('cors')
// const BookSchema = require('./models/bookList')
const router = require('./routes/api/routesAPI')

const db = mongoose.connection
// const bookData = require('./utilites/data')
// const todosController = require('./controllers/bookList')


const PORT = process.env.PORT || 3001
const mongoURI = process.env.MONGODB_URI

// // Connecting to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(mongoURI, { useNewUrlParser: true},
   ).then(() => console.log('MongoDB connection establish') )

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is MongoGB not running?'))
db.on('disconnected', () => console.log('MongoDB disconnected'))

// // Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); 
app.use(cors({ origin: '*' })) 

// // Routes
app.use('/books', router) //localhost:3001/books

// app.use('/todos', todosController) // telling server.js to get the routes from controllers/todos.js


// app.use("/", (req, res) => {
//   res.send("BackEnd Connected to MongoDB, Working fine");
// });


// // Seeding the db
// app.get('/seed', async (req, res) => {
//     await BookSchema.deleteMany({});
//     await BookSchema.insertMany(todosData);
//     res.send('done!');
//   });

app.listen(PORT, () => {
    console.log('This message means nothing', PORT)
  })