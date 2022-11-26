import CountryList from "../components/CountryList";
import NavAndSearch from "../components/NavAndSearch";
import CountriesContext from "../context/CountriesContext";
import { useEffect, useRef, useState } from "react";

interface CountriesProps {
    receivedData: unknown,
    theme: string
}

function Countries({receivedData, theme}: CountriesProps) {
    const [filter, setFilter] = useState<string>('');
    const [unFilter, setUnFilter] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const countryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(theme === "dark") {
            countryRef.current!.style.backgroundColor = "hsl(207, 26%, 17%)";
        }
        else if(theme === "light") {
            countryRef.current!.removeAttribute("style");
        }
    },[countryRef, theme])

    return (
        <CountriesContext.Provider value={{filter, setFilter, unFilter, setUnFilter, searchTerm, setSearchTerm, theme}}>
            <div className="countries" ref={countryRef}>
                <NavAndSearch/>
                <CountryList receivedData={receivedData}/>
            </div>
        </CountriesContext.Provider>
    )
}

export default Countries;