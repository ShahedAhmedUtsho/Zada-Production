import React, { useState, useEffect } from "react";

const CountryGrid = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemPerPage = 8;
  const filterCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()),
  );

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItems = filterCountries.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filterCountries.length / itemPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../public/countrys.json"); // Assuming countries.json is in public folder
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(filterCountries);

    console.log(search);
  };

  return (
    <>
      <form className="max-w-96 mx-auto" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 text-xl bg-transparent border  rounded-md"
          type="text"
          name="search"
        />
        <button className="border p-2 text-xl rounded-md ml-3 " type="submit">
          search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4  mx-auto max-w-7xl px-4 py-8">
        {currentItems.map((country, index) => (
          <div key={index} className=" border rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">{country.name}</h2>
            <p>
              <strong>Continent:</strong> {country.continent}
            </p>
            <p>
              <strong>Independence Date:</strong> {country.independence_date}
            </p>
            <p>
              <strong>Leader:</strong> {country.leader}
            </p>
            <p>
              <strong>Area (km²):</strong> {country.area_km2}
            </p>
            <p>
              <strong>Population:</strong> {country.population}
            </p>
            <p>
              <strong>Rank by Area:</strong> {country.rank_by_area}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap max-w-[90vw] mx-auto bg-gree gap-5">
        <button
          disabled={currentPage === 1}
          className="p-2 text-xs  disabled:opacity-35  rounded-md border-2 "
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`border py-1 ${currentPage === index + 1 && "  backdrop-blur-lg bg-red-600 bg-opacity-30 border-red-500"} bg-transparent  rounded-md px-3`}
            onClick={() => {
              setCurrentPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          className="p-2 disabled:opacity-35 rounded-md border-2 "
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          next
        </button>
      </div>
    </>
  );
};

export default CountryGrid;
