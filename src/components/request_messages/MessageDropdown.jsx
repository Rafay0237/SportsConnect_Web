import { useEffect, useState } from "react";
import {
  GiChatBubble,
  GiPerspectiveDiceSixFacesThree,
} from "react-icons/gi";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/store";
import API from "../../services/Api";
import toast from "react-hot-toast";
import { userRequests } from "../../assets/lib/requestsData";
import RequestItem from "./components/RequestItem";
import DropdownMenu from "./components/DropdownMenu";
import LoadingOverlay from "./components/loadingOverlay";



export default function MessageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState(userRequests);
  const { currentUser, token } = useSelector(selectUser);

  const getUserRequests = async () => {
    setLoading(true);
    try {
      const { data } = await API.get(`request/${currentUser._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) setRequests(data.requests);
    } catch (error) {
      console.error("Error fetching user requests:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (id) => {
    setLoading(true);
    try {
      const response = await API.put(
        `request/${id}`,
        { status: "accepted" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setRequests((prev) => prev.filter((req) => req._id !== id));
        toast.success(response.data.message);
      } else throw new Error(response.data.message || "Something went wrong");
    } catch (error) {
      console.error("Error updating request status:", error);
      toast.error(error.response?.data?.message || "Failed to accept request");
    } finally {
      setLoading(false);
    }
  };

  const handleDecline = async (id) => {
    setLoading(true);
    try {
      const response = await API.put(
        `request/${id}`,
        { status: "declined" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setRequests((prev) => prev.filter((req) => req._id !== id));
        toast.success(response.data.message);
      } else throw new Error(response.data.message || "Something went wrong");
    } catch (error) {
      console.error("Error updating request status:", error);
      toast.error(error.response?.data?.message || "Failed to decline request");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserRequests();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
      >
        <GiChatBubble className="size-6 text-white cursor-pointer" />
        {requests.length > 0 && (
          <p className="bg-red-500 text-white flex items-center justify-center rounded-full size-4 text-[10px] absolute top-0 right-1">
            {requests.length}
          </p>
        )}
      </button>
      <DropdownMenu isOpen={isOpen}>
        {requests.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-60">
            <GiPerspectiveDiceSixFacesThree className="size-16 text-black" />
            <p className="px-4 py-2 text-gray-700">No match requests, currently</p>
          </div>
        ) : (
          requests.map((request) => (
            <RequestItem
              key={request._id}
              request={request}
              onAccept={handleAccept}
              onDecline={handleDecline}
            />
          ))
        )}
        <LoadingOverlay loading={loading} />
      </DropdownMenu>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
