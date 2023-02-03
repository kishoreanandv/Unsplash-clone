import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header.tsx";
import Image from "./components/images/Image";
import Search from "./components/search/Search.tsx";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchPhotos, setSearchPhotos] = useState([]);
  const [home, sethome] = useState(false);
  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchText === "") return alert("Please Enter Something to Search!");
    fetch(
      `https://api.unsplash.com/search/photos?query=${searchText}&client_id=${clientId}&per_page=100`
    )
      .then((data) => data.json())
      .then((data) => setSearchPhotos(data.results))
      .catch((error) => console.log(error));
  };

  const imageClickHandler = () => {
    setSearchText("");
    sethome(!home);
  };

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos?client_id=${clientId}&per_page=100`)
      .then((data) => data.json())
      .then((data) => setSearchPhotos(data))
      .catch((error) => console.log(error));
  }, [home]);

  return (
    <div className="App">
      {/*
<Router>
<Header/>
<Search/>
<Image/>
<Route path='/' component={Home} /> 
<Route path='/travel' component={Travel} /> 
<Route path='/animals' component={Animals} /> 
<Route path='/nature' component={Nature} /> 
<Route path='/signup' component={Signup} /> 
<Route path='/login' component={Login} /> 
<Route  component={pageNotFound} /> 
<Route/> 
</Router> 
 */}

      <Header imageClickHandler={imageClickHandler} />
      <Search
        searchText={searchText}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />

      {searchText ? <h2>Results for : {searchText}</h2> : null}
      <Image photos={searchPhotos} />
    </div>
  );
}

export default App;
