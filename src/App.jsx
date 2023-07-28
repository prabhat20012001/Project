import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PatientSignup from "./pages/Authentication/PatientSignup";
import DoctorSignup from "./pages/Authentication/DoctorSignup";
// import {
//   AdhoMukhaSvanasana,
//   MainComponent,
// } from "./pages/Activities/ActivitySubPageLayout";
// import yogaAdhoMukhaSavanasana from "./pages/Activities/ActivitySubPageLayout";
// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Experts from "./pages/Experts";
import Issues from "./pages/Issues";
import Internship from "./pages/Internship";
import Activities from "./pages/Activities";
import Blogs from "./pages/Blogs";
import ActivityLayout from "./pages/Activities/ActivityLayout";
import BrainExercise from "./pages/Activities/BrainExercise";
import Avatar from "./components/layout/Avatar";
import AdhoMukhaSvanasana from "./pages/Activities/ActivitySubPageLayout";
// Data
import { activities } from "./data";

function App() {
  // Activity Subpages Routing
  const activitiesMenu = activities.map((value, index) => {
    return (
      <Route
        key={index}
        path={value.slug}
        element={
          <Layout>
            <ActivityLayout
              header={value.header}
              activities={value.activities}
              blogs={value.blogs}
            />
          </Layout>
        }
      />
    );
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/avatar"
          element={
            <Layout>
              <Avatar />
            </Layout>
          }
        />

        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/experts"
          element={
            <Layout>
              <Experts />
            </Layout>
          }
        />
        <Route
          path="/issues"
          element={
            <Layout>
              <Issues />
            </Layout>
          }
        />
        <Route
          path="/internship"
          element={
            <Layout>
              <Internship />
            </Layout>
          }
        />
        <Route
          path="/activities"
          element={
            <Layout>
              <Activities />
            </Layout>
          }
        />
        <Route
          path="/activities/yoga/adho-mukha-svanasana"
          element={
            <Layout>
              <AdhoMukhaSvanasana />
            </Layout>
          }
        />
        {activitiesMenu}
        <Route
          path="/brain-exercise"
          element={
            <Layout>
              <BrainExercise />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route
          path="/doctors-signup"
          element={
            <SignupLayout>
              <DoctorSignup />
            </SignupLayout>
          }
        />
        <Route
          path="/patient-signup"
          element={
            <SignupLayout>
              <PatientSignup />
            </SignupLayout>
          }
        />
      </Routes>
    </Router>
  );
}

function Layout({ children }) {
  // Check if the current path is /doctors-signup or /patient-signup to decide whether to render Navbar and Footer or not
  const isDoctorSignupPage = window.location.pathname === "/doctors-signup";
  const isPatientSignupPage = window.location.pathname === "/patient-signup";

  return (
    <div>
      {!isDoctorSignupPage && !isPatientSignupPage && <Navbar />}
      {children}
      {!isDoctorSignupPage && !isPatientSignupPage && <Footer />}
    </div>
  );
}

function SignupLayout({ children }) {
  // This layout is specifically for /doctors-signup page, without the Navbar and Footer
  return <div>{children}</div>;
}

export default App;
