import { countryListReturnType } from "../types/types";

interface CountryItemProps {
    countryData: countryListReturnType
}

function CountryItem({countryData}: CountryItemProps) {
    return (
        <div className="country-item-container">
            <div><img src={countryData.flags.svg} alt={`${countryData.cca2} flag`}/></div>
            <div>{countryData.name.common}</div>
            <div>{countryData.population}</div>
            <div>{countryData.region}</div>
            <div>{countryData.capital[0]}</div>
        </div>
    )
}

export default CountryItem