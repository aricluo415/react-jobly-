import React, { useState, useContext } from "react";
import JoblyApi from "../api/api";
import UserContext from "../api/UserContext";

function Profile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: currentUser.user.firstName,
    lastName: currentUser.user.lastName,
    email: currentUser.user.email,
    password: "",
  });

  const username = currentUser.user.username;

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("submit");
    let userData = { ...formData };
    try {
      const updatedUser = await JoblyApi.updateUser(userData, username);
      setFormData((f) => ({ ...f, password: "" }));
      setCurrentUser(updatedUser);
    } catch (errors) {
      console.log(errors);
    }
  }

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  }

  return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3>Profile</h3>
      <h4>
        {username}
        {currentUser.user.firstName}
      </h4>
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
            <button
              className="btn btn-primary btn-block mt-4"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
