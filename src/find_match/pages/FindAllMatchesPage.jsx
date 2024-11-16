import { useState } from "react";
import SearchSection from "../components/SearchSection";
import FilterNavbar from "../components/FilterNavbar";
import { tournamentsCardData, gamesCardData } from "../../assets/lib/cardsData";
import TournamentPosterCard from "../components/TournamentPosterCard";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";


export default function FindAllMatchesPage() {


  return (
    <div className="min-h-screen bg-gray-100">
      <SearchSection setMatchesList={null} />

      <main className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto pb-32">
        <FilterNavbar setMatchesList={null} />

        <div className="container mx-auto px-4 py-8">
          {/* Games Section */}
          <div className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-mono font-bold">Games</h2>
              <button
                className="text-blue-600 hover:underline"
              >
                See All
              </button>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4">
              {gamesCardData.map((game) => (
                <GameCard key={game.id} title={game.title} image={game.image} />
              ))}
            </div>
          </div>

          {/* Tournaments Section */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-mono font-bold">Tournaments</h2>
              <Link to={"/find/tournaments"}>
              <button
                className="text-blue-600 hover:underline"
                >
                See All
              </button>
                </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {tournamentsCardData.map((tournament) => (
                <TournamentPosterCard
                  key={tournament.id}
                  title={tournament.title}
                  date={tournament.date}
                  location={tournament.location}
                  events={tournament.events}
                  image={tournament.image}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
