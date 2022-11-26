import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../context/CountriesContext";
import numberFormatter from "../otherFunctions/numberFormatter";
import { countryListAPIType } from "../types/reusableTypes";

interface CountryItemProps {
    countryData: countryListAPIType
}

function CountryItem({countryData}: CountryItemProps) {
    const context = useContext(CountriesContext);
    const countryItemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(context.theme === "dark") {
            countryItemRef.current!.style.backgroundColor = "hsl(209, 23%, 22%)";
        }
        else if(context.theme === "light") {
            countryItemRef.current!.removeAttribute("style");
        }

    },[context.theme, countryItemRef])

    return (
        <Link to={`/country-item/${countryData.cca3}`}>
            <div className="country-item-container" ref={countryItemRef}>
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