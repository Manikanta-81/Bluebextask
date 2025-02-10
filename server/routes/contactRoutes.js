const express = require("express");
const { getContacts, addContact, deleteContact } = require("../controllers/contactController");

const router = express.Router();

router.get("/retrive", getContacts);
router.post("/add", addContact);
router.delete("/remove/:id", deleteContact);

module.exports = router;
