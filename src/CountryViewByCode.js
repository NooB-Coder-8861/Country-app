import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CountryViewByCode = () => {
    const { code } = useParams();
    const country  = useFetch('https://restcountries.com/v3.1/alpha/'+code);
    console.log(country);
    const history = useHistory();

    if (!country || country.length === 0) {
        return <p>Loading country data...</p>;
    }

    const nativeNames = Object.values(country[0].name.nativeName).map((native) => native.common);
    const currencies = Object.values(country[0].currencies).map((currencie) => currencie.name);

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
                    <p><b>Sub Region: </b>{country[0].subregion}</p>
                    <p><b>Capital: </b>{country[0].capital.join(', ')}</p>
                </div>
                <div className="column">
                    <p><b>Top Level Domain: </b>{country[0].tld.join(', ')}</p>
                    <p><b>Currencies: </b>{currencies}</p>
                    <p><b>Languages: </b>{Object.values(country[0].languages).join(', ')}</p>
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
                    <span>No borders</span>
                )}
                </p>
            </div>
        </div>
    );
};

export default CountryViewByCode;
