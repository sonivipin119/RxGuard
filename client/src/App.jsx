import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import SignUp from "./auth/signUp";
import Login from "./auth/login";
import TermCondition from "./view/term_privacy/termCondition";
import PrivacyPolicy from "./view/term_privacy/privacyPolicy";
import Navbar from "./partials/navbar";
import Footer from "./partials/footer";
import Dashboard from "./components/dashboard";

// Layout with Dashboard
function DashboardLayout() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <main className="flex-grow">
        <Outlet /> {/* child routes here */}
      </main>
      <Footer />
    </>
  );
}

//  Layout without Dashboard
function SimpleLayout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* child routes here */}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Dashboard */}
        <Route path="/" element={<DashboardLayout />}>
          {/*  */}
        </Route>

        {/* Routes without Dashboard */}
        <Route element={<SimpleLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<TermCondition />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
