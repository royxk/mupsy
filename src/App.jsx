import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomeMain from "./pages/HomeMain";
import About from "./pages/About";
import History from "./pages/History";
import Reservation from "./pages/Reservation";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeMain />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="location" element={<Location />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
