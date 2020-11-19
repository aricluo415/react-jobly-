import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from '../api/api'
import CompanyCard from './CompanyCard'
function CompanyDetails() {

    const {handle} = useParams();
    const [companyDetail, setCompanyDetail] = useState(null);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(function fetchCompanyDetail(){
        async function fetchCompany() {
            const company = await JoblyApi.getCompany(handle);
            console.log(company)
            setCompanyDetail(company);
            setLoading(false);
        }
        fetchCompany();
    }, [ ])

    if (isLoading) return <div>Loading...</div>;

    return <CompanyCard {...companyDetail} />;
}

export default CompanyDetails;