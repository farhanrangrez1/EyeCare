import React, { useState } from 'react';
import contect from "../assets/contect.css"

const Contect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      description: ''
    });
  };

  return (
    <div className='form'>
<div className='form-1'>
<img src='http://localhost:3003/_next/static/media/contact-illustration.2f6adc05.svg'></img>
<h6>My Adress</h6>
<p>Vidya Nagar New Delhi</p>
<h6>Contact</h6>
<p>+21 5646476474</p>
<h6>Email</h6>
<p>akshay@gmail.com</p>
<h6>City</h6>
<p>New Delhi</p>
<h6>My Website</h6>
<a href='https://redq.io/' target="_blank">Visit this side</a>
</div>

    <form onSubmit={handleSubmit} className="contact-form">
      <h2>How can we improve your experience?</h2>
      
      {/* Name and Email in one row */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Subject */}
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      {/* Description */}
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
    </div>
  );
};

export default Contect;
