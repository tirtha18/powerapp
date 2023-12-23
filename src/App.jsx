import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Feedback from "./components/Feedback";
import Notes from "./components/Notes";
import Placements from "./components/Placements";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes" element={<Placements />} />
          <Route path="/notes" element={<Contacts/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
