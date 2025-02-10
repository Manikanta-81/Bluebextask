const Contact = require("../models/Contact");

let contacts = []; 

// Get All Contacts
const getContacts = (req, res) => {
  res.json(contacts);
};

// Add a Contact
const addContact = (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newContact = new Contact(contacts.length + 1, name, phone, email);
  contacts.push(newContact);

  res.json(newContact);
};

// Delete a Contact
const deleteContact = (req, res) => {
  const { id } = req.params;
  contacts = contacts.filter((contact) => contact.id != id);
  res.json({ message: "Contact deleted" });
};

module.exports = { getContacts, addContact, deleteContact };
