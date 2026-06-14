import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Population from "./pages/Population";
import Languages from "./pages/Languages";
import Economy from "./pages/Economy";
import LifeExpectancy from "./pages/LifeExpectancy";
import Cities from "./pages/Cities";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/population" element={<Population />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/economy" element={<Economy />} />
            <Route path="/life" element={<LifeExpectancy />} />
            <Route path="/cities" element={<Cities />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;