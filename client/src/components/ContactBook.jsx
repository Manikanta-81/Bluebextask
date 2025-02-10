import { useState } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import styling from "../styles/styling.css";

const API_URL = "http://localhost:8000/contacts";

const ContactBook = () => {
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState(false);

  const fetchContacts = () => {
    axios.get(`${API_URL}/retrive`).then((res) => setContacts(res.data));
  };

  const addContact = (contact) => {
    alert(" Contact added successfully!");
    fetchContacts(); 
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API_URL}/remove/${id}`);
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="contact-book">
      <h1 className="title"> Contact Book</h1>

      {/* Contact Form */}
      <ContactForm onAdd={addContact} />

      {/*Button*/}
      {!showContacts && (
        <button className="view-btn" onClick={() => { setShowContacts(true); fetchContacts(); }}>
          View All Contacts
        </button>
      )}

      {/* Contact List */}
      {showContacts && <ContactList contacts={contacts} onDelete={deleteContact} />}
    </div>
  );
};

export default ContactBook;
