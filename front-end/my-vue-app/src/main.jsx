import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import{ createBrowserRouter, RouterProvider} from   "react-router-dom"

import Home from "./routes/Home";
import Cadastrar from './routes/Cadastrar.jsx'
import PaginadeErro from './routes/PaginadeErro.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <PaginadeErro/>,
  },
  {
    path:'home',
    element: <Home/>,
  },
  {
    path:'cadastrar',
    element: <Cadastrar/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
