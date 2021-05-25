import './../styles/Header.css';
import 'react-dropdown/style.css';

import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render()  {
    return (
      <header class="container mw-100 m-0 p-0">
        <div class="row bg-white m-0">

          <div class="col-lg-1 col-md-0"></div>

          <div class="col-lg-2 col-md-12 mt-3 text-center logo-container">
              <Logo></Logo>
          </div>

          <div class="col-lg-6 col-md-12 text-left">
            <Searchbar></Searchbar>
          </div>

          <div class="col-lg-3 col-md-12 border-left">
            <div class="mt-3 text-center">
              <ButtonPage></ButtonPage>
            </div>
          </div>

        </div>

        <div class="row bg-grey shadow-bottom mw-100 m-0 p-0 ">

          <div class="col-lg-3 col-md-0"></div>

          <div class="col-lg-6 col-md-12 text-center">
            <div class="row">

              <a class="ml-5 col-lg-3 text-left mt-1 mb-2 d-flex align-items-center">
              <i class="fas fa-plus blue-color fa-1x mr-2" aria-hidden="true"></i>
                <Link to="/creer-sondage"><div class="text color-grey hover-texte">Créer un sondage</div></Link>
              </a>

              <a class="ml-5 col-lg-3 text-left mt-1 mb-2 d-flex align-items-center">
              <i class="fas fa-atlas blue-color fa-1x mr-2" aria-hidden="true"></i>
                <div class="text color-grey hover-texte">Accéder au tutoriel</div>
              </a>
              
              <a class="ml-5 col-lg-3 text-left mt-1 mb-2 d-flex align-items-center">
              <i class="fas fa-random blue-color fa-1x mr-2" aria-hidden="true"></i>
                <div class="text color-grey hover-texte">Sondage au hasard</div>
              </a>

            </div>
          </div>
          
          <div class="col-lg-3 col-md-0 m-0 p-0"></div>

        </div>
      </header>
    );
  }
}

const Logo = () => {
  return (
    <Fragment>
      <Link to="/">
        <img src="Sondeju_logo.png" width="150" height="40" class="d-inline-block align-top right-line" alt=""></img>
      </Link>
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
    <Link to="/inscription">
        <button type="button" class="btn btn-outline-info button-account" data-mdb-ripple-color="dark">
        <i class="fas fa-user mr-1"></i>
          Mon compte
        </button>
      </Link>
    </Fragment>
  );
}