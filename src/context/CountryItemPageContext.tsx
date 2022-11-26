import { createContext } from "react";

interface CountryItemPageContextInterface {
    theme?: string
}

const CountryItemPageContext = createContext<CountryItemPageContextInterface>({});

export default CountryItemPageContext;