import React,{useState} from 'react'


import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

const ServiceForm = ({handleSubmit, textBtn, projectData}) => {

  const [service,setService] = useState()

  const submit = (e) =>{
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handChange(e){
    setService({...service,[e.target.name]:e.target.value})
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input 
      text="Nome do serviço:"
      type="text"
      name="name"
      placeholder="Digite o nome do serviço"
      handleOnChange={handChange}
      required={true}
      />
      <Input 
      text="Custo do serviço:"
      type="number"
      name="cost"
      placeholder="Insira o valor total"
      handleOnChange={handChange}
      required={true}
      />
      <Input 
      text="Descrição do serviço:"
      type="text"
      name="description"
      placeholder="Descreva o serviço"
      handleOnChange={handChange}
      required={true}
      />
      <SubmitButton text={textBtn} />
    </form>
  )
}

export default ServiceForm