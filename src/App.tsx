import Countries from "./components/Countries"
import Header from "./components/Header"
import fetchAPI from "./otherFunctions/fetchAPI"
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Header/>
      <QueryClientProvider client={queryClient}>
        <Countries/>
      </QueryClientProvider>
    </div>
  )
}

export default App
