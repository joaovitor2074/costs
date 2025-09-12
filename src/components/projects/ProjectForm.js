import React from "react";
import styles from "../projects/projectform.module.css"; // ajusta o caminho se estiver em outra pasta
import Input from "../form/Input";
import Select from "../form/select";
import SubmitButton from "../form/submitButton";

function ProjectForm({btnText}) {
  return (
    <form className={styles.Form}>
      <Input type="text" text="Nome do Projeto"  name= "name" placeholder= "insira o nome do projeto" />
      <Input type="number" text="Orçamento do Projeto"  name= "budget" placeholder= "insira o orcamento total" />
      
     <Select name="category_id" text="selecione uma categoria" />

      <SubmitButton text={btnText}/>
    </form>
  );
}

export default ProjectForm;
