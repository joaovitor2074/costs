import React, { useState } from 'react';
import Container from '../layouts/container';
import styles from './newproject.module.css';
import ProjectForm from '../projects/ProjectForm';


export default function NewProject() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        // lógica de envio (ex: chamada ao backend)
        console.log({ name, price });
        setName('');
        setPrice('');
    }


    return (
        <Container>
            <h2 className="titulo">Criar Projeto</h2>
            <p>Crie seu projeto para depois adicionar os servicos</p>
            <ProjectForm btnText="criar projeto"/>
        </Container>
    )
}