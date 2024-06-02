import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomeMain from "./pages/HomeMain";
import MakeUp from "./pages/MakeUp";
import Service from "./pages/Service";
import Info from "./pages/Info";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeMain />} />
          <Route path="makeup" element={<MakeUp />} />
          <Route path="service" element={<Service />} />
          <Route path="info" element={<Info />} />
          <Route path="location" element={<Location />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
