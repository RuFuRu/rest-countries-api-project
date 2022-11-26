import CountryList from "../components/CountryList";
import NavAndSearch from "../components/NavAndSearch";
import CountriesContext from "../context/CountriesContext";
import { useState } from "react";

interface CountriesProps {
    receivedData: unknown
}

function Countries({receivedData}: CountriesProps) {
    const [filter, setFilter] = useState<string>('');
    const [unFilter, setUnFilter] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <CountriesContext.Provider value={{filter, setFilter, unFilter, setUnFilter, searchTerm, setSearchTerm}}>
            <div className="countries">
                <NavAndSearch/>
                <CountryList receivedData={receivedData}/>
            </div>
        </CountriesContext.Provider>
    )
}

export default Countries;