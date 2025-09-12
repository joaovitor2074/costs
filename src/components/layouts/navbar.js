import { Link } from "react-router-dom"
import Container from "./container"

import styles from "./Navbar.module.css"
import logo from "../../img/logo.png"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarInner}>
          <Link to="/"><img className={styles.logo} src={logo} alt="jv" /></Link>

          <ul className={styles.navList}>
            <li className={styles.navItem}><Link to="/">Home</Link></li>
            <li className={styles.navItem}><Link to="/Projects">Projects</Link></li>
            <li className={styles.navItem}><Link to="/newproject">New Projects</Link></li>
            <li className={styles.navItem}><Link to="/company">Company</Link></li>
            <li className={styles.navItem}><Link to="/contato">Contacts</Link></li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
export default Navbar