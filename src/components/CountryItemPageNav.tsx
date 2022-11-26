import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CountryItemPageContext from '../context/CountryItemPageContext';

function CountryItemPageNav() {
    const context = useContext(CountryItemPageContext);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if(context.theme === "dark") {
            buttonRef.current!.style.backgroundColor = "hsl(209, 23%, 22%)";
            buttonRef.current!.style.color = "hsl(0, 0%, 100%)";
        }
        else if(context.theme === "light") {
            buttonRef.current!.removeAttribute("style");
        }
    },[context.theme, buttonRef])

    return (
        <div className="country-item-page-nav-container">
            <Link to="/">
                <button ref={buttonRef}>
                    <KeyboardBackspaceIcon/>
                    <span>Back</span>
                </button>
            </Link>
        </div>
    )
}

export default CountryItemPageNav;