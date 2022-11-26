import Countries from "./pages/Countries"
import Header from "./components/Header"
import fetchData from "./otherFunctions/fetchData"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import CountryItemPage from "./pages/CountryItemPage"

function App() {
  const [receivedData, setReceivedData] = useState<unknown>();
  const [theme, setTheme] = useState<string>('light');
  const appRef = useRef<HTMLDivElement>(null);

  function switchThemes() {
    if(theme === "light") {
      setTheme("dark");
    }
    else if(theme === "dark") {
      setTheme("light");
    }
  }

  useEffect(() => {
    fetchData().then((data) => {setReceivedData(data); console.log(data)});

    if(theme === "dark") {
      appRef.current!.style.color = "hsl(0, 0%, 100%)";
      document.documentElement.setAttribute("data-theme", "dark");
    }
    else if(theme === "light") {
      appRef.current!.removeAttribute("style");
      document.documentElement.removeAttribute("data-theme");
    }

  },[theme, appRef])

  return (
    <BrowserRouter>
      <div className="App" ref={appRef}>
        <Header switchThemes={switchThemes} theme={theme}/>
          <Routes>
            <Route path="/" element={<Countries receivedData={receivedData} theme={theme}/>}></Route>
            <Route path="/country-item/:id" element={<CountryItemPage receivedData={receivedData}/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
