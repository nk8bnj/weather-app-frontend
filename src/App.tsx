import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import List from "./pages/List";
import Main from "./pages/Main";

const App: React.FC = () => (
  <Router>
    <div className="">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
