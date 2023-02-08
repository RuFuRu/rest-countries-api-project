import { ThemeProvider } from '@emotion/react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { createTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
    switchThemes: () => void,
    theme: string
}

function Header({switchThemes, theme}: HeaderProps) {
    const headerRef = useRef<HTMLDivElement>(null);
    const h3Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const [iconColour, setIconColour] = useState<any>('primary');

    const iconTheme = createTheme({
        palette: {
            primary: {
                main: "#000000"
            },
            secondary: {
                main: "#ffffff"
            }
        }
    })

    useEffect(() => {
        if(theme === "dark") {
            headerRef.current!.style.backgroundColor = "hsl(207, 26%, 17%)";
            document.documentElement.style.backgroundColor = "hsl(207, 26%, 17%)";
            h3Ref.current!.style.color = "hsl(0, 0%, 100%)";
            spanRef.current!.style.color = "hsl(0, 0%, 100%)";
            setIconColour('secondary');
        }
        else if(theme === "light") {
            headerRef.current!.removeAttribute("style");
            h3Ref.current!.removeAttribute("style");
            spanRef.current!.removeAttribute("style");
            document.documentElement.removeAttribute("style");
            setIconColour('primary');
        }
    },[theme, headerRef, h3Ref, spanRef])

    return (
        <header ref={headerRef}>
            <h3 className="header-h3" ref={h3Ref}>Where in the world?</h3>
            <button className="header-btn" onClick={switchThemes}>
                <ThemeProvider theme={iconTheme}>
                    <DarkModeIcon color={iconColour}/>
                </ThemeProvider>
                <span ref={spanRef}>Dark Mode</span>
            </button>
        </header>
    )
}

export default Header;