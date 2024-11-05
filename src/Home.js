import { useState } from "react";
import CountryList from "./CountryList";
import SelectMenu from "./SelectMenu";
import SearchBar from "./SearchBar";


const Home = () => {
    const [query, setQuery] = useState([]);
    
    return (
        <>
        <div className="search-filter">
            <SearchBar setQuery={setQuery}/>
            <SelectMenu setQuery={setQuery}/>
        </div>
        <div className="countries">
           <CountryList query={query}/>
        </div>
        </>
    );
}
 
export default Home;