import { createContext } from "react";

interface CountriesContextInterface {
    filter?: string,
    setFilter?: React.Dispatch<React.SetStateAction<string>>,
    unFilter?: boolean,
    setUnFilter?: React.Dispatch<React.SetStateAction<boolean>> 
}

const CountriesContext = createContext<CountriesContextInterface>({});

export default CountriesContext;