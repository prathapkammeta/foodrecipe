import React from 'react'

const SearchMeal = ({

value,
isLoading,
handleSubmit,
onChange

}) => {
    return (
        <form onSubmit={handleSubmit}>
        <input value={value}
            disabled={isLoading}
            onChange={onChange}

            placeholder="Search For Food Recipe"
            className="form-control"
        
        />
        <div className="input">
        <input 
      
        type="submit" 
        value="search" 
        
        className="btn"
        />
        </div>
        </form>
    )
}

export default SearchMeal
