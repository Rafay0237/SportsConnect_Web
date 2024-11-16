const TournamentPosterCard=({ title, date, location, events, image })=> {
    return (
      <div className="flex cursor-pointer items-center gap-4 rounded-lg border border-gray-200 p-4 transition-colors bg-white hover:scale-[1.01]">
        <img src={image} alt={title} className="size-16 rounded-lg object-cover" />
        <div>
          <h3 className="text-medium sm:text-lg font-bold">{title}</h3>
          <p className="text-sm sm:text-medium text-gray-600">
            {date} • {location} • {events} events
          </p>
        </div>
      </div>
    )
  }
export default TournamentPosterCard