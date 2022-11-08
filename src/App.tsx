import Countries from "./components/Countries"
import Header from "./components/Header"
import fetchAPI from "./otherFunctions/fetchAPI"

function App() {
  fetchAPI();

  return (
    <div className="App">
      <Header/>
      <Countries/>
    </div>
  )
}

export default App
