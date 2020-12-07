import React from 'react'
import BoutiqueContext from '../BoutiqueContext'
import './panier.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Panier = () => {
    const costumesContext = React.useContext(BoutiqueContext)
    let total = 0
    let tbCostum = costumesContext.Costumes
    // exercice transfomer le tableau costumesContext.userPanier
    // pour afficher le nombre d'articles par type ex : 2 costumes de Canard
    return (
        <div className="frame" onClick={costumesContext.displayPanier}>
            <div className="panier" onClick={(event)=>{costumesContext.stopProb(event)}}>
                <h5>Votre Sélection : </h5>

                {costumesContext.userPanier.length>0 ? costumesContext.userPanier.map((value, k)=>{
                    total += tbCostum[value].price
                    return (
                    <li key={k}>Costume de {tbCostum[value].title} - {tbCostum[value].price} € - <a className="text-muted annul" onClick={()=>costumesContext.annulArticle(k)}>Annuler</a></li>
                    
                    // exercice créez un bouton pour retirer l'article du panier    
                        )
                }) : <div>Vous n'avez selectionné aucun article</div>}
                {costumesContext.userPanier.length>0 ? <div className="text-right mt-2 font-weight-bold">Montant Total : {total} €</div> : ""}
            </div>
        </div>
    )
}
export default Panier