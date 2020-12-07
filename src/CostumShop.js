import React from 'react'
import BoutiqueContext from './BoutiqueContext';
import Menu from './components/Menu'
import Panier from './components/Panier'
import Magasin from './components/Magasin'
import Footer from './components/Footer'
// import de mes produits
import Costumes from './costumes.json'


class CostumShop extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Costumes,
            menuActive:1,
            dispPanier:false,
            userPanier:[],
            displayPanier:this.displayPanier.bind(this),
            stopProb:this.stopProb.bind(this),
            buyArticle:this.buyArticle.bind(this),
            annulArticle:this.annulArticle.bind(this)
        }
    }
    displayPanier(event){
        event.preventDefault()
        console.log("displayPanier");
        let display = !this.state.dispPanier
        this.setState({dispPanier:display})
    }
    stopProb(event){
        event.stopPropagation();
    }
    buyArticle(costumKey) {
        let stock;
        let tbCostum = this.state.Costumes;
        let tbUserPanier = this.state.userPanier;
        
        tbCostum.map((value,k)=>{
            if(k===costumKey){
                if (tbCostum[k].qt > 0) {
                    stock = tbCostum[k].qt - 1;
                    /* ATTENTION!!!!!
                     this.setState(()=>{
                        this.state.Costumes[k].qt=stock; // modifier le state ne fonctionne pas il faut le réatribuer!!!
                    }) Je vous avais bien dit de ne pas utiliser un function
                    mais de réassigner directement une valeur à mon state*/
                    tbCostum[k].qt=stock;
                    tbUserPanier.push(k);
                    this.setState({Costumes:tbCostum,userPanier:tbUserPanier})
                    // idem pour le userCart => impossible d'utiliser une fonction pour le modifier
                }
            }
        })
    }
    annulArticle(n){
        let newUserPanier = this.state.userPanier;
        newUserPanier.splice(n,1);
        this.setState({userPanier:newUserPanier})
    } 
    render() {
        return (
            <BoutiqueContext.Provider value={this.state}>
                <Menu />
                <Magasin />
                {this.state.dispPanier ? <Panier /> : ""}
                <Footer/>
            </BoutiqueContext.Provider>
        )
    }
}
export default CostumShop;