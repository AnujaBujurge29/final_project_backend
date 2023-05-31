const express = require('express')
const router = express.Router()
const Book = require("../models/bookList");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let books;
  try {
    books = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json({ books });
};

const addBooks = async (req, res, next) => {
  const { name, author, price, description} = req.body;
  let books;
  console.log(req.body);
  try {
    books = new Book({
      name,
      author,
      price,
      description,
    });
    await books.save();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ books });
};

const updateBooks = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, price, description,  } = req.body;
  let books;
  try {
    books = await Book.findByIdAndUpdate(id, {
      name,
      author,
      price,
      description,
    });
    books = await books.save();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "Unable to Update by ID" });
  }
  return res.status(200).json({ books });
};

const deleteBook = async(req, res, next) =>{
   const id = req.params.id;
   let books;
   try{
      books = await Book.findByIdAndRemove(id)
   }catch(err){
      console.log(err);
   }
   if (!books) {
      return res.status(404).json({ message: "Unable to Delete by ID" });
    }
    return res.status(200).json({ message: "Book successfully Deleted"});
}
exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBooks = updateBooks;
exports.deleteBook = deleteBook;
