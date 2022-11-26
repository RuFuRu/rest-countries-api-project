import { memo, useContext } from "react";
import CountriesContext from "../context/CountriesContext";
import { countryListAPIType } from "../types/reusableTypes";
import CountryItem from "./CountryItem";

interface CountryListProps {
    receivedData: unknown
}

const CountryList = memo(({receivedData}: CountryListProps) => {
    const context = useContext(CountriesContext);
    const data = receivedData as [];

    return (
        <div className="country-list">
            {data && data
            .filter((countryData: countryListAPIType) => countryData.region === context.filter || context.unFilter)
            .filter((countryData: countryListAPIType) => {
                if(context.searchTerm === "") {
                    return countryData;
                } else if(countryData.name.common.toLowerCase().includes(context.searchTerm!.toLowerCase())) {
                    return countryData;
                }
            })
            .map((countryData: countryListAPIType) => (
                <CountryItem countryData={countryData} key={countryData.cca2}/>
            ))}
        </div>
    )
})

export default CountryList;