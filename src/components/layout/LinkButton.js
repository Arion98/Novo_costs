import { Link } from "react-router-dom"

import Styles from "./LinkButton.module.css"

const LinkButton = ({to,text}) => {
  return (
    <div>
        <Link className={ Styles.btn } to={to}>
        {text}
        </Link>
    </div>
  )
}

export default LinkButton