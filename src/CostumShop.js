import React from 'react'
import BoutiqueContext from './BoutiqueContext';
import Magasin from './components/Magasin'
import Menu from './components/Menu'
// import de mes produits
import Costumes from './costumes.json'


class CostumShop extends React.Component {
    constructor(props){
        super(props)
        this.state = {Costumes}
    }

    render() {
        console.log(this.state);
        return (
            <BoutiqueContext.Provider value={this.state}>
                <Menu />
                <Magasin />
                {/* <Panier /> */}
            </BoutiqueContext.Provider>
        )


    }

}
export default CostumShop;