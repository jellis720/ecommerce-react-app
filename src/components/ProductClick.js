import React, { Component } from 'react';
import BaseLayout from "./BaseLayout.js"
import Products from "./Products.js"

export default class ProductClick extends Component {
  render(){
    return(
      <div>
      <BaseLayout>
        <h1 className="innerContent">Product Details Page</h1>
      </BaseLayout>
      </div>
    )
  }
}
