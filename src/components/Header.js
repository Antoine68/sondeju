import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/header.css';

import React from 'react';

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

export default class Header extends React.Component {
  render()  {
    return (
      <header class="container mw-100 bg-white shadow-lg py-4 inline m-0 p-0">
        <div class="row">
          <div class="col-1"></div>
            <a class="col-2" href="#">
                <img src="Sondeju_logo.png" width="150" height="40" class="d-inline-block align-top" alt=""></img>
            </a>

          <form class="col-6">
            <div class="input-group">
                <div class="input-group-btn search-panel">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    	<span id="search_concept">Filter by</span> <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#contains">Contains</a></li>
                      <li><a href="#its_equal">It's equal</a></li>
                      <li><a href="#greather_than">Greather than</a></li>
                      <li><a href="#less_than">Less than</a></li>
                      <li class="divider"></li>
                      <li><a href="#all">Anything</a></li>
                    </ul>
                </div>
                <input type="hidden" name="search_param" value="all" id="search_param"></input>       
                <input type="text" class="form-control" name="x" placeholder="Search term..."></input>
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                </span>
            </div>
          </form>

          <button type="button" class="btn button-account col-2">Mon compte</button>
          <div class="col-1"></div>
        </div>
      </header>
    );
  }
}

