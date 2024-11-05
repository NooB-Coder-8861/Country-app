import useFetch from "./useFetch";
import {Link} from "react-router-dom";

const CountryList = ({query}) => {
    const data = useFetch('https://restcountries.com/v3.1/all');

    const filteredCountrys = (query === 'All' || query === "" 
                                        ? (Object.values(data)) 
                                        :(Object.values(data).filter((country) =>
                                        country.name.common.toLocaleLowerCase().startsWith(query) 
                                        || country.region.includes(query))))
    console.log(filteredCountrys);
    return (
        <>
            {filteredCountrys.map((country) => (
                <div className="country-card" key={country.name.common}>
                    <Link to={`/CountryView/${country.name.common}`}>
                        <img src= {country.flags.svg} alt="Flag" />
                        <h3>{country.name.common}</h3>
                        <p><b>Population: </b>{country.population.toLocaleString('en-IN')}</p>
                        <p><b>Region: </b>{country.continents}</p>
                        <p><b>Capital: </b>{country.capital}</p>
                    </Link>
                </div>
            ))}
        </>
    );
}
 
export default CountryList;