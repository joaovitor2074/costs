import { useEffect, useState } from "react";
import styles from "../projects/projectform.module.css";
import Input from "../form/Input";
import Select from "../form/select";
import SubmitButton from "../form/submitButton";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {})



  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        // transforma o formato {id, name} -> {value, label}
        const formattedCategories = data.map((cat) => ({
          value: cat.id,
          label: cat.name
        }));
        setCategories(formattedCategories);
      })
      .catch((err) => console.log(err));
  }, []);


  const submit = (e) => {
    e.preventDefault()
    console.log(project)
    handleSubmit(project)
  }

function handleChange(e) {
  setProject({ ...project, [e.target.name]: e.target.value })
}

function handleCategory(e) {
  setProject({
    ...project,
    category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    },
  })
}


  return (
    <form onSubmit={submit} className={styles.Form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        handleOnChange={handleChange}
        placeholder="Insira o nome do projeto"
        value={project.name}
      />

      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        handleOnChange={handleChange}
        placeholder="Insira o orçamento total"
        value={project.budget}
      />

      <Select 
        name="category_id"
        text="Selecione uma categoria"
        options={categories}
        handleOnChange={handleCategory} 
        value={project.category?project.category.id:""}  // agora está no formato certo
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
