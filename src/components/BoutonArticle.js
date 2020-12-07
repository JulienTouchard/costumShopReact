import React from 'react'
import BoutiqueContext from '../BoutiqueContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function BoutonArticle (props) {
    const costumesContext = React.useContext(BoutiqueContext)
    let costum = costumesContext.Costumes[props.target]
    return <>
        {costum.qt === 0 ? "" : <button className="btn btn-primary mt-2 mb-2" onClick={()=>costumesContext.buyArticle(props.target)}>Buy article</button>}
        <small className="font-italic text-muted ">{costum.qt === 0 ? "Produit Indisponible" : "En Stock : " + costum.qt}</small>
        </>
}
export default BoutonArticle