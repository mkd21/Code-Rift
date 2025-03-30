
import { ContextProvider } from "./Components/ContextProviderComponent/ContextProvider.jsx";

import {ParentComp} from "./Components/Parent_Component/Parent.jsx";

import './App.css';

function App() {
  
  return (
    <>
      <ContextProvider>
        <ParentComp />
      </ContextProvider>
    </>
  )
}

export default App;