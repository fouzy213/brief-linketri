import "./HomeComposent.css"
import pp from "../../../public/pp.jpg"
function HomeComposent (){
    return(

<>

            <div className="full_pp">
        <img className="image_pp" src={pp} alt="image_pp" />

        
            <h1 className="title_name">Chikouche Fouzy</h1>
            <h2 className="under_title">Fullstack Web Developpeur</h2>
                <p className="para_profil">
                    Développeur passionné spécialisé dans la création d'applications<br></br> web modernes et performantes
                    </p>
            <div className="div_button">
                <button type="button" className="explore-button">
                        Voir mes projets
            </button>
             <button type="button" className="explore-button_1">
              Me contacter
            </button>
                </div>
                </div>
           
</>

 )}

export default HomeComposent