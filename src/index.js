import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from'./components/Contact';
import Services from './components/Services';
import ProductClick from './components/ProductClick';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/Products/:id" component={ProductClick}/>
        <Route path="/Products" component={Products}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Services" component={Services}/>
      </Switch>
    </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
