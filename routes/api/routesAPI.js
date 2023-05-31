const express = require('express')
const router = express.Router()
const BooksControllers = require('../../controllers/bookList')
// Index Route -1
router.get('/', BooksControllers.getAllBooks)

// Delete Route - 3 - c-r-u-Delete
router.delete('/:id', BooksControllers.deleteBook)

// Update Route - 5 - c-r-Update-d
router.put('/:id', BooksControllers.updateBooks)

// Create Route - 5 -Create-r-u-d
router.post('/', BooksControllers.addBooks)

// Show -7 - c-Read-u-d
router.get('/:id', BooksControllers.getById)

module.exports = router