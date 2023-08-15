import React from 'react'
import styles from '../project/ProjectCard.module.css'
import {BsFillTrashFill} from "react-icons/bs"

const serviceCard = ({id, name, cost, description, handleRemove}) => {

    const Remove = (e) =>{
        e.preventDefault()
        handleRemove(id ,cost)
    }

  return (
    <div className={styles.projectcard}>
        <h4>{name}</h4>
        <p>
            <span>Custo total:</span> R${cost}
        </p>
        <p>
            <span>Descrição:</span> {description}
        </p>
        <div className={styles.actions}>
            <button onClick={Remove}>
                <BsFillTrashFill />
                Excluir
            </button>
        </div>
    </div>
  )
}

export default serviceCard