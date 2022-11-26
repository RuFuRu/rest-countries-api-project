import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FormEvent, useContext, useEffect, useRef } from 'react';
import CountriesContext from '../context/CountriesContext';

function NavAndSearch() {
    const context = useContext(CountriesContext);
    const searchRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if(context.theme === "dark") {
            searchRef.current!.style.backgroundColor = "hsl(209, 23%, 22%)";
            searchRef.current!.style.color = "hsl(0, 0%, 100%)";
            searchRef.current!.style.boxShadow = "none";
            selectRef.current!.style.backgroundColor = "hsl(209, 23%, 22%)";
            selectRef.current!.style.color = "hsl(0, 0%, 100%)";
            selectRef.current!.style.boxShadow = "none";
        }
        else if(context.theme === "light") {
            searchRef.current!.removeAttribute("style");
            selectRef.current!.removeAttribute("style");
        }
    },[context.theme, searchRef])

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
                    <SearchOutlinedIcon/>
                </span>
                <input type="search" id="search" placeholder="Search for a country" onChange={(e) => context.setSearchTerm!(e.target.value)} ref={searchRef}/>
            </div>
            <div className="nav-and-search-select-container">
                <select name="filter-by-region" id="filter-by-region" onChange={(e) => handleChange(e)} ref={selectRef}>
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