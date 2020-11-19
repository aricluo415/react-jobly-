import React, {useContext} from 'react'
import UserContext from '../api/UserContext';
function JobCard({companyHandle, companyName, equity, id, salary, title}) {

    const {appliedApps, applyForApp} = useContext(UserContext);

    function handleSubmit(evt) {
        evt.preventDefault();
        applyForApp(id);
    }

    return (
        <div className="card" style={{width: "50rem"}}>
            <h5 className="card-header">{title}</h5>
        <div className="list-group list-group-flush">
            
            <div className="list-group-item">Company:{companyName}</div>
            <div className="list-group-item">Salary:{salary}</div>
            <div className="list-group-item">
        {appliedApps.includes(id)? <div className="btn btn-secondary disabled">Applied</div>:<button  className="btn btn-primary" onClick={handleSubmit}>Apply</button>}

            </div>
            
        </div>
         </div>
    )
}

export default JobCard
