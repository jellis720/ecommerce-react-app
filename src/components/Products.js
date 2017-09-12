import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import {NavLink} from 'react-router-dom';
import ProductList from '../data/productData.js';

export default class Products extends Component {

  render() {

    let ProdList = ProductList.map((product)=>{
      return (
        <div className="prodContainer" key={product.id}>
          <NavLink activeClassName="selected" className="nav-link-prod" to={`/Products/${product.name}`}>
          <img className="prodImage" src={product.imageUrl} alt="productImage"/></NavLink>
          <div className="prodDescription">
            <button className="descDisplay">{product.name}
            </button>
              <div className="prodDetails">
              <NavLink activeClassName="selected" className="quickDescription" to={`/Products/${product.name}`}>
                <p className="servDescription">
                <p>{product.details}</p>
                <p>{product.price}</p>
                </p>
              </NavLink>
              </div>
            </div>
        </div>
)
    })

    return (
      <BaseLayout>
      <div className="content">
        <p className="innerContent">Check out some of these extremely real examples of our work. </p>
      <div className="prodGrid">
      {ProdList}
      </div>
      </div>
      </BaseLayout>
    );
  }
}
