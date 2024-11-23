import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaComments,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import API from "../services/Api";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import ImageSlider from "./components/ImageSlider";

const MatchDisplay = () => {
  const { matchId } = useParams();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getMatch = async () => {
      try {
        setMatch(null);
        let { data } = await API.get("match/" + matchId);
        if (!data.success) {
          toast.error("Some error occurred");
          setErrorMessage("Some error occurred");
          return;
        }
        setMatch(data.match);
      } catch (error) {
        console.log(error.message);
        setErrorMessage(`Some error occurred`);
      }
      setLoading(false);
    };

    getMatch();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % match.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + match.images.length) % match.images.length
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] w-full">
        <Loader size={8} />
      </div>
    );
  }

  if (errorMessage || !match) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] w-full">
        <p className="font-semibold text-2xl">{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className='bg-gradient-to-r from-[#4d7cd9] via-slate-700 to-[#744343] py-20 px-0 sm:px-4'>  
      <div className="max-w-3xl mx-auto shadow-lg border rounded-none sm:rounded-lg overflow-hidden bg-white">
        <div className="p-6 sm:p-8">

          <ImageSlider images={match.images}/>

          <h2 className="text-xl sm:text-2xl font-bold mb-4">{match.title}</h2>
          <div className="flex gap-4 mb-4 ">
            <div className="space-y-4 w-2/3 sm:w-1/2 ">
              <div className="flex items-center">
                <FaCalendar className="size-4 mr-2 text-gray-600" />
                <span>{match.date}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="size-[18px] mr-2 text-gray-600 min-w-5" />
                <p className="text-sm sm:text-medium text-wrap">
                  {match.location}
                </p>
              </div>
            </div>

            <div className="space-y-4 w-1/3 sm:w-1/2 ">
              <div className="flex items-center">
                <FaClock className="size-4 mr-2 text-gray-600" />
                <span>{match.time}</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="size-5 mr-2 text-gray-600" />
                <span>{match.teamSize} aside</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold mb-1">Location</h3>
              <span className="text-xs rounded-full font-bold bg-slate-800 p-1.5 px-4 text-white hover:opacity-90">
                {match.place}
              </span>
            </div>
            <a
              href={match.googleMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 font-bold underline text-sm sm:text-medium"
            >
              google map link
            </a>
            <p className="my-1 text-sm sm:text-medium">{match.location}</p>
            <p className="text-sm sm:text-medium">{match.city}</p>
          </div>
          <div className="flex justify-end items-center mt-4">
            <button className="bg-[rgba(26,45,77,0.91)] hover:bg-[#9e3756de]  text-white font-bold py-2 px-4 rounded flex items-center transition duration-700 ">
              <FaComments className="mr-2" />
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDisplay;
