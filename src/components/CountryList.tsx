import { memo, useContext } from "react";
import {useQuery } from "react-query";
import CountriesContext from "../context/CountriesContext";
import fetchAPI from "../otherFunctions/fetchAPI";
import { countryListAPIType } from "../types/reusableTypes";
import CountryItem from "./CountryItem";

const CountryList = memo(() => {
    const context = useContext(CountriesContext);
    const { isLoading, isError, data, error,} = useQuery("countryData", fetchAPI);

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error</div>
    }

    console.log(data);
    return (
        <div className="country-list">
            {data.filter((countryData: countryListAPIType) => countryData.region === context.filter || context.unFilter).map((countryData: countryListAPIType) => (
                <CountryItem countryData={countryData} key={countryData.cca2}/>
            ))}
        </div>
    )
})

export default CountryList;