import Hero from "./Components/Hero";
import './App.css'
import MoreInfo from "./Components/MoreInfo";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import SignUp from "./Components/SignUp/SIgnUp";
import './common.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MoreInfo />
            </>
          }
        />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
