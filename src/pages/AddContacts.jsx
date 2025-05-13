import React from "react"
import { Link } from "react-router-dom";

export const AddContacts = () => {

return(
    
    <form className="container d-flex justify-content-center flex-column g-5">
        <h1 className="d-flex justify-content-center">Add a new contact</h1>
    <div className="g-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
        <input type="text" className="form-control" placeholder="Full Name" id="exampleInputFullName" aria-describedby="emailHelp"/>

    </div>
     <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input type="text" className="form-control" placeholder="Full Name" id="exampleInputFullName" aria-describedby="emailHelp"/>

    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
        <input type="text" className="form-control" placeholder="Full Name" id="exampleInputFullName" aria-describedby="emailHelp"/>
   
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
        <input type="text" className="form-control" placeholder="Full Name" id="exampleInputFullName" aria-describedby="emailHelp"/>

    </div>
    <button type="submit" className="btn btn-primary w-100 mt-3">Save</button>
    <Link to="/">or get back to contacts</Link>
    </form>

)}