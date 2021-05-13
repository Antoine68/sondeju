import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'react-dropdown/style.css';
import { Link } from "react-router-dom";


import React, { Fragment } from "react";
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default class Layout extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
  render()  {
    return (
    <Fragment>
      <div class="index2 shadow-lg mb-1">
        <Header></Header>
      </div>
      <div class="index1">
        <Content>
          {this.props.children}
        </Content>
      </div>
      <Footer></Footer>
    </Fragment>
    );
  }
}