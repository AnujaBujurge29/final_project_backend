const express = require('express')
const router = express.Router()
const BooksControllers = require('../../controllers/bookList')
// Index Route -1
router.get('/', BooksControllers.getAllBooks)
// Create Route - 5 -Create-r-u-d
router.post('/', BooksControllers.addBooks)
// Show -7 - c-Read-u-d
router.get('/:id', BooksControllers.getById)
// Update Route - 5 - c-r-Update-d
router.put('/:id', BooksControllers.updateBooks)
// Delete Route - 3 - c-r-u-Delete
router.delete('/:id', BooksControllers.deleteBook)

module.exports = router