const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const booksCtrl = require('../controllers/books');

router.post('/', booksCtrl.createBook);

router.post('/:id/rating', (req, res, next) => {
    
});

router.put('/:id', booksCtrl.modifyBook);
router.delete('/:id', booksCtrl.deleteBook);
router.get('/:id', booksCtrl.getOneBook);
router.get('/bestrating', booksCtrl.getBestBooks);
router.get('/', booksCtrl.getAllBooks);

module.exports = router;