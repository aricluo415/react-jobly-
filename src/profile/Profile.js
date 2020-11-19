import React, { useState, useContext } from 'react';
import JoblyApi from "../api/api";
import UserContext from "../api/UserContext";



/** Profile editing form
 * 
 * Displays profile form and handles change to local form state.
 * Submitting the form calls the API to save, and triggers user reloading
 * throughout the site.
 * 
 * Confirmation of a successful save is normally a simple <Alert>, but you 
 * can opt-in the message hook 'useTimedMessage', but switching the lines below
 * 
 * Routed as /profile
 * Routes -> Profile -> Alert
 */

function Profile() {
    const {currentUser, setCurrentUser}  = useContext(UserContext);

    const [formData, setFormData] = useState({
        firstName: currentUser.user.firstName,
        lastName: currentUser.user.lastName,
        email: currentUser.user.email,
        password: "",
    });
    const username = currentUser.user.username;
    const [formErrors, setFormErrors] = useState([]);

    // Switch to message hook 
    // const [saveConfirmed, setsSaveConfirmed] = useState(false);
    // const [saveConfirmed, setSaveConfirmed] = useTimedMessage()

    // console.debug(
    //     "Profile",
    //     "currentUser=", currentUser,
    //     "formData=", formData,
    //     "formErrors=", formErrors,
    //     "saveConfirmed=", saveConfirmed,
    // );

    /** on form submit:
     * -attempt to save to the backend & report any errors
     * -if succesful:
     *  -clear previous error messages and password
     *  -show save-confirmed message
     *  -set current user info throughout the site
     */

     async function handleSubmit(evt) {
         evt.preventDefault();
        console.log("submit")
         let userData = {
             firstName: formData.firstName,
             lastName: formData.lastName,
             email: formData.email,
             password: formData.password,
         };
         try {
             const updatedUser = await JoblyApi.updateUser(userData, username);
             setFormData(f => ({ ...f, password: "" }));
             setCurrentUser(updatedUser);
         } catch (errors) {
             console.log(errors)
         }
     }

     /** Handle form data changing */
     function handleChange(evt) {
         const { name, value } = evt.target;
         setFormData(f => ({
             ...f,
             [name]: value,
         }));
         setFormErrors([]);
     }
    return (
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
            <h3>Profile</h3>
    <h4>{username}{currentUser.user.firstName}</h4>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                name="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm password to make changes:</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-primary btn-block mt-4"onClick={handleSubmit}>Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
    