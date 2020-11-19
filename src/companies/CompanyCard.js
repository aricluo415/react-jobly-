import React from "react";
import JobCard from "../jobs/JobCard";

function CompanyCard({
  name,
  handle,
  description,
  logoUrl,
  numEmployees,
  jobs,
}) {
  return (
    <div className="card">
      <img src={`${logoUrl}`} alt={handle} />
      <div className="card-header">Name:{name}</div>
      <div className="card-body">
        <div className="list-group-item">Handle:{handle}</div>
        <div className="list-group-item">Description:{description}</div>
        <div className="list-group-item">Employees:{numEmployees}</div>
      </div>
      {jobs.map((job) => {
        return <JobCard key={job.id} {...job} />;
      })}
    </div>
  );
}

export default CompanyCard;
