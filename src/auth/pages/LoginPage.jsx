import { Link } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import OAuth from "../components/OAuth";
import authImage from '/src/assets/img/Auth4.jpeg';


const LoginPage = () => {
  return (
    <div
      className=" bg-cover bg-center"
      style={{ backgroundImage: `url(${authImage})` }}
    >
    <div className="flex h-screen justify-center items-center "
    >
      <div className="flex rounded-lg p-0 sm:p-5 w-full max-w-[450px] md:max-w-[500px] lg:max-w-[550px]">

        <div className="w-full bg-white p-6  rounded-md mx-4 sm:mx-0">
          <div className="flex flex-col justify-center items-center gap-2 mb-5">
            <h1 className="text-[28px] font-semibold ">Sports Connect</h1>
            <h1 className="text-[1.2rem] text-[#737373]  ">Welcome Back</h1>
          </div>

          <LoginForm />

          <div className="flex flex-col items-center justify-center gap-5 mt-4">
            <OAuth />
            <div className="flex gap-2 text-sm text-gray-700 font-semibold">
              <p>Don't have an account?</p>
              <Link to={"/sign-up"}>
                <h2 className="text-gray-900 hover:cursor-pointer">SignUp</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="hidden lg:block relative ">
          <img
            src={authImage}
            className="object-cover h-[90vh] w-[350px] sm:w-[400px] lg:w-[450px] rounded-r-md"
            alt="login"
          />

          <div className="absolute bottom-3 left-5 text-white font-semibold font-merriweather">
            <p className="text-xl mb-3">
              Connect with Sports Enthusiasts, Find Matches and Tournaments
            </p>
            <p>Discover local and international sports events with ease!</p>
            <p>Join now to start your sports journey.</p>
            <p>Ready to play? Let's get started!</p>
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
