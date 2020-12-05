import React from 'react'
import BoutiqueContext from '../BoutiqueContext'



function BoutonArticle (props) {
    // J'appelle mon BoutiqueContext Provider qui contient le state de mon component Boutique directement sans passer
    // par mon component intermédiaire Article
    const boutiqueState = React.useContext(BoutiqueContext)
    let stock;
    switch(props.nom){
        case "moto":
            stock = boutiqueState.stockMoto
        break
        case "voiture":
            stock = boutiqueState.stockVoiture
        break
        case "camion":
            stock = boutiqueState.stockCamion
        break
        default:
    }
    
    console.log(boutiqueState);
    return <>
        {stock === 0 ? "" : <button onClick={()=>boutiqueState.buyArticle(props.nom)}>Buy article il me reste {stock} produits</button>}
        </>
}
export default BoutonArticle