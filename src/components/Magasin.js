import React from 'react'
// context
//sous components
import Article from './Article'
import BoutiqueContext from '../BoutiqueContext'


function Magasin() {

    const costumesContext = React.useContext(BoutiqueContext)
    /* // déclare une nouvelle methode
    buyArticle(vehicule) {
        let stock;
        switch (vehicule) {
            case "moto":
                console.log("vous avez acheté une moto")
                if (this.state.stockMoto > 0) {
                    stock = this.state.stockMoto - 1
                    this.setState({ stockMoto: stock })
                }
                break
            case "voiture":
                console.log("vous avez acheté une voiture")
                if (this.state.stockVoiture > 0) {
                    stock = this.state.stockVoiture - 1
                    this.setState({ stockVoiture: stock })
                }
                break
            case "camion":
                console.log("vous avez acheté un camion")
                if (this.state.stockCamion > 0) {
                    stock = this.state.stockCamion - 1
                    this.setState({ stockCamion: stock })
                }
                break
                default:
        }
    } */
    return <div>
        {costumesContext.Costumes.map((value, k) => <Article key={k} nom={value.title} price={value.price} size={value.size} url={value.url}>{value.desc}</Article>)}
    </div>
}

export default Magasin;