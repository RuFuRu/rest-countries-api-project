import { createContext } from "react";

interface CountriesContextInterface {
    filter?: string,
    setFilter?: React.Dispatch<React.SetStateAction<string>>,
    unFilter?: boolean,
    setUnFilter?: React.Dispatch<React.SetStateAction<boolean>> ,
    searchTerm?: string,
    setSearchTerm?: React.Dispatch<React.SetStateAction<string>>,
    theme?: string
}

const CountriesContext = createContext<CountriesContextInterface>({});

export default CountriesContext;