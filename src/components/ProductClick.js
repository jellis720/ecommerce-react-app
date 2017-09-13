import React, { Component } from 'react';
import BaseLayout from "./BaseLayout.js"
import {productList} from "../data/productData.js"

export default class ProductClick extends Component {
  constructor(props){
    super(props);
  }
  render(){

    let match = this.props.match;
    let productSel = match.params.id;

    let widgetSelect = productList.map((widgetSel)=>{
      if (widgetSel.name === productSel){
        return(
          <div key={widgetSel.id}>
           <img className="selectedImg" src={widgetSel.imageUrl} />
           <p>{widgetSel.name}</p>
           <p>{widgetSel.details}</p>
           <p>{widgetSel.price}</p>
          </div>
        )
      } else {
        return console.log(widgetSel.name)
;
      }
    })

    return(
        <div className="oneProduct">
        <BaseLayout>
        {widgetSelect}
        </BaseLayout>
        </div>
    )
  }
}
