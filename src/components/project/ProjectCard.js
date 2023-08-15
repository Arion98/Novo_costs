import { Link } from 'react-router-dom'
import React from 'react'
import styles from "./ProjectCard.module.css"

import {BsPencil,BsFillTrashFill} from "react-icons/bs"

const ProjectCard = ({id,name,budget,category,handleRemove}) => {
  
const Remove = (e) =>{
  e.preventDefault()
  handleRemove(id)
}
  
  return (
    <div className={styles.projectcard}>
    <h4>{name}</h4>
        <p>
            <span>Orcamento:</span> R${budget}
        </p>
        <p className={styles.categorytext}>
         <span className={`${styles[category]}`}></span>{category}
        </p>
        <div className={styles.actions}>
            
            <Link to = {`/Project/${id}`}>
            <BsPencil/> Editar
            </Link>
            <button onClick={Remove}> 
                <BsFillTrashFill/> Excluir
            </button>
        </div>
    </div>
  )
}

export default ProjectCard