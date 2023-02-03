import React from 'react'
import './Search.css'

const Search = ({ searchText,changeHandler,submitHandler}) => {

  return (
    <div className="searchContainer">      
     
      <form onSubmit={ submitHandler}>
        <input
          className='inputField'
          type="text"
          value={searchText}
          onChange={changeHandler}
          placeholder="What are you looking for?..."
        />
        <button type='submit'> Search </button>
       
      </form>

      </div>
  )
}

export default Search