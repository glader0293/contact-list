import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";

// The Home component
export const Home = () => {
  const { store, dispatch } = useGlobalReducer(); // Global state management hook
  const [contacts, setContacts] = useState([]); // State to store fetched contacts
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch contacts from API on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/andres/contacts");
        const data = await response.json();

        // Ensure contacts are available and valid
        if (Array.isArray(data.contacts)) {
          setContacts(data.contacts);
        } else {
          console.error("Invalid contacts data:", data);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchContacts();
  }, []);

  const handleDeleteContact = (contactId) => {
    // Logic to delete contact
    // This could be a call to delete from the API
    console.log(`Delete contact with ID: ${contactId}`);
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column mx-4">
        <div className="d-flex justify-content-end w-100 p-3">
          <Link to="/add-contacts">
            <button type="button" className="btn btn-success">Add new contact</button>
          </Link>
        </div>

        {contacts.map((contact) => (
          <div className="container-fluid d-flex justify-content-between border w-100" key={contact.id}>
            <img
              src="https://i.pravatar.cc/300"
              className="rounded-circle m-3"
              width="150"
              height="150"
              alt="profile"
            />
            <div className="container d-flex justify-content-center flex-column mx-5 g-3">
              <span className="name mb-3">{contact.name || "No Name"}</span>
              <span><FontAwesomeIcon icon={faLocationDot} className="g-4" /> {contact.address || "No Address"}</span>
              <span><FontAwesomeIcon icon={faPhoneFlip} className="g-4" /> {contact.phone || "No Phone"}</span>
              <span><FontAwesomeIcon icon={faEnvelope} className="g-4" /> {contact.email || "No Email"}</span>
            </div>

            <div className="d-flex m-3 justify-content-between">
              <FontAwesomeIcon icon={faPencil} className="m-3" />
              <FontAwesomeIcon
                icon={faTrashCan}
                className="m-3"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onClick={() => handleDeleteContact(contact.id)} // Handle delete
              />

              {/* Modal for delete confirmation */}
              <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="deleteModalLabel">Are you sure?</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      If you delete this contact, the information will be lost forever!
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" className="btn btn-danger" onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
