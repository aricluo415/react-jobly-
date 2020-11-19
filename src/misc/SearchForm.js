import React, { useState, useEffect } from "react";

function SearchForm({ filters, filterSearch }) {
  const [searchFilters, setSearchFilters] = useState({});
  const [isLoading, setLoading] = useState(true);

  // initial render
  useEffect(function setFiltersOnMount() {
    setSearchFilters((filterData) => {
      filters.forEach((filter) => (filterData[filter] = ""));
      return { ...filterData };
    });
    setLoading(false);
  }, []);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSearchFilters((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    let filters = {};
    Object.keys(searchFilters).forEach((filter) => {
      if (searchFilters[filter] !== "") {
        filters[filter] = searchFilters[filter];
      }
    });
    filterSearch(filters);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          {filters.map((filter) => (
            <div key={filter}>
              <label htmlFor={`newBox-${filter}`}>{filter}</label>
              <input
                id={`newBox-${filter}}`}
                onChange={handleChange}
                name={filter}
                value={searchFilters[filter]}
              />
            </div>
          ))}
          <button className="NewStoryForm-addBtn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
