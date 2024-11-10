import * as z from "zod";
import { HiOutlineExclamation } from "react-icons/hi";


export const postMatchSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    title: z.string().min(5, "Title must be at least 5 characters"),
    date: z
      .string(),
      // .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Date must be in DD/MM/YYYY format"),
    time: z.string().regex(/^\d{1,2}:\d{2}$/, "Time must be in HH:MM format"),
    place: z.string().min(1, "Place is required"),
    city: z.string().min(1, "City is required"),
    location: z.string().min(1, "Location is required"),
    googleMapLink: z.string().url("Must be a valid URL"),
    game: z.string().min(1, "Game is required"),
    teamSize: z.number().int().positive("Team size must be a positive integer"),
    category: z.string().min(1, "Category is required"),
    images: z
      .array(z.string().url("Must be a valid URL"))
      .min(1, "At least one image is required"),
  });

  export const FormFailure=({message})=>{
    if(!message) return null
return (
    <div className="bg-red-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-800">
     <HiOutlineExclamation className="h-5 w-5"/>
     <h2>{message}</h2>
    </div>
)
}

