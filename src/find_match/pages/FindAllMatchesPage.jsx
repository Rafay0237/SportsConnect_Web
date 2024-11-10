import { useState, useEffect } from "react";
import SearchSection from "../components/SearchSection";
import FilterNavbar from "../components/FilterNavbar"

const MatchesData = [
  {
    id: 1,
    title: "PPG-BATTLE OF CHAMPIONS 2024",
    date: "Oct 24th - 27th, 2024",
    location: "Lahore, PK",
    attendees: 3,
    distance: "< 6 miles",
    game: "Tekken 8",
    gameVersion: "TEKKEN 7",
    registrationOpen: true,
    image: "https://www.start.gg/__static/images/fallback/tournament.svg",
  },
  {
    id: 2,
    title: "Second Impact",
    date: "Nov 2nd - 3rd, 2024",
    location: "Lahore, PK",
    attendees: 54,
    distance: "< 17 miles",
    game: "Second Impact",
    gameVersion: "TEKKEN 8",
    registrationOpen: true,
    image: "https://www.start.gg/__static/images/fallback/tournament.svg",
  },
];

export default function FindAllMatchesPage() {
  const [matchesList,setMatchesList]=useState(MatchesData);

  // useEffect(()=>{
  //   const getMatches=async()=>{
  //     setMatchesList(MatchesData)
  //   }
  //   getMatches()
  // },[])

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchSection setMatchesList={setMatchesList}/>

      <main className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto pb-32">
       
       <FilterNavbar setMatchesList={setMatchesList}/>
       {/* new layout */}
      </main>
    </div>
  );
}
