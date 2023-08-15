import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { parse,v4 as uuidv4 } from 'uuid'

import styles from './Project.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ServiceCard from '../service/serviceCard'
import ProjectForm from '../project/ProjectForm'
import Menssage from "../layout/Menssage"
import ServiceForm from '../service/serviceForm'
import serviceCard from '../service/serviceCard'

const Project = () => {
  
    const  { id } = useParams()
    
    const [project,setproject] = useState([])
    const [service,setService] = useState([])
    const [showProjectForm,setShowProjectForm] = useState(false)
    const [showServiceForm,setShowServiceForm] = useState(false)
    const [menssage,setMenssage] = useState()
    const [type,setType] = useState()
    useEffect(() => {
     setTimeout(() => {
        fetch(`http://localhost:5000/projects/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
        })
        .then((resp) => resp.json())
        .then((data) =>{
           setproject(data)
           setService(data.services)
        })
        .catch((err) => console.log(err))
     },300)
    },[id])

    function createService(project){
        setMenssage('')
        const lastService = project.services[project.services.length -1]

          lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //maximum value validation
        if(newCost > parseFloat(project.budget)){
            setMenssage("Orçamento ultrapassado, verefique o valor do serviço!")
            setType("error")
            project.services.pop()
            return false
        }
        //add service cost to project total cost
        project.cost = newCost
        //update project
        fetch(`http://localhost:5000/projects/${project.id}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setShowServiceForm(false)
        })
        .catch((err) => console.log(err))
    }

    function RemoveService(id, cost){
        const serviceUpdated = project.services.filter(
            (service) => service.id !== id
        )
        const projectUpdated = project

        projectUpdated.services = serviceUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(projectUpdated)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setMenssage("")
            setproject(projectUpdated)
            setService(serviceUpdated)
            setMenssage("Serviço removido com sucesso")
            setType("success")
        })
        .then((err) => console.log(err))
    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function Editpost(project){
        setMenssage("")
        console.log(project)
        if(project.budget < project.cost){
            setMenssage("O orçamento não pode ser menor que o custo do projeto!")
            setType("error")
            return false
        }
    fetch(`http://localhost:5000/projects/${project.id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) =>{
        setproject(data)
        setShowProjectForm(false)
        setMenssage("Projeto atualizado com sucesso :D")
        setType("success")
    })
    .catch((err) => console.log(err))
    }

    return (
    <div className={styles.Project_container}>
        {project.name ? (
          <div>
            <Container customClass = 'colomn'>
                {menssage && <Menssage type={type} msg={menssage}/>}
                <div className={styles.details_container}>
                    <h1>Projeto:{project.name} </h1>
                    <button onClick={toggleProjectForm} className={styles.btn}>
                        {!showProjectForm ? "Editar Projeto": "fechar"}</button>
                        {!showProjectForm ? (
                            <div className={styles.Project_info}>
                                <p>
                                    <span>Categoria:</span>{project.category.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento:</span> R$ {project.budget}
                                </p>
                                <p>
                                    <span>Total utilizado:</span> R$ {project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.Project_info2}>
                                <ProjectForm 
                                handleSubmit={Editpost} 
                                projectData={project}
                                />
                            </div>
                        )}
                </div>
                <div className={styles.service_form_container}>
                    <h2>Adicione um serviço:</h2>
                <button onClick={toggleServiceForm} className={styles.btn}>
                        {!showServiceForm ? "Adicionar Projeto": "fechar"}</button> 
                    <div className={styles.Project_info2}>
                            {showServiceForm && (
                                <ServiceForm 
                                handleSubmit={createService}
                                textBtn="Adicionar serviço"
                                projectData={project}
                                />
                            )}
                    </div>          
                </div>
                <h2>Serviços</h2>
                <Container customClass="start">
                    {service.length > 0 &&
                    service.map((services) => (
                        <ServiceCard 
                        id = {services.id}
                        name = {services.name}
                        cost = {services.cost}
                        description = {services.description}
                        key = {services.id}
                        handleRemove = {RemoveService}
                        />
                    ))
                    }
                    {service.length === 0 && <p>Não há serviços cadastrados</p>}
                </Container>
            </Container>
          </div>
        ):(
            <Loading />
        )}
 
    </div>
  )
}

export default Project