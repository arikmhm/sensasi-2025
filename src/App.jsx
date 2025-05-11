import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthorGuide from "./pages/AuthorGuide";
import Navbar from "./components/Navbar"; // nanti kamu buat
// import Footer from "./components/Footer"; // nanti kamu buat
import LoadingScreen from "./components/LoadingScreen"; // opsional
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Registrasi from "./pages/Registrasi";
import SpeakerPage from "./pages/acara/SpeakerPage";
import LocationPage from "./pages/acara/LocationSection";
import RundownPage from "./pages/acara/RundownPage";
import ProsidingPage from "./pages/Prosiding";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/panduan-penulis" element={<AuthorGuide />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/acara/speaker" element={<SpeakerPage />} />
        <Route path="/acara/tempat" element={<LocationPage />} />
        <Route path="/acara/rundown" element={<RundownPage />} />
        {/* <Route path="/prosiding" element={<ProsidingPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
