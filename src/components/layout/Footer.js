import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import Styles from "./Footer.module.css"

const Footer = () => {
  return (
   <footer className={Styles.footer}>
    <ul className={Styles.social_list}>
      <li className={Styles.item}><a href="https://www.google.com/"><FaFacebook/></a></li>
      <li className={Styles.item}><FaInstagram/></li>
      <li className={Styles.item}><FaLinkedin/></li>
    </ul>
    <p className={Styles.copy_right}><span>Costs</span> &copy;2023</p>
   </footer>
  )
}

export default Footer