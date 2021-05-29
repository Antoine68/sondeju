import './../styles/Account.css';
import { Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"

import React from "react";
import FormAccount from './FormAccount';

class AccountContent extends React.Component {

  constructor (props){
    super(props)
  }

  render()  {
    const user = this.props.user;
    if (user.connected == false){
      return <Redirect to="/connexion" />
    }
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white">
            <li class="breadcrumb-item"><Link to="/" class="blue-color font-weight-normal">Accueil</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Mon compte</li>
          </ol>
        </nav>

        <h1 class="text-center font-weight-bold blue-color">Mon compte</h1>

        <h3 class="text-left mt-4 mb-0 pb-0 ml-2">Mes informations personnelles</h3>
        <hr></hr>
        <FormAccount></FormAccount>
        <div class="text-center">
          <Link to="/compte">
            <button type="button" class="btn btn-outline-info button-account" data-mdb-ripple-color="dark">
            <i class="fas fa-save mr-1"></i>
              Enregistrer
            </button>
          </Link>
        </div>
        <h3 class="text-left mt-4 mb-0 pb-0 ml-2">Mes sondages</h3>
        <hr></hr>
        <div class="row mw-100 m-0 p-0 mt-3">
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const user = (state) => ({
  user: state.user
});

export default connect(user,null)(AccountContent)
