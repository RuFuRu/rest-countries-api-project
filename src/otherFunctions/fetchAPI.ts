import {fetchAPIInterface} from "../types/types";

async function fetchAPI(region?: string): Promise<fetchAPIInterface> {
   const fetchMe = await fetch('https://restcountries.com/v3.1/region/europe');
   const response= await fetchMe.json();
   return {
    flags: response.flags.svg,
    name: {
        common: response.name.common,
        nativeName: response.name.nativeName,
    },
    population: response.population,
    region: response.region,
    subregion: response.subregion,
    capital: response.capital,
    topLevelDomain: response.tld,
    currencies: response.currencies,
    languages: response.languages,
    borders: response.borders
   }
}

export default fetchAPI;