import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import BottomMenu from "./layouts/BottomMenuLayout";
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
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
