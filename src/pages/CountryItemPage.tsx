import CountryItemPageNav from "../components/CountryItemPageNav";
import CountryItemPageDetails from "../components/CountryItemPageDetails";

interface CountryItemProps {
    receivedData: unknown
}

function CountryItemPage({receivedData}: CountryItemProps) {
    return (
        <div className="country-item-page-container">
            <CountryItemPageNav />
            <CountryItemPageDetails />
        </div>
    )
}

export default CountryItemPage;