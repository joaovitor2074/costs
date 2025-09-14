import { useNavigate } from 'react-router-dom'
import Container from '../layouts/container'
import ProjectForm from '../projects/ProjectForm'

export default function NewProject() {
  const navigate = useNavigate()

  function createPost(project) {
    // inicializa custos e serviços
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        
        // redireciona com mensagem
        navigate('/projects', {
          state: { message: 'Projeto criado com sucesso!' },
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <Container>
      <h2 className="titulo">Criar Projeto</h2>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </Container>
  )
}
