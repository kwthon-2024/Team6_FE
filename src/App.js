import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import BottomMenu from "./layouts/BottomMenuLayout";
import Clubs from "./pages/clubs/Clubs";
import ClubsCalendar from "./pages/clubs/ClubsCalendar";
import ClubsDetail from "./pages/clubs/ClubsDetail";
import ClubEvDetail from "./pages/ClubEvDetail";
import ClubEvRegister from "./pages/ClubEvRegister";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Graduation from "./pages/Graduation";
import Roadmap from "./pages/Roadmap";
import GraduationKlas from "./pages/GraduationKlas";

import "./App.css";
import "./styles/text.css";
import "./styles/utilities.css";

import "@fontsource/pretendard";
import AddClub from "./test/AddClub";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/pages" element={<BottomMenu />}>
              <Route path="roadmap" element={<Roadmap />} />
              <Route path="graduationklas" element={<GraduationKlas />} />
              <Route path="graduation" element={<Graduation />} />
              <Route path="clubs" element={<Clubs />} />
              <Route path="clubs/calendar" element={<ClubsCalendar />} />
              <Route path="clubs/detail" element={<ClubsDetail />} />
              <Route path="clubs/detailEv" element={<ClubEvDetail />} />
              <Route path="clubs/registerEv" element={<ClubEvRegister />} />
            </Route>
          </Route>
          <Route path="/test/addclub" element={<AddClub />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
