import './Footer.css'

import instagram from '../assets/imgs/icons/instagram.jpeg'

function Footer(){
    return(
        <div>

            

            <section id="Footer">

                <h1 id='title_footer'>Mirror <span>Fashion</span></h1>


                <section className="footer_information">
                    <strong>Mirror  Fashion:</strong>
                    <p>Localização: Av. Maria Antonia, 987</p>
                    <p>Bairro: Muriti</p>
                    <p>CEP: 63025-250</p>
                    <p>Sâo Paulo - SP</p>
                    <p>Telefone: (021) 98136-5147</p>
                </section>

                <section className="logo_soc">
                    <img src={instagram} />

                </section>
            </section>


        </div>
    )
}

export default Footer