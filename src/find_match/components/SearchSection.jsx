import {useState} from 'react'
import { IoSearchOutline } from "react-icons/io5";


const SearchSection = ({setMatchesList}) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search === "") return;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className=" bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 ">
        <div className="min-h-[40vh] flex flex-col items-center justify-center bg-grid-dark w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase ">
            Start Your Search
          </h1>
          <span className="w-20 h-1 bg-[#FF6694] mb-4"></span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search any tournament, game..."
              className="min-w-72 sm:min-w-80 lg:min-w-96 bg-gray-100 p-3  pr-3 md:pr-6 rounded-full text-[14px] focus:outline-none
            placeholder:text-gray-800 pl-12 text-black"
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearch(e.target.value)}
            ></input>

            <IoSearchOutline
              className="absolute text-black left-5 top-1/2 -translate-y-1/2 text-xl  hover:cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
  )
}

export default SearchSection
