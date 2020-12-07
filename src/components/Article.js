import React from 'react'
import BoutonArticle from './BoutonArticle'
import BoutiqueContext from '../BoutiqueContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './article.css'

//export default () autre syntaxe
function Article(props) {
    const costumesContext = React.useContext(BoutiqueContext)
    let costum = costumesContext.Costumes[props.target]
    return <div className="p-2 col-12 col-md-6 col-lg-3 w-100">
        <div className="card">
            <div className="card-header title">
                <h5 className=" text-center">{costum.title.toUpperCase()}</h5>
            </div>
            <img src={costum.url} clasName="card-img-top" alt={costum.title} className="articleImg" />
            <div className="card-body text-center">
                <p className="card-text">{costum.desc}</p>
                <div className="font-weight-bold">{costum.price} €</div>
                <BoutonArticle target={props.target} />
            </div>
        </div>
    </div>
}

export default Article