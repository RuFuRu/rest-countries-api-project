import { createContext } from "react";

interface CountryItemPageContextInterface {}

const CountryItemPageContext = createContext<CountryItemPageContextInterface>({});

export default CountryItemPageContext;