import Styles from "./Home.module.css"

import IMG from "../../img/savings.svg"
import LinkButton from "../layout/LinkButton"

const Home = () => {
  return (
    <section className={Styles.Home_container}>
    <h1>Bem-vindo ao <span>Costs</span></h1>
    <p>Começe a gerenciar seus projetos agora mesmo!</p>
    <LinkButton 
    to="/NovoProjeto"
    text="Criar Projeto"
    />
    <img src={IMG} alt="Savings" />
  </section>
  )
}

export default Home