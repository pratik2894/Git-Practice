import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GameHeader from './Components/GameHeader.jsx'
import Dice from './Components/Dice.jsx'
import GamePage from './Pages/GamePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path:"/game",
    element:<GamePage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
