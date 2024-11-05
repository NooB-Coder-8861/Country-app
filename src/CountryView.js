import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CountryView = () => {
    const { name } = useParams();
    const country  = useFetch('https://restcountries.com/v3.1/name/'+name+'?fullText=true');
    const history = useHistory();
    console.log(country);

    if (!country || country.length === 0) {
        return <p>Loading country data...</p>;
    }

    const nativeNames = country[0].name.nativeName ?
    Object.values(country[0].name.nativeName).map((native) => native.common)
    : ["Un-defined"];
    const currencies = country[0].currencies ?
    Object.values(country[0].currencies).map((currencie) => currencie.name)
    : ["Un-defined"];

    return (
        <div className="country-details">
            <div className="back-button"><button onClick= {history.goBack}>Back</button></div>
            <div className="country-flag"> 
                <img src= {country[0].flags.svg} alt="Flag" />
            </div>
            <div className="country-data">
            <h2>{country[0].name.common}</h2>
                <div className="data-columns">
                <div className="column">
                    <p><b>Native Name: </b>{nativeNames.join(', ')}</p>
                    <p><b>Population: </b>{country[0].population.toLocaleString('en-IN')}</p>
                    <p><b>Region: </b>{country[0].region}</p>
                    <p><b>Sub Region: </b>{country[0].subregion ? country[0].subregion : "Un-defined"}</p>
                    <p><b>Capital: </b>{country[0].capital ? country[0].capital.join(', ') : "Un-defined"}</p>
                </div>
                <div className="column">
                    <p><b>Top Level Domain: </b>{country[0].tld ? country[0].tld.join(', ') : "Un-defined"}</p>
                    <p><b>Currencies: </b>{currencies}</p>
                    <p><b>Languages: </b>{country[0].languages ? Object.values(country[0].languages).join(', ') : "Un-defined"}</p>
                </div>
                </div>
                <p><b>Borders: </b>
                {country[0].borders && country[0].borders.length > 0 ? (
                country[0].borders.map((border, index) => (
                <button key={index} className="border-button">
                    <Link to={`/CountryViewByCode/${border}`}>
                        {border}
                    </Link>
                </button>
                ))
                ) : (
                    <span>Un-defined</span>
                )}
                </p>
            </div>
        </div>
    );
};

export default CountryView;
