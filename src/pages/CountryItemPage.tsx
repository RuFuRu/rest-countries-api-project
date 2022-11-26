import CountryItemPageNav from "../components/CountryItemPageNav";
import CountryItemPageDetails from "../components/CountryItemPageDetails";
import CountryItemPageContext from "../context/CountryItemPageContext";
import { useEffect, useRef } from "react";

interface CountryItemProps {
    receivedData: unknown,
    theme: string
}

function CountryItemPage({receivedData, theme}: CountryItemProps) {
    const countryItemPageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(theme === "dark") {
            countryItemPageRef.current!.style.backgroundColor = "hsl(207, 26%, 17%)";
            document.documentElement.style.backgroundColor = "hsl(207, 26%, 17%)";
        }
        else if(theme === "light") {
            countryItemPageRef.current!.removeAttribute("style");
            document.documentElement.removeAttribute("style");
        }
    },[theme, countryItemPageRef])

    return (
        <div className="country-item-page-container" ref={countryItemPageRef}>
            <CountryItemPageContext.Provider value={{theme}}>
                <CountryItemPageNav />
                <CountryItemPageDetails receivedData={receivedData} />
            </CountryItemPageContext.Provider>
        </div>
    )
}

export default CountryItemPage;