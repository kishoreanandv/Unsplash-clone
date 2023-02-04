import React, { useEffect } from 'react'
import Search from '../search/Search'
import Image from '../images/Image'


const clientId = process.env.REACT_APP_CLIENT_ID;
const Home = ({ searchText, setSearchText,searchPhotos, home ,setSearchPhotos}:any) => {
  
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos?client_id=${clientId}&per_page=100`)
      .then((data) => data.json())
      .then((data) => setSearchPhotos(data))
      .catch((error) => console.log(error));
  }, [home]);



  return (
    <div>
      <Search
        searchText={searchText}
        setSearchPhotos={setSearchPhotos}
        setSearchText={ setSearchText}
      />

      {searchText ? <h2>Results for : {searchText}</h2> : null}
      <Image photos={searchPhotos} />

    </div>
  )
}

export default Home