import './Main.css'

/*importar imagem da lupa*/
import search from '../assets/imgs/icons/search.png'

/*importar imagens da apresentação do main*/
import image_apre_one from '../assets/imgs/apres_main/abrigo.jpeg'
import image_apre_two from '../assets/imgs/apres_main/Coraz.jpeg'
import image_apre_tree from '../assets/imgs/apres_main/User.jpeg'

function Main(){
    return(
        <div> 
            <div id='main'>

                <section id="search">
                <form action="#">
                <input type="text" placeholder=" Ex: Vestidos, Shorts...." id="to_look_for"/>
                <img src={search}  />
                </form>
                </section>
                
            </div>

            <div id='present_web'>
                <section id='present_main'>
                    <img src={image_apre_two} />

                   <section id='text_apr'>
                    <h3>Mirror Fashion</h3>

                    <p>Tudo de mais moderno em um só lugar!</p>
                    <p>Apenas um click de distância para chegar em <strong>destaque!</strong></p>
                    <h2>Agora é a hora de arrasar!</h2>
                    <button type='button'>Quero Agora!</button>
                   </section>
                </section>
            </div>
        </div>
    )
}

export default Main