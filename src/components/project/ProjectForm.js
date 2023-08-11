import { useState, useEffect } from "react"

import SubmitButton from "../form/SubmitButton"
import Input from "../form/input"
import Select from "../form/select"

import Styles from "./ProjectForm.module.css"

const ProjectForm = ({handleSubmit, projectData}) => {

const [categories,setCategories] = useState([])
const [NovoProjeto, setNovoProjeto] = useState(projectData || {})
useEffect(() =>{
  fetch("http://localhost:5000/categories",{
    method:"GET",
    headers:{
      "Content-type" : "application/json",
    },
  })
  .then((resp) => resp.json())
  .then((data) => {
    setCategories(data)
  })
  .catch((err) => console.log(err))
},[])


const submit = (e) => {
  e.preventDefault()
  handleSubmit(NovoProjeto)
   //console.log(NovoProjeto)
 }
function handleChange(e) {
  setNovoProjeto({...NovoProjeto,[e.target.name]: e.target.value})
  

}

function handleCategory(e) {
  setNovoProjeto({
    ...NovoProjeto,
    category:{
      id:e.target.value,
      name:e.target.options[e.target.selectedIndex].text,
  },
  })  
}

  return (
    <div className={Styles.form}>
       <form onSubmit={submit}>
      <Input 
      type="text"
      text="Nome do Projeto:"
      name="name"
      placeholder="Insira o nome do projeto"
      handleOnChange={handleChange}
      required={true}
      value={NovoProjeto.name ? NovoProjeto.name: ''}
      />
      <Input 
      type="number"
      text="Orçamento do Projeto:"
      name="budget"
      placeholder="Insira o orçamento total"
      handleOnChange={handleChange}
      required={true}
      value={NovoProjeto.budget ? NovoProjeto.budget : ''}
      />
        <div>
         <Select 
         name = "category_id"
         text  = "Selecione uma categoria:"
         options = {categories}
         selected = {true}
         handleOnChange ={handleCategory}
         value={NovoProjeto.category ? NovoProjeto.category.id : ''}
         />
        </div>
        <div>
           <SubmitButton 
           text = "Criar Projeto"   
           />
        </div>
       </form>
    </div>
  )
}

export default ProjectForm