import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./auth/components/PrivateRoute";
import {
  ConditionalNavbar,
  ConditionalFooter,
} from "./components/ConditionalComponents";
import CheckUserIsLoggedRoute from "./auth/components/CheckUserIsLoggedRoute";
import { Toaster } from "react-hot-toast";
import LoginPage from "./auth/pages/LoginPage";
import SignUpPage from "./auth/pages/SignupPage";
import HomePage from "./home/pages/HomePage";
import FindMatchPage from "./find_match/pages/FindMatchPage";
import FindAllMatchesPage from "./find_match/pages/FindAllMatchesPage";
import MatchDetailsPage from "./match_details/MatchDetailsPage";
import PostMatchPage from "./post_match/PostMatchPage";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ConditionalNavbar />
      <Routes>
        <Route element={<CheckUserIsLoggedRoute />}>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/find" element={<FindAllMatchesPage />} />
        <Route path="/find/:searchType" element={<FindMatchPage />} />
        <Route path="/match-details/:matchId" element={<MatchDetailsPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/match/post" element={<PostMatchPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ConditionalFooter />
    </BrowserRouter>
  );
}

export default App;
