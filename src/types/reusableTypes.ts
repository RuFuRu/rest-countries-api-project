export interface countryListAPIType {
    altSpellings: string[],
    area: number,
    borders: string[],
    capital: string[],
    capitalInfo: {
        latlng: number[]
    },
    car: {
        side: string,
        signs: string[]
    },
    cca2: string,
    cca3: string,
    ccn3: string,
    cioc: string,
    coatOfArms: {
        png: string,
        svg: string
    },
    continents: string[],
    currencies: {},
    denonyms: {
        eng: string
    },
    fifa: string,
    flag: string,
    flags: {
        png: string,
        svg: string,
    },
    gini: {},
    idd: {},
    independent: boolean,
    landlocked: boolean,
    languages: {},
    latlng: string[],
    maps: {
        googleMaps: string,
        openStreetMaps: string
    },
    name: {
        common: string,
        official: string,
        nativeName: string
    },
    population: number,
    region: string,
    startOfWeek: string,
    status: string,
    subregion: string,
    timezones: string[],
    tld: string[],
    translations: {},
    unMember: boolean
}