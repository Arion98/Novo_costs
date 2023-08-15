import Menssage from "../layout/Menssage"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"

import { useLocation } from "react-router-dom"

import Styles from "./Projects.module.css"
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"

const Projects = () => {
  const location = useLocation()
  const [projects,setProjects] = useState()
  const [removeloading,setRemoveLoading] = useState(false)
  const [projectMenssage,setProjectsMenssage] = useState('')
  let menssage = ""

  if(location.state){
    menssage = location.state.menssage
  }

useEffect(() =>{
setTimeout(
() =>{
fetch('http://localhost:5000/projects',{
  method: "GET",
  headers: {
    "Content-type":"application/json",
  }
})
.then((resp) => resp.json())
.then((data) =>{
      setProjects(data)
      setRemoveLoading(true)
    })
.catch((res) => console.log(res))
},300)

},[])

function RemoveProjects(id){
  fetch(`http://localhost:5000/projects/${id}`,{
    method:'DELETE',
    headers:{
      "Content-type":"application/json"
    },
  })
  .then((resp) => resp.json())
  .then((data)=> {
    setProjects(projects.filter((projects) => projects.id !== id))
    setProjectsMenssage("Projeto removido com sucesso :D")
  })
  .catch((err) => console.log(err))
}

  return (
    <div className={Styles.container_Projects}>
      
      <div className={Styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton 
          to="/NovoProjeto"
          text="Criar Projeto"
        />
      </div>
      {menssage && <Menssage  msg = {menssage} type = "success" />}
      {projectMenssage && <Menssage  msg = {projectMenssage} type = "success" />}
      
        <Container customClass ="start">
        {projects && projects.length > 0 && 
         projects.map((project) => (
        <ProjectCard 
        id = {project.id}
        name={project.name}
        budget={project.budget}
        category={project.category.name}
        key={project.id}
        handleRemove={RemoveProjects}
        />
          ))}
          {!removeloading && <Loading />}
          {removeloading && projects.length === 0 &&(
            <p>Não há projetos cadastrados!</p>
          )}
        </Container>
      
    </div>
  )
}

export default Projects