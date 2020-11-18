import React from 'react'

function JobCard({companyHandle, companyName, equity, id, salary, title}) {
    return (
        <div className="job-card">
            <div>{title}</div>
            <div>{companyHandle}</div>
            <div>{companyName}</div>
            <div>{salary}</div>
        </div>
    )
}

export default JobCard
