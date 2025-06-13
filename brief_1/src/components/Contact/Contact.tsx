import "./Contact.css"
import linkedin from "../../../public/linkedin contact.png"
import github from "../../../public/github contact.png"
import mail from "../../../public/email contact.png"


function Contact(){
    return(
    <>

<div className="full_contact">
        <h1 className="title">Contacter-moi</h1>
<div className="logo">
    
            <a href="https://www.linkedin.com/in/fouzy-chikouche-recherche-alternance/">
        <img className="img_contact" src={linkedin} alt="image_contact"></img>
        </a>

               <a href="https://www.linkedin.com/in/fouzy-chikouche-recherche-alternance/">
               <img className="img_contact" src={github} alt="image_contact"></img>
               </a>

               <a href="https://www.linkedin.com/in/fouzy-chikouche-recherche-alternance/">

                        <img className="img_contact" src={mail} alt="image_contact"></img>
                    </a>

                            </div>

                             <div className="div_button">
                                        <button type="button" className="explore-button">
                                Envoyer un message
                                                </button>
                                        </div>

                                                </div>

    </>

    )
}
export default Contact