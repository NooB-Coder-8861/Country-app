const SearchBar = ({setQuery}) => {
    return (
        <div className="search">
            <input type="text" placeholder="Search" onChange={(event) => setQuery(event.target.value.toLocaleLowerCase())}/>
        </div>
    );
}
 
export default SearchBar;