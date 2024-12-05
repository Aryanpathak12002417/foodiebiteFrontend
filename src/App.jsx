import Hero from "./Components/Hero";
import MoreInfo from "./Components/MoreInfo";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import SignUp from "./Components/SignUp/SignUp";
import LandingPage from "./Components/LandingPage";
import DashBoard from "./Components/DashBoard";
import DashBoardHome from "./Components/DashBoardHome";
import OrdersBoard from "./Components/OrdersBoard";
import BillingBoard from "./Components/BillingBoard";
import ProfileDashboard from "./Components/profileDashboard";
function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage/>} />
        <Route
          path="/signup"
          element={
            <>
              <SignUp/>
            </>
          }
        />
        <Route path='dashboard' element={<DashBoard/>}>
          <Route path="" element={<DashBoardHome/>}/>
          <Route path="orders" element={<OrdersBoard/>}/>
          <Route path="billing" element={<BillingBoard/>}/>
          <Route path="profile" element={<ProfileDashboard/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/moreInfo" element={<MoreInfo/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

  );
}

export default App;
