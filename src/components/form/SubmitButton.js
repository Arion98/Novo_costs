import Styles from "./SubmitButton.module.css"

const SubmitButton = ({ text}) => {
  return (
    <div className={Styles.form_control}>
   <button className = {Styles.project_btn}>{text}</button>
    </div>
  )
}

export default SubmitButton