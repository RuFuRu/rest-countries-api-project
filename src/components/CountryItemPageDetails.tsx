import { useParams } from "react-router-dom";
import {countryListAPIType} from "../types/reusableTypes"
import numberFormatter from "../otherFunctions/numberFormatter"

interface CountryItemPageDetailsProps {
    receivedData: unknown
}

interface nativeName {
    common: string;
}

interface currency {
    name: string;
}

function CountryItemPageDetails({receivedData}: CountryItemPageDetailsProps) {
    const data = receivedData as [];
    const param = useParams();

    const list = data && data.filter((countryData: countryListAPIType) => countryData.cca3 === param.id).map((countryData: countryListAPIType) => {
        
        const langValues: string[] = []
        for(const [key, value] of Object.entries(countryData.languages)) {
            langValues.push(value as string)
        }

        
        let neighbours;
        if(typeof countryData.borders === "undefined") {
            neighbours = "none"
        } else {
            neighbours = countryData.borders.map(neighbour => (
                <span className={`cipd-neighbour`}>{neighbour}</span>
            ))
        }

        return (
            <div className="country-item-page-details-container" key={countryData.cca2}>
                <div className="cipd-flag">
                    <img src={countryData.flags.svg} alt="flag" />
                </div>
                <div className="cipd-info">
                    <div className="cipd-country-name">
                        <h2>{countryData.name.common}</h2>
                    </div>
                    <div className="cipd-specifics">
                        <p><b>Native Name:</b>{(Object.values(countryData.name.nativeName)[0] as unknown as nativeName).common}</p>
                        <p><b>Population:</b>{numberFormatter(countryData.population)}</p>
                        <p><b>Region:</b>{countryData.region}</p>
                        <p><b>Subregion:</b>{countryData.subregion}</p>
                        <p><b>Capital:</b>{countryData.capital}</p>
                        <p><b>Top Level Domain:</b>{countryData.tld}</p>
                        <p><b>Currencies:</b>{(Object.values(countryData.currencies)[0] as unknown as currency).name}</p>
                        <p><b>Languages:</b>{langValues.join(", ")}</p>
                    </div>
                    <div className="cipd-neighbours">
                        <p><b>Border Countries:</b>{neighbours}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {list}
        </>
    )
}

export default CountryItemPageDetails;