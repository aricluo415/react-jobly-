import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';
//import UserContext from "./auth/UserContext";

function SignupForm({signUp}) {
    const [formData, setFormData] = useState({
		username: "",
		password: "",
		firstName: "",
        lastName: "",
        email: ""
	}); 
    const history = useHistory();


	 /** Update form input. */
	function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    }

	/** Submit form: call function setAuthToken from parent & clear inputs. */
    async function handleSubmit(evt) {
        evt.preventDefault();
        signUp({
            username: formData.username,
            password: formData.password, 
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
            });
        setFormData({ username: "", password: "", firstName: "" , lastName: "", email: ""});
        history.push('/login');
    }
    /** Check if logged in already */

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="newBox-username">Username</label>
                <input
                    id="newBox-username"
                    onChange={handleChange}
                    name="username"
                    value={formData.username}
                />
            </div>
            <div>
                <label htmlFor="newBox-password">Password</label>
                <input
                    id="newBox-password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
            </div>
            <div>
                <label htmlFor="newBox-firstName">First Name</label>
                <input
                    id="newBox-firstName"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
            </div>
            <div>
                <label htmlFor="newBox-lastName">Last Name</label>
                <input
                    id="newBox-lastName"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
            </div>
            <div>
                <label htmlFor="newBox-email">Email</label>
                <input
                    id="newBox-email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
            </div>
            <button className="NewStoryForm-addBtn">Submit</button>
            </form>
        </div>
    )
}

export default SignupForm
