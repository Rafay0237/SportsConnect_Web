import React from 'react'

const TournamentCard = ({match}) => {
    
  return (
    <div className="bg-white rounded-lg shadow p-4 cursor-pointer hover:scale-[1.02] transition duration-300">
    <div className="flex flex-row items-start gap-8">
      <img
        src={match.image}
        alt={match.title}
        className="h-36 w-36 rounded  "
      />
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start">
          <div>
            <h2 className="text-medium sm:text-lg font-semibold mb-2">
              {match.title}
              {match.registrationOpen && (
                <span className="bg-green-500 text-white text-xs ml-0 sm:ml-4 my-4 sm:my-0 px-2 py-1 rounded-full block sm:inline-flex w-fit">
                  Registration Open
                </span>
              )}
            </h2>
            <p className="text-sm text-gray-600 ">{match.date}</p>
            <p className="text-sm text-gray-600 py-1">
              {match.location}
            </p>
            <p className="text-sm text-gray-600">
              {match.attendees} Attendees
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
        src="https://images.start.gg/images/videogame/17/image-20626d26aca9e7d5b243d594b499ee1a.jpg?ehk=1g1iB0oQlYu58BIODNjg0FgMS%2Bac4ZUyEKKUjBljecc%3D&ehkOptimized=9jpOsQIMFUMxgz4YCdZPe%2FwrsqQIo7ZM%2BiR6ogFlR%2Bw%3D"
        alt={match.game}
        className="w-6 h-6 rounded"
      />
      <span className="text-sm font-medium">{match.game}</span>
      <span className="text-xs text-gray-500 ">{match.gameVersion}</span>
    </div>
  </div>
  )
}

export default TournamentCard
