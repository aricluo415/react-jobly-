import React from 'react'
import JobCard from './JobCard'
import {v4 as uuid} from 'uuid'
function CompanyCard({name, handle, description, logoUrl, numEmployees, jobs }) {
    return (
        <div className="company-card">
            <div>Handle:{handle}</div>
            <div>Name:{name}</div>
            <div>Description:{description}</div>
            <img src={logoUrl} alt={handle}/>
            <div>Employees:{numEmployees}</div>
            <div>Jobs:</div>
            {jobs.map(job => {
                return <JobCard key={uuid()} {...job} />
            })}
        </div>
    )
}

export default CompanyCard
