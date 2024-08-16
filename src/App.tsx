import { Provider } from "react-redux"
import EstiloGlobal from "./Styles"
import Home from "./components/pages/Home"
import store from "./store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cadastro from "./components/pages/Cadastro"

const rotas = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'novo',
    element:<Cadastro/>
  }
]
)

function App() {
  return(
  
    <Provider store = {store}>
      <EstiloGlobal></EstiloGlobal>
      <RouterProvider router={rotas}></RouterProvider>
    </Provider>
      
    
  )
}

export default App
