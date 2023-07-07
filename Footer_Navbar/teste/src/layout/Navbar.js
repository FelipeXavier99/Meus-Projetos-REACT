/*   Barra de Navegação */

import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from './logo.png'

function Navbar(){

return(
  <nav class={styles.navbar}>
    <Container>
    <Link to="/">
      <img src={logo} alt="logo "/>
    </Link>
    <ul className={styles.list}>
      <li className={styles.item}>
    <Link to="/">HOME</Link>
    </li>
  
    <li className={styles.item}>
    <Link to="/contatos">Copas</Link>
    </li>

    <li className={styles.item}>
    <Link to="/projects">Continente</Link>
    </li>
    </ul>
    </Container>
  </nav>

)

}

export default Navbar