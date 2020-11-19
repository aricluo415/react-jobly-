import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {v4 as uuid} from 'uuid';
import JoblyApi from '../api/api';
import SearchForm from '../misc/SearchForm';
function CompanyList() {

    const [companyList, setCompanyList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    /** initial render */
    useEffect(function fetchCompanyListOnMount() {
        async function fetchCompany() {
            const companies = await JoblyApi.getCompanyList()
            setCompanyList(companies);
            setLoading(false);
        }
        fetchCompany();
    },[]);


    async function handleSubmit(filters) {
        const companies = await JoblyApi.getCompanyList(filters);
        setCompanyList(companies);
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <SearchForm filters={["name","minEmployees","maxEmployees"]} filterSearch={handleSubmit} />
            <ul className="list-group">
                { companyList.map(company => (
                    <li className="list-group-item"key={company.handle}>
                        <Link to={`/companies/${company.handle}`}>{company.handle}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyList;
