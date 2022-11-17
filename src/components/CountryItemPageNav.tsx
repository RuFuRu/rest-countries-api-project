import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

function CountryItemPageNav() {
    return (
        <div className="country-item-page-nav-container">
            <Link to="/">
                <button>
                    <KeyboardBackspaceIcon/>
                    <span>Back</span>
                </button>
            </Link>
        </div>
    )
}

export default CountryItemPageNav;