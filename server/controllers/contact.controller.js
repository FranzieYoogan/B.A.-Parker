const Contact = require('./../models/contact.model');

function getAllContacts(req,res) {

    Contact.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Error retrieving contacts"}))

}

function createContact(req,res) {

    const contact = new Contact({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message

    })

    contact.save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Error creating contact"}))

}


module.exports = {

    createContact,
    getAllContacts

}