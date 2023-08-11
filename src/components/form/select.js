import Styles from "./Select.module.css"

const Select = ({ text, name, options, handleOnChange, value, selected}) => {
  
  
  
  return (
    <div className={Styles.form_control}>
        <label htmlFor = {name}>{text}</label>
        <select 
        name = {name} 
        id = {name} 
        onChange={handleOnChange} 
        value = {value || ""}
        selected = {selected}
        >
            <option  disabled value="" >Selecione uma categoria</option>
            {options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
            </option>
            ))}
        </select>
    </div>
  )
}

export default Select