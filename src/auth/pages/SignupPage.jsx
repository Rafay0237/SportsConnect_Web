import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import SignupForm from "../components/SignupForm";
import authImage from '/src/assets/img/Auth4.jpeg';


const SignUpPage = () => {

  return (
    <div
      className=" bg-cover bg-center py-8 "
      style={{ backgroundImage: `url(${authImage})` }}
    >
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex rounded-lg p-0 sm:p-5 w-full max-w-[450px] md:max-w-[500px] lg:max-w-[550px]">
        
        <div className="w-full bg-white p-6 rounded-md mx-4 sm:mx-0">
          <div className="flex flex-col justify-center items-center gap-2 mb-5">
            <h1 className="text-[28px] font-semibold ">Sports Connect</h1>
            <h1 className="text-[1.2rem] text-[#737373]  ">Create an Account</h1>
          </div>

          <SignupForm />

          <div className="flex flex-col items-center justify-center gap-5 mt-4">
            <OAuth />
            <div className="flex gap-2 text-sm text-gray-700 font-semibold">
              <p>Have an account?</p>
              <Link to={"/login"}>
                <h2 className="text-gray-900 hover:cursor-pointer">Login</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="hidden lg:block relative ">
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/standard.0638957.png"
            className="object-cover h-[90vh] w-[350px] sm:w-[400px] lg:w-[450px] rounded-r-md"
            alt="login"
          />

          <div className="absolute top-7 left-5 text-white space-y-5 font-merriweather">
            <p className="text-2xl mb-3">
              Unlock Your Style, Join Our Fashion Store
            </p>
            <p>Step into the latest trends with just a click!</p>
            <p>Your wardrobe awaits – sign in now.</p>
            <p>Fashion-forward? Let’s get started!</p>
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default SignUpPage;
