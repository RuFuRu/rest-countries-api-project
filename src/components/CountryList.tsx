import {useQuery } from "react-query";
import fetchAPI from "../otherFunctions/fetchAPI";

function CountryList() {
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
            {data.map((countryData: any) => (
                <div>{countryData.name.common}</div>
            ))}
        </div>
    )
}

export default CountryList;