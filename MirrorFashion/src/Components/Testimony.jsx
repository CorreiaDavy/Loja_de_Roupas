<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />


import './Testimony.css'
import avatar from '../assets/imgs/icons/avatar.jpeg'
import star from '../assets/imgs/icons/star.png'

function Testimony(){
    return(
        <div>

            <section id="testimony">

                <div className="card_testimony">
                    <h3>Ivone Silva</h3>
                    <img src={avatar} alt="" />

                    <strong className='star_card'>&#9733; &#9733; &#9733; &#9733; &#9733; &#9733;</strong>

                    <p>Toda vez que realizei compras neste site, recebi tudo certinho e muito atencoso o vendedor. No início fiquei com receio da compra, porque é muito difícil comprar online, já quen ão é possível vestir como em uma loja presencial. Porém, os produtos chegaram tudo no corforme e coube certinho. Estou muito satisfeita.</p>

                   

                </div>

                <div className="card_testimony" >
                    <h3>Jose Francisco</h3>
                    <img src={avatar}  />

                    <strong className='star_card'>&#9733; &#9733; &#9733; &#9733; &#9733; &#9733;</strong>


                    <p>Chegou tudo conforme o que foi comprado e bem embalado. Irei comprar mais vezes, e recomendo para meus amigos.</p>

                    

                    

                </div>

                <div className="card_testimony">
                    <h3>Danilo Barbosa</h3>
                    <img src={avatar} alt="" />

                    <strong className='star_card'>&#9733; &#9733; &#9733; &#9733; &#9733; &#9733;</strong>

                    <p>Comprei umas roupas para minha esposa, ela amou. Foi a melhor compra que realizei pela internet de roupas, loja como essa é difícil. Quero comprar mais vezes! Exelentes produtos e preços!.</p>

                    

                </div>
                
            </section>
        </div>
    )
}

export default Testimony