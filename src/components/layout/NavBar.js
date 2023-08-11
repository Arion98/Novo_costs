import { Link } from "react-router-dom"

import Container from "./Container"

import Styles from "./NavBar.module.css"
import Logo from "../../img/costs_logo.png"

const NavBar = () => {
  return (
    <nav className={Styles.NavBar}>
      <Container>
        <Link to="/">
          <img src={Logo} alt="Logo-Moeda" />
        </Link>
        <ul className={Styles.List}>
          <li className={Styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={Styles.item}>
            <Link to="/Projects">Meus projetos</Link>
          </li>
          <li className={Styles.item}>
            <Link to="/Empresa">Empresa</Link>
          </li>
          <li className={Styles.item}>
            <Link to="/Contato">Contato</Link>
          </li>
         
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar