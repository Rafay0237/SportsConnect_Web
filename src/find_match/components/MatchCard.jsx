import React from "react";

const MatchCard = ({match}) => {
  
  return (
    <div className="bg-white rounded-lg shadow p-4 cursor-pointer hover:scale-[1.02] transition duration-300">
      <div className="flex flex-row items-start gap-8">
        <img
          src={match.images[0]}
          alt={match.title}
          className="h-36 w-36 rounded  "
        />
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start">
            <div>
              <h2 className="text-medium sm:text-lg font-semibold mb-2">
                {match.title}
              </h2>
              <p className="text-sm text-gray-600 ">{match.date}</p>
              <p className="text-sm text-gray-600 py-1">
                {match.location}
              </p>
              <p className="text-sm text-gray-600">
              {match.place}
              </p>
            </div>
            <div className="h-8 sm:h-36 flex items-center text-gray-600 font-bold">
              {`< ${match.distance} miles`}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-0 sm:ml-44 flex items-center space-x-2 border-t pt-4">
        <img
          src={match.categoryImg}
          alt={match.game}
          className="w-6 h-6 rounded object-cover"
        />
        <span className="text-sm font-medium">{match.game}</span>
        <span className="text-xs text-gray-500 ">{match.teamSize} aside</span>
      </div>
    </div>
  );
};

export default MatchCard;
