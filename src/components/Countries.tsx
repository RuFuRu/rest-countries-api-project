import CountryList from "./CountryList";
import NavAndSearch from "./NavAndSearch";

function Countries() {
    return (
        <div className="countries">
            <NavAndSearch/>
            <CountryList/>
        </div>
    )
}

export default Countries;