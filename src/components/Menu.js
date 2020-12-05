import './menu.css'

const listeMenu = [
        "Home",
        "Store",
        "LoginIn",
        "Contact"
]
// function Menu(){
// }
const Menu = () => {
    
    return <ul>{listeMenu.map((value, k) => <li key={k}>{value}</li>)}</ul>

}



export default Menu