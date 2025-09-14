// src/projects/ProjectCard.js
import styles from "./projectCard.module.css"
import { BsFillTrashFill, BsPencil } from "react-icons/bs"
import { Link } from "react-router-dom"

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const projectCategory = category || "Sem categoria"

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{name}</h4>

      <p className={styles.info}>
        <span className={styles.label}>Orçamento:</span> R$ {budget}
      </p>

      <p className={`${styles.info} ${styles.category}`}>
        <span className={styles.label}>Categoria:</span>
        <span
          className={`${styles.categoryDot} ${styles[`category${projectCategory}`] || ""
            }`}
        ></span>
        {projectCategory}
      </p>

      <div className={styles.actions}>
        {/* botão de editar (opcional) */}
        <Link to={`/project/${id}`} className={styles.edit}>
          <BsPencil /> Editar
        </Link>

        {/* botão de remover */}
        <button className={styles.remove} onClick={remove}>
          <BsFillTrashFill /> Remover
        </button>
      </div>
</div>
)}

export default ProjectCard
