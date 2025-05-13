import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { AddContacts } from "./AddContacts.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan, faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons'



export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<>	
			<div className="d-flex justify-content-center align-items-center flex-column mx-4">
				<div className="d-flex justify-content-end w-100 p-3">
					<Link to="/add-contacts">
					<button type="button" className="btn btn-success">Add new contact</button>
					</Link>
				</div>
				<div className="container-fluid d-flex justify-content-between border w-100">
					<img src="https://i.pravatar.cc/300" className="rounded-circle m-3" width= "150" height= "150" alt="profile" />
					<div className="container d-flex justify-content-center flex-column mx-5 g-3">
						<span className="name mb-3">Mike Anamendolla</span>
						<span><FontAwesomeIcon icon={faLocationDot} className="g-4" /> 5842 Hillcrest Rd</span>
						<span><FontAwesomeIcon icon={faPhoneFlip} className="g-4"/ > Mike Anamendolla</span>
						<span><FontAwesomeIcon icon={faEnvelope} className="g-4" /> Mike Anamendolla</span>
					</div>
					<div className="d-flex m-3 justify-content-between">
						<FontAwesomeIcon icon={faPencil} className="m-3" />
						<FontAwesomeIcon icon={faTrashCan} className="m-3" />
					</div>
				</div>
			</div>
		</>
	);
}; 