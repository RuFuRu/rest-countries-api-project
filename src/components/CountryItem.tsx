import { countryListReturnType } from "../types/types";

interface CountryItemProps {
    countryData: countryListReturnType
}

function CountryItem({countryData}: CountryItemProps) {
    return (
        <div className="country-item-container">
            <div><img src={countryData.flags.svg} alt={`${countryData.cca2} flag`}/></div>
            <div className="country-item-description">
                <h3>{countryData.name.common}</h3>
                <p><span className="country-item-span">Population:</span>{countryData.population}</p>
                <p><span className="country-item-span">Region:</span>{countryData.region}</p>
                <p><span className="country-item-span">Capital:</span>{countryData.capital.join(" ")}</p>
            </div>
        </div>
    )
}

export default CountryItem