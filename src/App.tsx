import Countries from "./components/Countries"
import Header from "./components/Header"
import fetchAPI from "./otherFunctions/fetchAPI"
import { QueryClientProvider, QueryClient } from "react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CountryItemPage from "./pages/CountryItemPage"

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Countries/>}></Route>
            <Route path="/country-item/:id" element={<CountryItemPage/>}></Route>
          </Routes>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
