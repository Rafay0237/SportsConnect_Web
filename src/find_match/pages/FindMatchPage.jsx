import { useState, useEffect } from "react";
import SearchSection from "../components/SearchSection";
import FilterNavbar from "../components/FilterNavbar";
import MatchCard from "../components/MatchCard";
import TournamentCard from "../components/TournamentCard";
import Filter from "../components/Filter";
import { Link, useParams } from "react-router-dom";
import API from "../../services/Api";
import Loader from "../../components/Loader";

export default function Component() {
  const params = useParams();
  let endPoint = params.searchType;

  const [matchesList, setMatchesList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isTournamentPage, setIsTournamentPage] = useState(
    params.searchType === "tournaments"
  );

  useEffect(() => {
    const getMatches = async () => {
      setLoading(true);
      setErrorMessage(null)
      try {
        setMatchesList(null);
        let { data } = await API.get(
          endPoint === "tournaments" ? "tournament" : "match"
        );

        if (endPoint === "tournaments") {
          setMatchesList(data?.tournaments || []);
          setIsTournamentPage(true);
        } else {
          setMatchesList(data?.matches || []);
          setIsTournamentPage(false);
        }
      } catch (error) {
        console.log(error.message);
        setErrorMessage(`Currently, No ${endPoint} matches available.`);
      }
      setLoading(false);
    };

    getMatches();
  }, [params.searchType]);

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchSection setMatchesList={setMatchesList} />

      <main className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto pb-32 min-h-[70vh]">
        <FilterNavbar />

        <Filter setMatchesList={setMatchesList} matchesList={matchesList} />

        {loading ? (
          <div className="mt-20">
            <Loader size={8} />
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {isTournamentPage
                ? matchesList?.map((match) => (
                    <div key={match._id}>
                      <TournamentCard match={match} />
                    </div>
                  ))
                : matchesList?.map((match) => (
                    <div key={match._id}>
                      <Link to={"/match-details/" + match._id}>
                        <MatchCard match={match} />
                      </Link>
                    </div>
                  ))}
            </div>
            {errorMessage && (
              <p className="mt-20 mx-auto w-fit font-semibold text-2xl">
                {errorMessage}
              </p>
            )}
          </>
        )}
      </main>
    </div>
  );
}
