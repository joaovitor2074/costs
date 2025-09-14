import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import Message from "../layouts/msg"
import styles from "./projects.module.css"
import LinkButton from '../layouts/LinkButton'
import Container from '../layouts/container'
import Loading from "../layouts/Loading"
import ProjectCard from "../projects/ProjectCard"

function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setremoveLoading] = useState(false)
    const [projectMessage,setProjectMessage] = useState('')

    const location = useLocation()
    let message = ""

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {

                    setProjects(data)
                    setremoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 500);
    }, []) // <- array de dependências sempre aqui

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(resp => resp.json())
            .then(() => {
                setProjects((prevProjects) =>
                    prevProjects.filter((project) => project.id !== id),
                    setProjectMessage("projeto removido com sucesso")
                )
            })
            .catch((err) => console.log(err))
    }



    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 className={styles.title}>Meus Projetos</h1>
                <div className={styles.actions}>
                    <LinkButton
                        to="/newproject"
                        text="Criar Projeto"
                        className={styles.cta}
                    />
                </div>
            </div>

            {message && (
                <div className={styles.message}>
                    <Message type="success" msg={message} />
                </div>
            )}
            {projectMessage && (
                <div className={styles.message}>
                    <Message type="warning" msg={projectMessage} />
                </div>
            )}


            <Container customClass="start">
                {projects.length > 0 && (
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category?.name}
                            handleRemove={removeProject}

                        />
                    ))
                )}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>nao ha projetos cadastrados!</p>
                )

                }
            </Container>
        </div>
    )
}

export default Projects