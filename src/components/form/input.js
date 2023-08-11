import Styles from "./Input.module.css"

const input = ({type, text, name, placeholder, handleOnChange, value,required}) => {
  return (
    <div className={Styles.form_control}>
        <label htmlFor = {name}>{text}</label>
     <input 
     type={type}
     name = {name}
     id = {name}
     placeholder = {placeholder}
     onChange = {handleOnChange}
     value = {value}
     required = {required}
      />
    </div>
  )
}

export default input