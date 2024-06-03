
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'


function App() {
  const menuItems = [
    {text: 'Home', link: '/'},
    {text: 'Sobre', link: '/sobre'},
    {text: 'Login', link: '/login'},
    {text: 'Contato', link: '/contato'},
  ]
}

export default App
