import React from 'react'
// context
//sous components
import Article from './Article'
import BoutiqueContext from '../BoutiqueContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './magasin.css'


function Magasin() {

    const costumesContext = React.useContext(BoutiqueContext)

    return <div className="container">
        <div className="row costumes">
            {costumesContext.Costumes.map((value, k) => <Article key={k} target={k} />)}
        </div>
    </div>
}

export default Magasin;