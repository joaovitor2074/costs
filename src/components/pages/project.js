import styles from './project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layouts/Loading'
import Container from '../layouts/container'
import Message from '../layouts/msg'
import ProjectForm from '../projects/ProjectForm'

export default function Project() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [showProjectForm, setshowProjectForm] = useState(false)
  const [showServiceForm, setshowServiceForm] = useState(false)
  const [message, setmessage] = useState()
  const [type, settype] = useState()

  // Carregar projeto da API
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data)
          console.log("Projeto carregado:", data)
        })
        .catch((err) => console.log(err))
    }, 800)
  }, [id])

  // Editar projeto
  function editPost(projectData) {
    setmessage('')

    if (projectData.cost > projectData.budget) {
      setmessage('o orçamento nao pode ser menor que o custo do projeto')
      settype('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${projectData.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectData),
    })
      .then(resp => resp.json())
      .then((data) => {
        setProject(data)
        setshowProjectForm(false)
        setmessage('Projeto atualizado com sucesso!!!')
        settype('success')
      })
      .catch(err => console.log(err))
  }

  function toggleProjectForm() {
    setshowProjectForm(!showProjectForm)
  }
  
  function toggleServiceForm(){
    setshowServiceForm(!showServiceForm)

  }

  return (
    <>
      {project ? (
        <div>
          <Container customClass="column">

            {message && <Message type={type} msg={message} />}

            <div className={styles.project_container}>
              <div className={styles.project_header}>
                <h2>Projeto: {project.name}</h2>
                <button onClick={toggleProjectForm} className={styles.project_button}>
                  {!showProjectForm ? "Editar Projeto" : "Fechar"}
                </button>
              </div>

              {!showProjectForm ? (
                <div className={styles.project_details}>
                  <p>
                    <span>Categoria: </span> {project.category?.name}
                  </p>
                  <p>
                    <span>Orçamento: </span> R$ {project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado: </span> R$ {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_details}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>

              <div className='styles.service_form_container'>
                <h2>Adicione um serviço:</h2>
                <button onClick={toggleServiceForm} className={styles.project_button}>
                  {!showServiceForm ? "Adicionar serviço" : "Fechar"}
                </button>
                <div className={styles.project_details}>
                    {showServiceForm && <div>formulario de servico</div>
                      
                    }
                </div>
              </div>

              <h2>servicos</h2>
              <Container customClass="start">
                    <p>itens de servicos</p>
              </Container>    

          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}