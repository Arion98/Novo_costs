import { useNavigate } from "react-router-dom"
import React from 'react'

import Styles from "./NovoProjeto.module.css"
import ProjectForm from '../project/ProjectForm'

const NovoProjeto = () => {

const navigate = useNavigate([])

const CreatePost = (projects) =>{
  projects.cost = 0
  projects.services = []
  fetch("http://localhost:5000/projects",{
    method:"POST",
    headers:{
      "Content-type" : "application/json",
    },
    body: JSON.stringify(projects)
  })
  .then((resp) => resp.json())
  .then((data) => {
   console.log(data)
   navigate("/Projects", {
    state: { menssage: "Projeto criado com sucesso :D" },
  });
  })
  .catch((err) => console.log(err))
}

// function createPost(Projects) {
//   Projects.cost = 0;
//   Projects.services = [];

//   fetch('http://localhost:5000/projects', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(Projects),
//   })
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//       navigate('/NewProject', { state: { mensage: 'Projeto criado com sucesso!' } });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

  return (
 <div className={Styles.novoprojeto_container}>
    <h1>Criar Projetos</h1>
    <p>Crie projetos para depois adicionar os serviços!</p>
    <ProjectForm handleSubmit = {CreatePost} />
 </div>
  )
}

export default NovoProjeto