import React from 'react'
import BoutiqueContext from '../BoutiqueContext'
import './menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import burger from '../img/menu.png'

const Menu = () => {
    const costumesContext = React.useContext(BoutiqueContext)
    let nbItem = costumesContext.userPanier.length

    return (
        <header>
            <nav className="mainMenu">
                <a className="logo">COSTUMSHOP</a>
                <input type="checkbox" name="panel" className="dispNone" id="panel" />
                <label htmlFor="panel" className="menuTitle">
                    <img src={burger} alt="burger" />
                    { nbItem>0 ? <span className="badge badge-pill badge-primary ml-2 bdg2">{nbItem}</span> : "" }
                </label>
                <ul className="menu">
                    <li><a className={costumesContext === 1 ? "menuActive" : "" }>Costumes</a></li>
                    <li><a>Accessoires</a></li>
                    <li><a onClick={(event) => { costumesContext.displayPanier(event) }}>Panier {nbItem > 0 ? <span className="badge badge-pill badge-primary ml-2">{nbItem}</span> : ""}</a></li>
                    <li><a>Log In</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Menu