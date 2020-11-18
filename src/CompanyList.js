import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {v4 as uuid} from 'uuid';
import JoblyApi from './api';

function CompanyList() {

    const [companyList, setCompanyList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchFilters, setSearchFilters] = useState({
        name:"",
        minEmployees: "",
        maxEmployees: ""
    })
    useEffect(function fetchCompanyListOnMount() {
        async function fetchCompany() {
            const companies = await JoblyApi.getCompanyList()
            setCompanyList(companies);
            setLoading(false);
        }
        fetchCompany();
    },[]);

    /** Update form input. */
	function handleChange(evt) {
        const { name, value } = evt.target;
        setSearchFilters(formData => ({
            ...formData,
            [name]: value,
        }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const filters = {};
        Object.keys(searchFilters).forEach(filter=> {
            if (searchFilters[filter] !== "") {
                filters[filter] = searchFilters[filter];
            }
        })
        const companies = await JoblyApi.getCompanyList(filters);
        setCompanyList(companies);
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="newBox-username">name</label>
                <input
                    id="newBox-name"
                    onChange={handleChange}
                    name="name"
                    value={searchFilters.name}
                />
            </div>
            <div>
                <label htmlFor="newBox-minEmployees">min employees</label>
                <input
                    id="newBox-minEmployees"
                    onChange={handleChange}
                    name="minEmployees"
                    value={searchFilters.minEmployees}
                />
            </div>
            <div>
                <label htmlFor="newBox-maxEmployees">max employees</label>
                <input
                    id="newBox-maxEmployees"
                    onChange={handleChange}
                    name="maxEmployees"
                    value={searchFilters.maxEmployees}
                />
            </div>
            <button className="NewStoryForm-addBtn">Submit</button>
            </form>
            </div>
            {companyList.map(company => (
            <li key={uuid()}>
                <Link to={`/companies/${company.handle}`}>{company.handle}</Link>
            </li> ))}
        </div>
    )
}

export default CompanyList;
