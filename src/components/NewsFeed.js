import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './../styles/newsFeed.css';
import 'react-dropdown/style.css';
import { Link } from "react-router-dom";

import React from "react";

export default class NewsFeed extends React.Component {
  render()  {
    return (
      <div class="container mw-100 m-0 p-0">
          <div class="row mw-100 m-0 p-0">
              <div class="col-lg-3"></div>
              <div class="col-lg-6 card">
                
                <div class="row">

                </div>
                <Link to="/tableau-de-jp-baur">page surprise</Link>
              </div>
              <div class="col-lg-3"></div>
          </div>
      </div>
    );
  }
}