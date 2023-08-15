import React from 'react'
import styles from "./Loading.module.css"
import Load from "../../img/loading.svg"

const Loading = () => {
  return (
    <div className={styles.Container_load}>
        <img className={styles.load} src={Load} alt="Loading" />
    </div>
  )
}

export default Loading