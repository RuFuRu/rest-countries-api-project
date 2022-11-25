import { Link } from "react-router-dom";
import numberFormatter from "../otherFunctions/numberFormatter";
import { countryListAPIType } from "../types/reusableTypes";

interface CountryItemProps {
    countryData: countryListAPIType
}

function CountryItem({countryData}: CountryItemProps) {
    return (
        <Link to={`/country-item/${countryData.cca3}`}>
            <div className="country-item-container">
                <div><img src={countryData.flags.svg} alt={`${countryData.cca2} flag`}/></div>
                <div className="country-item-description">
                    <h3>{countryData.name.common}</h3>
                    <p><span className="country-item-span">Population:</span>{numberFormatter(countryData.population)}</p>
                    <p><span className="country-item-span">Region:</span>{countryData.region}</p>
                    <p><span className="country-item-span">Capital:</span>{countryData.capital}</p>
                </div>
            </div>
        </Link>
    )
}

export default CountryItem