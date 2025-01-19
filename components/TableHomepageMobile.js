// components/TableHomepageMobile.js
import React, { useEffect, useState } from "react";
import TableNameMobile from "./TableNameMobile";
import TableMissionMobile from "./TableMissionMobile";
import TableLocationsMobile from "./TableLocationsMobile";
import TableSocialMobile from "./TableSocialMobile";
import TableFollowers from "./TableFollowers";
import TableCTA from "./TableCTA";
import SortingLocation from "./SortingLocation";
import SortingSocial from "./SortingSocial";
import SortingToken from "./SortingToken";
import { fetchTableNames } from "../utils/fetchAirtableData";

export default function TableHomepageMobile() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSocialFilters, setSelectedSocialFilters] = useState([]);
  const [selectedTokenFilters, setSelectedTokenFilters] = useState([]);
  const [selectedLocationFilters, setSelectedLocationFilters] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);
  const [sortDirection, setSortDirection] = useState('desc');

  const gridColumns = "auto auto";


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTableNames();
      setTableData(data);
      setFilteredData(data);

      // Extract unique locations
      const locations = new Set();
      data.forEach((item) => {
        if (Array.isArray(item.baseLocations)) {
          item.baseLocations.forEach((location) => locations.add(location));
        }
      });
      setUniqueLocations([...locations]);

    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = tableData;

      if (selectedSocialFilters.length > 0) {
        filtered = filtered.filter((item) =>
          selectedSocialFilters.some((filter) => item[filter.toLowerCase()])
        );
      }

      if (selectedTokenFilters.length > 0) {
        filtered = filtered.filter((item) =>
          selectedTokenFilters.some((filter) => item[filter.toLowerCase()])
        );
      }

      if (selectedLocationFilters.length > 0) {
        filtered = filtered.filter((item) =>
          selectedLocationFilters.some((filter) =>
            item.baseLocations.includes(filter)
          )
        );
      }

      setFilteredData(filtered);
    };

    applyFilters();
  }, [
    selectedSocialFilters,
    selectedTokenFilters,
    selectedLocationFilters,
    tableData,
  ]);

  const handleSocialFilterChange = (selectedItems) => {
    setSelectedSocialFilters(selectedItems);
  };

  const handleTokenFilterChange = (selectedItems) => {
    setSelectedTokenFilters(selectedItems);
  };

  const handleLocationFilterChange = (selectedItems) => {
    setSelectedLocationFilters(selectedItems);
  };

  const handleFollowerSort = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortDirection === 'desc') {
        return b.totalFollowers - a.totalFollowers;
      } else {
        return a.totalFollowers - b.totalFollowers;
      }
    });
    setFilteredData(sortedData);
    setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
  };

  return (
    <div className="lg:hidden mx-auto mt-12" style={{ maxWidth: '1100px' }}>

      {/* 1. Sorting row */}
      <div className="flex justify-between bg-background">
        <span>
          <SortingLocation
            locations={uniqueLocations}
            onSelectedItemsChange={handleLocationFilterChange}
          />
        </span>
        <span>
          <SortingSocial onSelectedItemsChange={handleSocialFilterChange} />
        </span>
        <span>
          <button
            onClick={handleFollowerSort}
            className="bg-white shadow-custom2 p-2 flex items-center justify-between
              rounded-lg tracking-wider border-[2.5px] border-black 
              transition-all duration-200 hover:translate-x-0.5 
              hover:translate-y-0.5 hover:shadow-hover"
          >
            <span>Followers</span>
            <span className="pl-2">{sortDirection === 'desc' ? '↓' : '↑'}</span>
          </button>
        </span>
      </div>

{/* 3. Info rows */}
        {filteredData.map((data, index) => (
                  <div key={index} className="grid grid-cols-6 gap-3 p-3 mt-4 bg-white border-[2.5px] rounded-md shadow-custom2 justify-between" style={{ gridTemplateColumns: gridColumns }}>

            {" "}
            <div className="flex flex-col">
              <span className="w-full sm:w-auto">
                <TableNameMobile
                  name={data.name}
                  logo={data.logoURL}
                  linkUrl={data.url}
                />
              </span>
              <span className="w-full sm:w-auto">
                <TableMissionMobile mission={data.mission} />
              </span>
              <span className="w-full sm:w-auto">
                <TableLocationsMobile baseLocations={data.baseLocations} />
              </span>
              <span className="w-full sm:w-auto">
                <TableSocialMobile
                  linkUrl={data.url}
                  xUrl={data.x}
                  discordUrl={data.discord}
                  xFollowers={data.xFollowers}
                  discordMembers={data.discordMembers}
                />
              </span>
            </div>
            <span>
              <TableCTA application={data.application} />
            </span>
          </div>
        ))}

      <div className="flex justify-center mt-8">
        {/* Add pagination controls here */}
      </div>
    </div>
  );
}
