import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/NavBar/NavBar.jsx'
import './index.css'
import App from './App.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemListContainer/>
    <NavBar/>
    <App/>

  </StrictMode>,
)
