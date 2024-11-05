const SelectMenu = ({setQuery}) => {
    return (
        <div className="filter">
            <select onChange={(event) => setQuery(event.target.value)}>
                <option value="" hidden>Filter by Region</option>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="America">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}
 
export default SelectMenu;