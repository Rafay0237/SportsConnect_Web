import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({searchVisibility,setSearchVisibility}) => {
    const [search,setSearch]=useState("")
    const navigate=useNavigate()

    const handleSearch=()=>{
      if(search==="")
      return
      navigate("/search/"+search)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        handleSearch()
      }
    };

  return (
    <>
    {searchVisibility &&
      <div className="absolute left-0 w-full top-full 
       py-4 px-[5vw] border-gray-100 border-b-2 sm:border-none md:block md:relative md:inset-0 md:p-0 md:w-auto md:show z-10"
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full  lg:min-w-64 bg-gray-100 p-2.5  pl-6 pr-[12%] md:pr-6 rounded-full text-[14px] 
          placeholder:text-gray-800 md:pl-12 text-black"
          onKeyDown={handleKeyDown}
          onChange={(e)=>setSearch(e.target.value)} 
        ></input>
        
        <IoSearchOutline
          className="absolute right-[10%] text-black md:left-5 top-1/2 -translate-y-1/2 text-xl  hover:cursor-pointer"
          onClick={handleSearch}
          />
      </div>}
      
      <div className="flex items-center gap-3 md:gap-6  ">
        <button
          className=" h-9 w-9 rounded-full text flex items-center justify-center"
          onClick={() => setSearchVisibility(!searchVisibility)}
        >
          {searchVisibility ?
          <IoMdClose className="h-6 w-6 hover:cursor-pointer"/>
          :
          <IoSearchOutline className="h-6 w-6 hover:cursor-pointer"/>}
        </button>
      </div>
      
    </>
  )
}

export default SearchBar
