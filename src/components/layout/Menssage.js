import React, { useState, useEffect } from 'react';
import Styles from "./menssage.module.css"

const Mensage = ({ type, msg }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const time =setTimeout(() => {
        setVisible(false)
    }, 3000);
     return () => clearInterval(time);
    },[msg]);

  return (
    <div className={Styles.container_Projects}>
     <>
     {visible && (
        <div className={`${Styles.menssage} ${Styles[type]}`}>{msg}</div>
      )}
     </>
    </div>
  );
};

export default Mensage;