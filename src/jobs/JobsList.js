import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JoblyApi from "../api/api";
import SearchForm from "../misc/SearchForm";

function JobsList() {
  const [jobsList, setJobsList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(function fetchJobsList() {
    async function fetchJobs() {
      const jobs = await JoblyApi.getJobsList();
      setJobsList(jobs);
      setLoading(false);
    }
    fetchJobs();
  }, []);

  async function handleSubmit(filters) {
    const jobs = await JoblyApi.getJobsList(filters);
    setJobsList(jobs);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <SearchForm
        filters={["minSalary", "hasEquity", "title"]}
        filterSearch={handleSubmit}
      />
      {jobsList.map((job) => (
        <div key={job.id}>
          <JobCard {...job} />
        </div>
      ))}
    </div>
  );
}

export default JobsList;
