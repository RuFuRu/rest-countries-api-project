import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function NavAndSearch() {
    return (
        <div className="nav-and-search">
            <div className="nav-and-search-input-container">
                <span className='search-outlined-icon-container'>
                    <SearchOutlinedIcon style={{color: "hsl(0, 0%, 52%)"}}/>
                </span>
                <input type="search" id="search" placeholder="Search for a country"/>
            </div>
            <div className="nav-and-search-select-container">
                <select name="filter-by-region" id="filter-by-region">
                    <option value="" disabled selected hidden>Please Choose...</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default NavAndSearch;