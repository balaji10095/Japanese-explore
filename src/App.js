import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Seasons from "./pages/Seasons";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Events from "./pages/Events";
import Culture from "./pages/Culture";
import Food from "./pages/food";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/places" element={<Places />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/food" element={<Food />} />
        <Route path="/seasons" element={<Seasons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;