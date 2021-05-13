import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/header.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn } from "mdbreact";

import React, { Fragment } from "react";

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

export default class Header extends React.Component {
  render()  {
    return (
      <header class="container mw-100 bg-white shadow-lg py-4 inline m-0 p-0">
        <div class="row">

          <div class="col-lg-1"></div>

          <a class="col-lg-2 mt-2 text-center" href="#">
              <Logo></Logo>
          </a>

          <div class="col-lg-6 text-center">
            <Searchbar></Searchbar>
          </div>

          <div class="col-lg-2 text-center">
            <ButtonPage></ButtonPage>
          </div>

          <div class="col-lg-1"></div>

        </div>
      </header>
    );
  }
}

const Logo = () => {
  return (
    <Fragment>
      <img src="Sondeju_logo.png" width="150" height="40" class="d-inline-block align-top" alt=""></img>
    </Fragment>
  );
}

const Searchbar = () => {
  return (
    <Fragment>
      <div class="input-group rounded mt-2">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </Fragment>
  );
}

const ButtonPage = () => {
  return (
    <Fragment>
      <MDBBtn type="button" gradient="blue">
                Mon compte
      </MDBBtn>
    </Fragment>
  );
}