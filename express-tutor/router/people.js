const express = require('express');
const router = express.Router()
const {getPerson, addPerson, editPerson, deletePerson} = require('../controllers/people')

// karena base dari app.use yg kita gunakan sudah /api/people
// maka setiap url dibawah tidak perlu memilki url /api/people
router.get("/", getPerson)
router.post("/", addPerson)
router.put('/:id',editPerson)
router.delete('/:id',deletePerson)

module.exports = router
