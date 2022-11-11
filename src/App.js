import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SingleAlbum, PageNotFound } from "./pages";
import Favourites from "./pages/favourites/Favourites";

function App() {
  return (
    <Router>
      <div className="app__container">
        <div className="app__main--container">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":label" element={<SingleAlbum />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
