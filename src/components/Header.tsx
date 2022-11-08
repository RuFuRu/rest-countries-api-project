import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Header() {
    return (
        <header>
            <h3 className="header-h3">Where in the world?</h3>
            <button className="header-btn"><DarkModeOutlinedIcon/><span>Dark Mode</span></button>
        </header>
    )
}

export default Header;