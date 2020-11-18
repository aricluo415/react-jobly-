import React, { useState } from "react";
import "./SearchForm.css";

/** Search widget
 * 
 * Appears on CompanyList and Joblist so that these can be filtered down.
 * 
 * This component doesn't *do* the searching, but it renders the search form
 * and calls the 'searchFor' function prop that run in a parent to do 
 * the searching.
 * 
 * { CompanyList, JobList } -> SearchForm
 */

 function SearchForm({ searchFor }) {
     const [searchTerm, setSearchTerm] = useState("");

     /** Tell Parent what to filter */
     function handleSubmit(evt) {
         /** Take care of accidently trying to search for just spaces */
         evt.preventDefault();
         searchFor(searchTerm.trim() || undefined);
         setSearchTerm(searchTerm.trim());
     }

     /** Update form fields */
     function handleChange(evt) {
         setSearchTerm(evt.target.value);
     }

     return (
         <div className="SearchForm mb-4">
             <form className="form-inline" onSubmit={handleSubmit}>
                 <input 
                    className="form-control form-control-lg flex-grow-1"
                    name="searchTerm"
                    placeholder="Enter a search term"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-lg btn-primary">
                    Submit
                </button>
             </form>
         </div>
     );
 }

 export default SearchForm;