import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import JobCard from './JobCard'
import JoblyApi from './api'
import {v4 as uuid} from 'uuid'
function JobsList() {

    const [jobsList, setJobsList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(function fetchJobsList() {
        async function fetchJobs() {
            const jobs = await JoblyApi.getJobsList();
            console.log(jobs)
            setJobsList(jobs);
            setLoading(false);
        }
        console.log("HELO")
        fetchJobs();
    },[])

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            {jobsList.map(job => (
            <li key={uuid()}>
                <JobCard {...job}/>
            </li> ))}
        </div>
    )
}

export default JobsList;
