import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { FormFailure, FormSuccess } from "./validation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./validation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/user/userSlice";
import VerifyOtp from "./VerifyOtp";
import Loader from "../../components/Loader"
import toast from "react-hot-toast";
import API from "../../services/Api";


const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showOtpForm,setShowOtpForm]=useState(null)
    const navigate=useNavigate()
    const dispatch=useDispatch()
  
    const methods = useForm({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = methods;
  
    const onSubmit = async (formData) => {
      setLoading(true);
      setErrorMessage(null);
      setSuccessMessage(null);

     try {
      const {data} = await API.post("user/login", formData); 
      
      if(!data.success){
        setErrorMessage(data.message || "Some Error Occurred")
        return
      }
        if(!data.user.isVerified){
          setShowOtpForm(methods.getValues("email"));
          return
        }
        dispatch(loginSuccess({ user: data.user, token: data.token }));
        setSuccessMessage("Login successful");
        toast.success("Welcome Back, "+data.user.userName)
       
        const previousPage = localStorage.getItem('previousPage');
        
        if (previousPage) {
          setTimeout(()=>{navigate(previousPage)})
        } else {
          navigate('/'); 
        }
    } catch (error) {
      console.log(error)
      setErrorMessage(error.response?.data?.message || "Login failed"); 
    } finally {
      setLoading(false);
    }
  
    };
  
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <div className="space-y-2">
            <label className="block text-[15px] font-[500]">Email</label>
            <input
              type="email"
              placeholder="John@gmail.com"
              {...register("email")}
              className={`p-2 border border-gray-200 text-[15px] placeholder:text-[#737373] rounded-md w-full  ${
                errors.email ? "border-red-700" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-[12px] font-semibold">{errors.email.message}</p>
            )}
          </div>
  
          <div className="space-y-2">
            <label className="block text-[15px] font-[500]">Password</label>
            <input
              type="password"
              placeholder="******"
              {...register("password")} 
              className={`p-2 border border-gray-200 text-[15px] placeholder:text-[#737373] rounded-md w-full ${
                errors.password ? "border-red-700" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-600 text-[12px] font-semibold">
                {errors.password.message}
              </p>
            )}
          </div>
  
          <button
            className="bg-[#171717] text-white p-2 rounded-md hover:opacity-95 mt-2 text-[15px]"
            type="submit"
            disabled={loading}
          >
            {loading ? 
            <div className="flex gap-2 items-center justify-center">
            Loading
            <Loader variant="ghost"/>
            </div>
            : "Login"}
          </button>
  
          <FormSuccess message={successMessage} />
          <FormFailure message={errorMessage} />
        </form>
        {showOtpForm &&
        <VerifyOtp setShowOtpForm={setShowOtpForm} email={showOtpForm} />}
      </FormProvider>
    );
  };
  
  export default LoginForm;