import { Link, useParams,useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";

const items = [
  { title: "All", link: "" },
  { title: "Near Me", link: "near-me" },
  { title: "Friendlies", link: "friendlies" },
  { title: "Tournaments", link: "tournaments" },
  { title: "Leagues", link: "leagues" }
];

const FilterNavbar = () => {
  const params = useParams();
  const navigate=useNavigate();
  const activeItem = params.searchType || ""; 

  return (
    <div className="flex justify-between items-center mb-8 py-4">
    <ul className="hidden sm:flex gap-8  overflow-auto scrollbar-hide px-4 sm:px-0">
      {items.map((item) => (
        <Link key={item.link} to={`/find/${item.link}`}>
          <li
            className={`cursor-pointer font-bold pb-3 text-nowrap relative group min-w-fit ${
              item.link === activeItem && "text-blue-500"
            }`}
          >
            {item.title}
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transform transition-transform duration-500 origin-left
              ${item.link === activeItem ? "scale-x-100" : "scale-x-0"} 
              group-hover:scale-x-100`}
            ></span>
          </li>
        </Link>
      ))}
    </ul>

    <div className="flex gap-4 sm:hidden">
          <Dropdown >
            <DropdownTrigger>
              <Button className="border bg-white">
                {activeItem ? activeItem.toUpperCase() : "All"}
                <IoMdArrowDropdown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu >
              {items.map((item) => (
                <DropdownItem
                  key={item.title}
                  onClick={()=>navigate(`/find/${item.link}`)}
                  >
                  {item.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
      </div>

    <Link to={"/match/post"} onClick={()=>{localStorage.setItem('previousPage', "/match/post")}}>
    <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-800 hover:opacity-95 ">
      Post Match
    </button>
    </Link>
    </div>
  );
};

export default FilterNavbar;
