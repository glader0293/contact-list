import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate to handle redirection after form submission

export const AddContacts = () => {
  // State for storing the input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  // Navigate hook to redirect after adding contact
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    
    // Prepare the new contact data
    const newContact = {
      name,
      email,
      phone,
      address,
    };
    
    // Make the API call to save the contact (update the URL with your actual endpoint)
    try {
      const response = await fetch("https://playground.4geeks.com/contact/agendas/andres/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });

      if (!response.ok) {
        throw new Error("Failed to add contact");
      }

      // Redirect to the home page after saving the contact
      navigate("/");
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  return (
    <form className="container d-flex justify-content-center flex-column g-5" onSubmit={handleSubmit}>
      <h1 className="d-flex justify-content-center">Add a new contact</h1>
      
      <div className="g-3">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          id="fullName"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name on input change
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email on input change
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Update phone on input change
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)} // Update address on input change
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-3">Save</button>
      <Link to="/">or get back to contacts</Link>
    </form>
  );
};
