import React,{ useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import PageNotFound from "./components/pagenotfound/PageNotFound";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchPhotos, setSearchPhotos] = useState([]);
  const [home, sethome] = useState(false);

  const imageClickHandler = () => {
    setSearchText("");
    sethome(!home);
  };

  return (
    <div className="App">
      <Router>
        <Header
          imageClickHandler={imageClickHandler}
          searchPhotos={searchPhotos}
          setSearchPhotos={setSearchPhotos}
        />
        <Routes>
          <Route
            path="/"            
            element={
              <Home
                searchText={searchText}
                searchPhotos={searchPhotos}
                home={home}
                setSearchPhotos={setSearchPhotos}
                setSearchText={setSearchText}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
