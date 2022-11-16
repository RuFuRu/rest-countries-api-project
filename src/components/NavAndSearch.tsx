import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FormEvent, useContext } from 'react';
import CountriesContext from '../context/CountriesContext';

function NavAndSearch() {
    const context = useContext(CountriesContext);

    function handleChange(e: FormEvent) {
        const target = e.target as HTMLOptionElement;
        if(target.value === "all") {
            context.setFilter!('');
            context.setUnFilter!(true);
        } else {
            context.setFilter!(target.value);
            context.setUnFilter!(false);
        }
    }

    return (
        <div className="nav-and-search">
            <div className="nav-and-search-input-container">
                <span className='search-outlined-icon-container'>
                    <SearchOutlinedIcon style={{color: "hsl(0, 0%, 52%)"}}/>
                </span>
                <input type="search" id="search" placeholder="Search for a country"/>
            </div>
            <div className="nav-and-search-select-container">
                <select name="filter-by-region" id="filter-by-region" onChange={(e) => handleChange(e)}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default NavAndSearch;