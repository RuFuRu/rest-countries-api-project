import CountryList from "./CountryList";
import NavAndSearch from "./NavAndSearch";
import CountriesContext from "../context/CountriesContext";
import { useState } from "react";

interface CountriesProps {
    receivedData: unknown
}

function Countries({receivedData}: CountriesProps) {
    const [filter, setFilter] = useState<string>('');
    const [unFilter, setUnFilter] = useState<boolean>(true);

    return (
        <CountriesContext.Provider value={{filter, setFilter, unFilter, setUnFilter}}>
            <div className="countries">
                <NavAndSearch/>
                <CountryList receivedData={receivedData}/>
            </div>
        </CountriesContext.Provider>
    )
}

export default Countries;