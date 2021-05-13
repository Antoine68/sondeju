import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn } from "mdbreact";
import './../styles/header.css';

import React, { Fragment } from "react";

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

export default class Header extends React.Component {
  render()  {
    return (
      <header class="container mw-100 py-2 inline m-0 p-0">
        <div class="row bg-white">

          <div class="col-lg-1 col-md-0"></div>

          <a class="col-lg-2 col-md-12 mt-3 text-center" href="#">
              <Logo></Logo>
          </a>


          <div class="col-lg-6 col-md-12 text-center">
            <Searchbar></Searchbar>
          </div>

          <div class="col-lg-3 col-md-12 mt-3 text-center border-left">
            <ButtonPage></ButtonPage>
          </div>

        </div>

        <div class="row bg-grey shadow-bottom">

          <div class="col-lg-3 col-md-0"></div>

          <div class="col-lg-6 col-md-12 text-center">
            <div class="row">

              <a class="ml-5 col-lg-3 text-left mt-2 mb-2 d-flex align-items-center" href="#">
              <i class="fas fa-plus blue-color fa-2x mr-2" aria-hidden="true"></i>
                <div class="text color-grey">crée un sondage</div>
              </a>

              <a class="ml-5 col-lg-3 text-left mt-2 mb-2 d-flex align-items-center" href="#">
              <i class="fas fa-atlas blue-color fa-2x mr-2" aria-hidden="true"></i>
                <div class="text color-grey">accéder au tutoriel</div>
              </a>

            </div>
          </div>
          
          <div class="col-lg-3 col-md-0"></div>
        </div>
      </header>
    );
  }
}

const Logo = () => {
  return (
    <Fragment>
      <img src="Sondeju_logo.png" width="150" height="40" class="d-inline-block align-top right-line" alt=""></img>
    </Fragment>
  );
}

const Searchbar = () => {
  return (
    <Fragment>
      <div class="input-group md-form form-sm form-2">
        <input class="form-control my-0 red-border" type="text" placeholder="Je cherche une étude..." aria-label="Search"></input>
        <div class="input-group-append">
          <span class="input-group-text indigo darken-3" id="basic-text1"><i class="fas fa-search text-white" aria-hidden="true"></i></span>
        </div>
      </div>
    </Fragment>
  );
}

const ButtonPage = () => {
  return (
    <Fragment>
      <button type="button" class="btn btn-outline-info button-account" data-mdb-ripple-color="dark">
      <i class="fas fa-user mr-1"></i>
        Mon compte
      </button>
    </Fragment>
  );
}