import { memo } from "react";
import {useQuery } from "react-query";
import fetchAPI from "../otherFunctions/fetchAPI";
import { countryListReturnType } from "../types/reusableTypes";
import CountryItem from "./CountryItem";

const CountryList = memo(() => {
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
            {data.map((countryData: countryListReturnType) => (
                <CountryItem countryData={countryData} key={countryData.cca2}/>
            ))}
        </div>
    )
})

export default CountryList;