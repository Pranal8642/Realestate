import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home"; // Updated Home component
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import Rent from "./components/Rent";
import Postproperty from "./components/Postproperty";
import Login from "./components/Login";
import Register from "./components/Register"

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Updated to HomePage */}
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/postproperty" element={<Postproperty />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
