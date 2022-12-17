import CartWidget from "./CartWidget/CartWidget"
import "./NavBar.css"

function NavBar () {
  
    return (
        <header className="header">
            <nav className="nav">
            
                <ul className="NavBar">
                    <li>
                        <a href="/"> Inicio </a>
                    </li>   
                    <li>
                        <a href="/"> Catálogo </a>
                    </li>
                    <li>
                        <p>WMusic</p> 
                    </li>
                    <li>
                        <a href="/"> Contacto </a>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar