import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import SignIn from "./pages/SignIn";

import "./App.css";
import "./styles/text.css";

import "@fontsource/pretendard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Layout을 감싸는 경로 */}
          <Route path="/" element={<Layout />}>
            <Route index element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
