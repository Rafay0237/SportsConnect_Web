import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdCancel} from "react-icons/md";
import { useState } from "react";
import { filterOptions } from "../../assets/lib/filterData";

const Filter = ({ setMatchesList, matchesList }) => {
  const [resetData,__]=useState(matchesList)
  const [selectedFilters, setSelectedFilters] = useState({
    game: null,
    date: null,
    distance: null,
  });

  const handleFilter = (option, key) => {
    const updatedFilters = { ...selectedFilters, [key]: option.value };
    setSelectedFilters(updatedFilters);

    applyFilters(updatedFilters);
  };

  const applyFilters = (filters) => {
    let filteredData = matchesList;
    console.log(filters)
    // game filter
    if (filters.game) {
      filteredData = filteredData.filter(
        (match) => match.game === filters.game
      );
    }

    // Distance filter
    if (filters.distance) {
      filteredData = filteredData.filter(
        (match) => match.distance <= filters.distance
      );
    }

    // Date filter
    if (filters.date) {
      const filterDate = filters.date;
      filteredData = filteredData.filter((match) => {
        const matchDate = new Date(match.date);
        return matchDate <= filterDate;
      });
    }

    // Update the matches list
    setMatchesList(filteredData);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-between items-center mb-6 sm:mb-4 overflow-auto scrollbar-hide px-4 sm:px-0">
      <div className="flex gap-4">
        {filterOptions.map((filter) => (
          <Dropdown key={filter.title}>
            <DropdownTrigger>
              <Button className="border bg-white">
                {filter.title}
                <IoMdArrowDropdown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label={`${filter.title} Filter`}>
              {filter.opt.map((option) => (
                <DropdownItem
                  key={option.title}
                  onClick={() => handleFilter(option, filter.key)}
                >
                  {option.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ))}
      </div>

      <button className="hidden sm:inline-flex gap-2 border rounded-xl p-2.5 px-4 bg-white"
        onClick={()=>{setMatchesList(resetData)}}>
        <span className="text-sm text-nowrap">clear all</span>
        <MdCancel className="size-5" />
      </button>
    </div>
  );
};

export default Filter;
