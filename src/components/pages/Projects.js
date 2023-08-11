import Menssage from "../layout/Menssage"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"

import { useLocation } from "react-router-dom"

import Styles from "./Projects.module.css"

const Projects = () => {
  const location = useLocation()
  let menssage = ""

  if(location.state){
    menssage = location.state.menssage
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
      
        <Container customClass ="start">
          <p>Projetos ....</p>
        </Container>
      
    </div>
  )
}

export default Projects