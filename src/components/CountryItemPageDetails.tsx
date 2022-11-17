interface CountryItemPageDetailsProps {
    receivedData: unknown
}

function CountryItemPageDetails({receivedData}: CountryItemPageDetailsProps) {
    const data = receivedData as [];

    return (
        <div className="country-item-page-details">
            
        </div>
    )
}

export default CountryItemPageDetails;