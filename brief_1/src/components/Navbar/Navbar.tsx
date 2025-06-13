import './Navbar.css'
import email from "../../../public/email.png"
import linkedin from "../../../public/linkedin (1).png"
import github from "../../../public/social .png"
import { Link } from 'react-router-dom'

function Navbar() {

  return (

    <>
       <div className="full_navbar">
         <h2 className='init'>CF</h2>
     <Link to="/">Accueil</Link>


      <Link to = "/contact">Contact</Link>


      <a href="#">Projets</a>
    <div className='img_lien'>
    <a href="https://www.linkedin.com/in/fouzy-chikouche-recherche-alternance/">
                <img className="image_liens" src={linkedin} alt="logo_linkedin" />
     </a>
     
    <a href="https://www.linkedin.com/in/fouzy-chikouche-recherche-alternance/">
                <img className="image_liens" src={email} alt="logo_email" />
                 </a>
    <a href="https://www.linkedin.com/in/fouzy-chikouche-recherche-alternance/">
                <img className="image_liens" src={github} alt="logo_github" />
     </a>
    </div>

    

            </div>
    </>

  )
}

export default Navbar