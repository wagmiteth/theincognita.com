// components/TableHomepageDesktop.js
import React, { useEffect, useState } from "react";
import TableName from "./TableName";
import TableMission from "./TableMission";
import TableLocations from "./TableLocations";
import TableSocial from "./TableSocial";
import TableCTA from "./TableCTA";
import SortingLocation from "./SortingLocation";
import SortingSocial from "./SortingSocial";
import SortingTags from "./SortingTags";
import { fetchTableNames } from "../utils/fetchAirtableData";
import TableTags from "./TableTags";
import RenderGrid from "./RenderGrid";

export default function TableHomepageDesktop() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSocialFilters, setSelectedSocialFilters] = useState([]);
  const [selectedTagsFilters, setSelectedTagsFilters] = useState([]);
  const [selectedLocationFilters, setSelectedLocationFilters] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);
  const [sortDirection, setSortDirection] = useState("desc");
  const [uniqueTags, setUniqueTags] = useState([]);

  const gridColumns =
    "minmax(180px, 1fr) minmax(150px, 2fr) minmax(120px, 1fr) repeat(2, minmax(50px, 1fr)) 56px";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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

      // Extract unique tags
      const tags = new Set();
      data.forEach((item) => {
        if (Array.isArray(item.tags)) {
          item.tags.forEach((tag) => tags.add(tag.trim()));
        }
      });
      setUniqueTags([...tags]);

      setIsLoading(false);
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

      if (selectedTagsFilters.length > 0) {
        filtered = filtered.filter((item) =>
          selectedTagsFilters.some(
            (filter) =>
              item.tags &&
              item.tags.some(
                (tag) => tag.trim().toLowerCase() === filter.toLowerCase()
              )
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
  }, [
    selectedSocialFilters,
    selectedTagsFilters,
    selectedLocationFilters,
    tableData,
  ]);

  const handleSocialFilterChange = (selectedItems) => {
    setSelectedSocialFilters(selectedItems);
  };

  const handleTagsFilterChange = (selectedItems) => {
    setSelectedTagsFilters(selectedItems);
  };

  const handleLocationFilterChange = (selectedItems) => {
    setSelectedLocationFilters(selectedItems);
  };

  const handleFollowerSort = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      // Convert 'K' values back to numbers for sorting
      const aFollowers = parseFloat(a.followers.replace("K", "")) || 0;
      const bFollowers = parseFloat(b.followers.replace("K", "")) || 0;

      if (sortDirection === "desc") {
        return bFollowers - aFollowers;
      } else {
        return aFollowers - bFollowers;
      }
    });
    setFilteredData(sortedData);
    setSortDirection(sortDirection === "desc" ? "asc" : "desc");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hidden lg:block mx-auto mt-12 max-w-1100  ">
      {/* 1. Sorting row */}
      <div
        className="grid grid-cols-6 gap-3 p-3 bg-background"
        style={{ gridTemplateColumns: gridColumns }}
      >
        <span className="flex items-center">
          <h3></h3>
        </span>

        <span></span>
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
          <SortingTags
            tags={uniqueTags}
            onSelectedItemsChange={handleTagsFilterChange}
          />
        </span>
        <span></span>
      </div>

      {/* 2. Header row */}
      <div
        className="grid grid-cols-6 gap-3 p-3 mt-4 bg-white border-[2.5px]"
        style={{ gridTemplateColumns: gridColumns }}
      >
        <span>
          <h3>Name</h3>
        </span>
        <span>
          <h3>Mission</h3>
        </span>
        <span>
          <h3>Location</h3>
        </span>
        <span>
          <h3>Social</h3>
        </span>
        <span>
          <h3>Tags</h3>
        </span>
        <span>
          <h3>Apply</h3>
        </span>
      </div>
      {/* 3. Info rows */}
      {filteredData.map((data, index) => (
        <div
          key={index}
          className="grid grid-cols-6 gap-3 p-3 mt-4 bg-white border-[2.5px] rounded-md shadow-custom2"
          style={{ gridTemplateColumns: gridColumns }}
        >
          {" "}
          <span>
            <TableName
              name={data.name}
              logo={data.logoURL}
              linkUrl={data.url}
            />
          </span>
          <span>
            <TableMission mission={data.mission} />
          </span>
          <span>
            <TableLocations baseLocations={data.baseLocations} />
          </span>
          <span>
            <TableSocial
              linkUrl={data.url}
              xUrl={data.x}
              discordUrl={data.discord}
              xFollowers={data.xFollowers}
              discordMembers={data.discordMembers}
            />
          </span>
          <span>
            <TableTags baseTags={data.tags} />
          </span>
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
