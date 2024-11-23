import {GiCrossMark, GiCheckMark} from "react-icons/gi";

const RequestItem=({ request, onAccept, onDecline })=> {
    return (
      <div className="hover:bg-gray-100 rounded-lg">
      <div className="mx-4 py-4  border-b">
        <div className="flex">
          <img
            src={request.senderDp}
            alt={request.userName}
            className="h-10 w-10 rounded-full mr-3"
          />
          <div className="flex-1">
            <p className="font-semibold text-slate-900">{request.userName}</p>
            <p className="text-sm text-gray-600">{request.message}</p>
            <p className="text-xs text-gray-400">{request.time}</p>
          </div>
          <div className="flex space-x-2 h-fit mt-2.5">
            <button
              onClick={() => onAccept(request._id)}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full p-1"
            >
              <GiCheckMark className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDecline(request._id)}
              className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
            >
              <GiCrossMark className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }

export default RequestItem