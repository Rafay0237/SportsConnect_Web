import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhotoUpload from "./components/PhotoUpload";
import { FormFailure, postMatchSchema } from "./components/validation";
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/store';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import API from "../services/Api";


export default function PostMatchPage() {
  const [imageUrls, setImageUrls] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const {currentUser,token} = useSelector(selectUser);
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    control,
    setValue,   
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postMatchSchema),
    defaultValues: {
      userId: currentUser._id,
      teamSize: 7,
      images: [],
    },
  });

  const onSubmit = async(formData) => {
    setLoading(true);
    setErrorMessage(null);

   try {
    const {data} = await API.post("/match", formData,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }); 
    
    if(!data.success){
       setErrorMessage(data.message)
       return
      }
      toast.success(data.message)
      navigate(-1)
    } catch (error) {
      console.log(error.message)
    setErrorMessage(error.response?.data?.message || "Some Error Occured, Kindly try again later."); 
  } finally {
    setLoading(false);
  }

  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    const urls = files.map((file) => URL.createObjectURL(file));
  
    const updatedImages = [...imageUrls, ...urls].slice(0, 5); 
  
    setImageUrls(updatedImages);
    setValue("images", updatedImages); 
  };

  const removeImage=(indexClicked)=>{
    const updatedImages = imageUrls.filter((__,index)=>index!==indexClicked)
    setImageUrls(updatedImages);
    setValue("images", updatedImages); 
  }
  
  return (
    <div className="bg-gradient-to-r from-[#4d7cd9] to-[#744343] py-16 px-4">
    <div className="max-w-3xl mx-auto border rounded-lg bg-white overflow-hidden p-4 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input id="title" {...register("title")} className={`form-input ${errors.title && "!border-red-700"}`} />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input id="date" {...register("date")} placeholder="DD/MM/YYYY" type="date" className={`form-input ${errors.date && "!border-red-700"}`} />
            {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <input id="time" {...register("time")} placeholder="HH:MM" type="time" className={`form-input ${errors.time && "!border-red-700"}`} />
            {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="place" className="block text-sm font-medium text-gray-700 mb-2">
            Place
          </label>
          <input id="place" {...register("place")} className={`form-input ${errors.place && "!border-red-700"}`} />
          {errors.place && <p className="mt-1 text-sm text-red-600">{errors.place.message}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <input id="city" {...register("city")} className={`form-input ${errors.city && "!border-red-700"}`} />
          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input id="location" {...register("location")} className={`form-input ${errors.location && "!border-red-700"}`} />
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>}
        </div>

        <div>
          <label htmlFor="googleMapLink" className="block text-sm font-medium text-gray-700 mb-2">
            Google Map Link
          </label>
          <input id="googleMapLink" {...register("googleMapLink")} className={`form-input ${errors.googleMapLink && "!border-red-700"}`} />
          {errors.googleMapLink && <p className="mt-1 text-sm text-red-600">{errors.googleMapLink.message}</p>}
        </div>

        <div>
          <label htmlFor="game" className="block text-sm font-medium text-gray-700 mb-2">
            Game
          </label>
          <input id="game" {...register("game")} className={`form-input ${errors.game && "!border-red-700"}`} />
          {errors.game && <p className="mt-1 text-sm text-red-600">{errors.game.message}</p>}
        </div>

        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
            Team Size
          </label>
          <Controller
            name="teamSize"
            control={control}
            render={({ field }) => (
              <input
                id="teamSize"
                type="number"
                {...field}
                onChange={(e) => field.onChange(parseInt(e.target.value))}
                className={`form-input ${errors.teamSize && "!border-red-700"}`}
              />
            )}
          />
          {errors.teamSize && <p className="mt-1 text-sm text-red-600">{errors.teamSize.message}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <input id="category" {...register("category")} className={`form-input ${errors.category && "!border-red-700"}`} />
          {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
        </div>

        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-2">
            Images
          </label>
         <PhotoUpload handleImageUpload={handleImageUpload} imageUrls={imageUrls} removeImage={removeImage} errors={errors}/>
        </div>

        <div>
        <FormFailure message={errorMessage}/>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-800 hover:bg-[#5c333f] transition duration-500 mt-4"
        >
          {loading ? <Loader/> : "Post Match"}
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}
