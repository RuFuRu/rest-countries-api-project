import Countries from "./pages/Countries"
import Header from "./components/Header"
import fetchData from "./otherFunctions/fetchData"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import CountryItemPage from "./pages/CountryItemPage"

function App() {
  const [receivedData, setReceivedData] = useState<unknown>();

  useEffect(() => {
    fetchData().then((data) => {setReceivedData(data); console.log(data)});
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Countries receivedData={receivedData}/>}></Route>
            <Route path="/country-item/:id" element={<CountryItemPage receivedData={receivedData}/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
