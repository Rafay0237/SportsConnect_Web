import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const OAuth = () => {
  return (
    <div className="w-full">
     <form className="flex gap-3 w-full" >

        <div className="w-1/2 border border-gray-200 p-[10px] rounded-sm hover:cursor-pointer hover:bg-[#F5F5F5]" >
            <FcGoogle className="h-5 w-5 mx-auto " />
        </div>

        <div className="w-1/2 border border-gray-200 p-[10px] rounded-sm hover:cursor-pointer hover:bg-[#F5F5F5]" >
            <FaFacebook className="h-5 w-5 mx-auto text-[#1877F2]" />
        </div>
     </form>
    </div>
  );
};

export default OAuth;
