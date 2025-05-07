import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthorGuide from "./pages/AuthorGuide";
import Navbar from "./components/Navbar"; // nanti kamu buat
// import Footer from "./components/Footer"; // nanti kamu buat
import LoadingScreen from "./components/LoadingScreen"; // opsional
import { useState, useEffect } from "react";

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
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
