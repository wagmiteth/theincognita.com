// components/TableHomepage.js
import React, { useEffect, useState } from "react";
import RenderGrid from "./RenderGrid";
import TableName from "./TableName";
import TableMission from "./TableMission";
import TableLocations from "./TableLocations";
import TableSocial from "./TableSocial";
import TableToken from "./TableToken";
import TableCTA from "./TableCTA";
import SortingLocation from "./SortingLocation";
import SortingSocial from "./SortingSocial";
import SortingToken from "./SortingToken";
import { fetchTableNames } from "../utils/fetchAirtableData";

export default function TableHomepage() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSocialFilters, setSelectedSocialFilters] = useState([]);
  const [selectedTokenFilters, setSelectedTokenFilters] = useState([]);
  const [selectedLocationFilters, setSelectedLocationFilters] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchTableNames();
      setTableData(data);
      setFilteredData(data);

      // Extract unique locations
      const locations = new Set();
      data.forEach(item => {
        if (Array.isArray(item.baseLocations)) {
          item.baseLocations.forEach(location => locations.add(location));
        }
      });
      setUniqueLocations([...locations]);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = tableData;

      if (selectedSocialFilters.length > 0) {
        filtered = filtered.filter((item) =>
          selectedSocialFilters.some((filter) =>
            item[filter.toLowerCase()]
          )
        );
      }

      if (selectedTokenFilters.length > 0) {
        filtered = filtered.filter((item) =>
          selectedTokenFilters.some((filter) =>
            item[filter.toLowerCase()]
          )
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
  }, [selectedSocialFilters, selectedTokenFilters, selectedLocationFilters, tableData]);

  const handleSocialFilterChange = (selectedItems) => {
    setSelectedSocialFilters(selectedItems);
  };

  const handleTokenFilterChange = (selectedItems) => {
    setSelectedTokenFilters(selectedItems);
  };

  const handleLocationFilterChange = (selectedItems) => {
    setSelectedLocationFilters(selectedItems);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto mt-12">
      <RenderGrid style={{ gridTemplateColumns: "190px 220px 140px auto auto 56px" }}>
        <span className="flex items-center">
          <h3>Node filter</h3>
        </span>
        <span></span>
        <span><SortingLocation locations={uniqueLocations} onSelectedItemsChange={handleLocationFilterChange} /></span>
        <span>
          <SortingSocial onSelectedItemsChange={handleSocialFilterChange} />
        </span>
        <span>
          <SortingToken onSelectedItemsChange={handleTokenFilterChange} />
        </span>
        <span></span>
      </RenderGrid>

      <div className="container">
      <RenderGrid additionalClasses="bg-white border-[2.5px]" style={{ gridTemplateColumns: "190px 220px 140px auto auto 56px" }}>
        <span><h3>Name</h3></span>
        <span><h3>Mission</h3></span>
        <span><h3>Location</h3></span>
        <span><h3>Social</h3></span>
        <span><h3>Token</h3></span>
        <span><h3>Apply</h3></span>
      </RenderGrid>
      </div>

      <div className="container">
      {filteredData.map((data, index) => (
        <RenderGrid key={index} additionalClasses="mt-4 bg-white border-[2.5px] rounded-md shadow-custom2">
          <span><TableName name={data.name} logo={data.logoURL} linkUrl={data.url} /></span>
          <span><TableMission mission={data.mission} /></span>
          <span><TableLocations baseLocations={data.baseLocations} /></span>
          <span><TableSocial linkUrl={data.url} xUrl={data.x} discordUrl={data.discord} xFollowers={data.xFollowers} discordMembers={data.discordMembers} /></span>
          <span><TableToken openSea={data.opensea} blur={data.blur} floorPrice={data.floorPrice} /></span>
          <span><TableCTA application={data.application} /></span>
        </RenderGrid>
      ))}
            </div>

      <div className="flex justify-center mt-8">
        {/* Add pagination controls here */}
      </div>
    </div>
  );
}
