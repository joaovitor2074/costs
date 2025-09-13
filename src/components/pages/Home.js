import styles from "./home.module.css"
import saving from "../../img/homeimg.png"
import LinkButton from "../layouts/LinkButton"

function Home() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        bem vindo ao <span>JV Dev</span>
      </h1>
      <p className={styles.text}>Veja meus Projetos e se divirta</p>
      <LinkButton to="/newproject" text="criar Projeto" />
      <img src={saving} alt="Costs" className={styles.image} />
    </section>
  )
}

export default Home
