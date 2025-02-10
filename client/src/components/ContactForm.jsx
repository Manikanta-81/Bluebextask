import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/contacts/add";

const ContactForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(API_URL, form);
    onAdd(res.data);
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
