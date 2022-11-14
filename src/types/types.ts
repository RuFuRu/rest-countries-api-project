export interface fetchAPIInterface {
    flags: {
        svg: string
    }
    name: {
        common: string,
        nativeName: {}
    }
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    topLevelDomain: string[],
    currencies: {},
    languages: {},
    borders: string[]
}

export interface countryListReturnType {
    flags: {
        svg: string
    }
    name: {
        common: string
    },
    population: number,
    region: string,
    capital: string[],
    cca2: string
}