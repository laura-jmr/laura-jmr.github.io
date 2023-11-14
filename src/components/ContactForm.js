import React, { useState } from 'react';
import "./ContactForm.css"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    text: 'message',
    name: 'name',
    email: 'email',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or perform other actions
    console.log('Form data submitted:', formData);
    // Reset the form fields
    setFormData({
      text: '',
      name: '',
      email: '',
    });
  };

  return (
    <div id="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div id='contact-form-name-container'>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div id='contact-form-email-container'>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div id='contact-form-message-container'>
          <input
            type="text"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
        <button id="contact-form-submit-button" type="submit">Send</button>
      </form>
    </div>
  );
}
