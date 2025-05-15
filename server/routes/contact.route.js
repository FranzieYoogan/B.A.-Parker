const contactController = require('../controllers/contact.controller')
const express = require('express')
const router = express.Router()

router.get('/getAllContacts', contactController.getAllContacts)
router.post('/createContact', contactController.createContact)

const contactRoutes = router
module.exports = contactRoutes