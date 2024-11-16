import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import BottomMenu from "./layouts/BottomMenuLayout";
import Clubs from "./pages/clubs/Clubs";
import ClubsDetail from "./pages/clubs/ClubsDetail";
import ClubEvDetail from "./pages/ClubEvDetail"; 
import ClubEvRegister from "./pages/ClubEvRegister"
import SignIn from "./pages/SignIn";
import Graduation from "./pages/Graduation";

import "./App.css";
import "./styles/text.css";
import "./styles/utilities.css";

import "@fontsource/pretendard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SignIn />} />
            <Route path="/pages" element={<BottomMenu />}>
              <Route path="graduation" element={<Graduation />} />
              <Route path="clubs" element={<Clubs />} />
              <Route path="clubs/detail" element={<ClubsDetail />} />
              <Route path="clubs/detailEv" element={<ClubEvDetail />} />
              <Route path="clubs/registerEv" element={<ClubEvRegister />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
