import React from "react";
import "./Search.css";

const clientId = process.env.REACT_APP_CLIENT_ID;
const Search = ({ searchText, setSearchText, setSearchPhotos }:any) => {
  const submitHandler = (e: React.SyntheticEvent)  => {
    e.preventDefault();
    if (searchText === "") return alert("Please Enter Something to Search!");
    fetch(
      `https://api.unsplash.com/search/photos?query=${searchText}&client_id=${clientId}&per_page=100`
    )
      .then((data) => data.json())
      .then((data) => setSearchPhotos(data.results))
      .catch((error) => console.log(error));
  };

  const changeHandler = (e:any)=> {
    setSearchText(e.target.value);
  };

  return (
    <div className="searchContainer">
      <form className="searchContainer-form" onSubmit={submitHandler}>
        <input
          className="inputField"
          type="text"
          value={searchText}
          onChange={changeHandler}
          placeholder="What are you looking for Today?..."
        />
        <button className="searchContainer-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
