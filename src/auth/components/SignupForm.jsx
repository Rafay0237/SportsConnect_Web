import { useState } from "react";
import { FormFailure, FormSuccess } from "./validation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "./validation";
import toast from "react-hot-toast";
import VerifyOtp from "./VerifyOtp";
import API from "../../services/Api";
import Loader from "../../components/Loader"


const SignupForm = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showOtpForm,setShowOtpForm]=useState(null)
  
    const methods = useForm({
      resolver: zodResolver(signUpSchema),
      defaultValues: {
        email: "",
        userName:"",
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
        const {data} = await API.post("user/sign-up", formData);
        if(!data.success){
          setErrorMessage(data.message || "Some Error Occurred")
          return
        }
          setSuccessMessage("Signup successful");
           toast.success("Account Created")
           setShowOtpForm(methods.getValues("email"));
        
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "Signup failed"); 
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
            <label className="text-[15px] font-[500]">Email</label>
            <input
              type="email"
              placeholder="John@gmail.com"
              {...register("email")} 
              className={`p-2 border border-gray-200 text-[15px] placeholder:text-[#737373] rounded-md w-full ${
                errors.email ? "border-red-700" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-[12px] font-semibold">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="text-[15px] font-[500]">Username</label>
            <input
              type="name"
              placeholder="John"
              {...register("userName")} 
              className={`p-2 border border-gray-200 text-[15px] placeholder:text-[#737373] rounded-md w-full ${
                errors.userName ? "border-red-700 " : ""
              }`}
            />
            {errors.userName && (
              <p className="text-red-600 text-[12px] font-semibold">{errors.userName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-[15px] font-[500]">Password</label>
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
            : "Signup"}
          </button>
  
          <FormSuccess message={successMessage} />
          <FormFailure message={errorMessage} />
        </form>
        {showOtpForm &&
        <VerifyOtp setShowOtpForm={setShowOtpForm} email={showOtpForm} />}
      </FormProvider>
    );
  };
  
  export default SignupForm;