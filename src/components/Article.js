import BoutonArticle from './BoutonArticle'
import './article.css'

//export default () autre syntaxe
function Article (props) {
    return <div className="fiche">
        <div className="title">{props.nom.toUpperCase()}</div>
        <div><img className="image" src={props.url} alt={props.nom}/></div>
        <div className="price">{props.price} €</div>
        <p className="desc">{props.children}</p>
        {/* <BoutonArticle nom={props.nom}/> */}
        {/*<div className="stock">{this.props.stock === 0 ? "Produit Indisponible" : "En Stock : " + this.props.stock}</div>*/} 
        {/* Exemple d'utilisation des `` et du $ pour "incrtuster" des variables JS dans une chaine de caractère => idem concatenation
        <div className="stock">{ this.props.stock === 0 ? "Produit Indisponible" : `En Stock : ${this.props.stock}`}</div> */}
    </div>
}

export default Article