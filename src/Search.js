import React,{useState}from "react";

const Search = (props) => {
    const [query,setQuery]=useState("")
  const [parsedQuery,setParsedQuery]=useState("")
  
  
  
   
    return (
      <div className="search">
           SEARCH FOR YOUR DAILY NEWS:
           <form onSubmit={Search}> 
               <input
        
          type="text"
          className="form-control"
          
          placeholder="TYPE TO SEARCH"
          onChange={(event) => {
            setQuery(event.target.value);

            setParsedQuery(event.target.value.replaceAll(" ", "%20"));
          }}
          value={query}  
        />
        
        <input type="submit" className="submit" />
        </form>
       
    </div>
    );
  };
  
export default Search;
