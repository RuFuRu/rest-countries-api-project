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
    languages: {}
}