import CountryItemPageNav from "../components/CountryItemPageNav";
import CountryItemPageDetails from "../components/CountryItemPageDetails";
import CountryItemPageContext from "../context/CountryItemPageContext";

interface CountryItemProps {
    receivedData: unknown,
    theme: string
}

function CountryItemPage({receivedData, theme}: CountryItemProps) {
    return (
        <div className="country-item-page-container">
            <CountryItemPageContext.Provider value={{}}>
                <CountryItemPageNav />
                <CountryItemPageDetails receivedData={receivedData} />
            </CountryItemPageContext.Provider>
        </div>
    )
}

export default CountryItemPage;