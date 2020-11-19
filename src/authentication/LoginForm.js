import React,{useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom';

function LoginForm({login, token}) {

    const [formData, setFormData] = useState({
		username: "",
		password: "",
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
    /** Submit form to API, log in and then call parent function setAuthToken */
    async function handleSubmit(evt) {
        evt.preventDefault();
        login(formData);
        setFormData({username:"", password:""})
        history.push("/home");
    }
    /** Check if logged in already */

    /** Form to login */
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
          <button className="NewStoryForm-addBtn">Submit</button>
        </form>
      </div>
      )

}

export default LoginForm;
