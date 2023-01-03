import CartWidget from "./CartWidget/CartWidget"
import "./NavBar.css"

function NavBar () {
  
    return (
        <header className="header">
            <nav>
                <ul className="NavBar">
                    <li>
                        <a className="link" href="/"> Inicio </a>
                    </li>   
                    <li>
                        <a className="link"  href="/"> Catálogo </a>
                    </li>
                    <li>
                        <a className="link"  href="/"> Contacto </a>
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