import { Link } from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget"
import "./NavBar.css"

function NavBar () {
  
    return (
        <header>
            <nav>
                <ul className="NavBar">
                    <li> 
                        <Link to='/'><img className="logo" src="/multimedia/logo.png" alt="logo" /></Link>
                    </li>
                    <li>
                        <Link className="link" to='/'> Inicio </Link>
                    </li>   
                    <li>
                        <Link className="link"  to='/category/Remeras'> Remeras </Link>
                    </li>
                    <li>
                        <Link className="link"  to='/category/Pantalones'> Pantalones </Link>
                    </li>
                    <li>
                       <Link to='carrito'><CartWidget/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar