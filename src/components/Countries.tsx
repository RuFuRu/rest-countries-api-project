import CountryList from "./CountryList";
import NavAndSearch from "./NavAndSearch";
import CountriesContext from "../context/CountriesContext";
import { useState } from "react";

function Countries() {
    const [filter, setFilter] = useState<string>('');
    const [unFilter, setUnFilter] = useState<boolean>(true);

    return (
        <CountriesContext.Provider value={{filter, setFilter, unFilter, setUnFilter}}>
            <div className="countries">
                <NavAndSearch/>
                <CountryList/>
            </div>
        </CountriesContext.Provider>
    )
}

export default Countries;