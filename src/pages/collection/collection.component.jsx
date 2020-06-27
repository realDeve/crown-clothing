import React from 'react';

import {connect} from 'react-redux';

import { selectCollection } from "../../redux/shop/shop.selector";
import './collection.style.scss';

import  CollectItem from "../../components/colection-item/collection-item.component";


const CollectionPage = ({ collection }) =>{

    const { title,items}=collection;

console.log(collection);

    return (
    <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className="items">
    {items.map(item =>
        (
            <CollectItem key={item.id} item={item}/>
            
        ))}
    </div>
    </div>
    )
}

const mapStateToProps =(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps) (CollectionPage);