import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Feedback from "./components/Feedback";
import Notes from "./components/Notes";
import Placements from "./components/Placements";
import Contacts from "./components/Contacts";
import Syllabus from "./components/Syllabus";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/syllabus" element={<Syllabus/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
