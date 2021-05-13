import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'react-dropdown/style.css';
import { Link } from "react-router-dom";


import React, { Fragment } from "react";
import Header from './Header';
import Footer from './Footer';

export default class NewsFeed extends React.Component {
    
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
                {this.props.children}
            </div>
            <Footer></Footer>
      </Fragment>
    );
  }
}