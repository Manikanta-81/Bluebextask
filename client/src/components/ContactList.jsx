const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-card">
          <div>
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
          <button className="delete-btn" onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
