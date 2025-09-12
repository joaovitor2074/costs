import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li className={styles.socialItem}><FaFacebook /></li>
        <li className={styles.socialItem}><FaInstagram /></li>
        <li className={styles.socialItem}><FaLinkedin /></li>
      </ul>
      <p className={styles.copyRight}>
        <span>JV Dev</span> &copy; 2025
      </p>
    </footer>
  )
}

export default Footer
