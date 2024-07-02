/*Importar o css para o Header*/
import './Header.css'


/* Icones do cabeçalho*/
import car_shop from '../assets/imgs/icons/car.png'
import menu_bar from '../assets/imgs/icons/menu.png'

function Header(){

    return(
        <div>
            <header>
                <section id="header_menu">
                    <h1 id='title'>Mirror Fashion</h1>

                    <nav id='nav_bar'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li className='dropdown'>
                                <a className='dropbtn' href="#">Produtos</a>
                                <div className="dropbtn_content">
                                    <a href="#">Camisas</a>
                                    <a href="#">Vestidos</a>
                                    <a href="#">Shots</a>
                                    <a href="#">Blusas</a>
                                    
                                </div>
                                </li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Lista de Desejos</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                </section>

                <section id="icons_menu">
                    <img id="car_shop" src={car_shop} alt="icone do carrinho de compras"/>
                    <img id='menu_bar' src={menu_bar} alt="icone do menu da pagina"/>
                </section>
            </header>
        </div>

    )
}

export default Header