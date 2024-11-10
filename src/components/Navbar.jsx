// import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
// import SearchBar from "./SearchBar";
import NavDrawer from "./NavDrawer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { navData } from "../assets/lib/navData";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSolidMessageRoundedDots } from "react-icons/bi"
import { useDispatch } from "react-redux";
import { signOut } from "../redux/user/userSlice";

const dropdownItems = [
  { title: "Profile", link: "/profile" },
  { title: "My Team", link: "/team" },
  { title: "Messages", link: "/messages" },
  { title: "Settings", link: "/settings" },
];

const Navbar = () => {
  // const [searchVisibility, setSearchVisibility] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between bg-gradient-to-b from-[#0E1C37] to-[#292929] items-center h-16 border-gray-100 px-3 sm:px-7 lg:px-16 relative text-white">
      <div className="block sm:hidden">
        <NavDrawer />
      </div>

      <Link to="/">
        <p className="text-lg sm:text-[22px] font-bold font-mono">
          Sports Connect
        </p>
      </Link>
      {/* {!searchVisibility && ( */}
        <ul className="hidden md:flex gap-4 sm:gap-8 font-semibold text-[15px] ">
          {navData.map((data, index) => (
            <Link to={data.link} key={index}>
              <li className="relative group hover:cursor-pointer ">
                {data.title}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </li>
            </Link>
          ))}
        </ul>
      {/* )} */}

      <div className="flex gap-4 items-center">
        {/* <SearchBar
          searchVisibility={searchVisibility}
          setSearchVisibility={setSearchVisibility}
        /> */}
        {/* <Link to="/messages"> */}
        <BiSolidMessageRoundedDots className="size-6 text-white cursor-pointer"/>
        {/* </Link> */}
        <div className="flex gap-4 sm:gap-8  items-center">
          {currentUser ? (
            <Dropdown>
              <DropdownTrigger>
                <span className="flex items-center cursor-pointer">
                  <FaRegUser className="h-5 w-5" />
                  <IoMdArrowDropdown className="ml-1" />
                </span>
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions">
                {dropdownItems.map((item) => (
                  <DropdownItem key={item.title} textValue={item.title}>
                    <Link to={item.link}>{item.title}</Link>
                  </DropdownItem>
                ))}
                <DropdownItem
                  className="text-danger"
                  color="danger"
                  textValue="Sign Out"
                >
                  <p onClick={() => dispatch(signOut())}>Sign Out</p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link
              to={location.pathname === "/login" ? "sign-up" : "/login"}
              className="bg-white text-[#172532] text-[15px] hover:scale-110  px-4 py-1.5 hover:rotate-6 transition duration-700 "
            >
              {location.pathname === "/login" ? "Sign-up" : "Login"}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
