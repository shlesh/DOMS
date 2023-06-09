// src/components/ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    gender: "",
    enrollmentNo: "",
    passoutYear: "",
    presentDesignation: "",
    presentOrganization: "",
    industry: "",
    emailAddress: "",
    phoneNo: "",
    correspondenceAddress: "",
    permanentAddress: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully");
      } else {
        alert("Error sending message");
        console.log(JSON.stringify(formData));
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="dobDay">Date of Birth:</label>
      <input type="number" name="dobDay" value={formData.dobDay} onChange={handleChange} required />
      <input type="number" name="dobMonth" value={formData.dobMonth} onChange={handleChange} required />
      <input type="number" name="dobYear" value={formData.dobYear} onChange={handleChange} required />

      <label htmlFor="gender">Gender:</label>
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="enrollmentNo">Enrollment No:</label>
      <input type="text" name="enrollmentNo" value={formData.enrollmentNo} onChange={handleChange} required />

      <label htmlFor="passoutYear">Passout Year:</label>
      <input type="number" name="passoutYear" value={formData.passoutYear} onChange={handleChange} required />

      <label htmlFor="presentDesignation">Present Designation:</label>
      <input type="text" name="presentDesignation" value={formData.presentDesignation} onChange={handleChange} required />

      <label htmlFor="presentOrganization">Present Organization:</label>
      <input type="text" name="presentOrganization" value={formData.presentOrganization} onChange={handleChange} required />

      <label htmlFor="industry">Industry:</label>
      <input type="text" name="industry" value={formData.industry} onChange={handleChange} required />

      <label htmlFor="emailAddress">Email Address:</label>
      <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />

      <label htmlFor="phoneNo">Phone No:</label>
      <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />

      <label htmlFor="correspondenceAddress">Address (Correspondence):</label>
      <textarea name="correspondenceAddress" value={formData.correspondenceAddress} onChange={handleChange} required></textarea>

      <label htmlFor="permanentAddress">Address (Permanent):</label>
      <textarea name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} required></textarea>

      <label htmlFor="message">Message (Optional):</label>
      <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
