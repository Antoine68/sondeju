import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './../styles/Account.css';
import { Link} from 'react-router-dom';

import React from "react";


export default class AccountContent extends React.Component {
  render()  {
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

class FormAccount extends React.Component{

  constructor (props){
    super(props)
    this.state = {
      pseudo : 'Loïc',
      nom : '',
      prenom : '',
      mail : '',
      age : '1'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      pseudo: e.target.value.pseudo,
      nom: e.target.value.nom,
      prenom: e.target.value.prenom,
      mail: e.target.value.mail,
      age: e.target.value.age
    })
  }

  render (){
    return <div class="container">
              <div class="form-group row">
                <div class="row col-lg-2 col-sm-12 col-form-label">
                  <label htmlFor="pseudo">Pseudonyme* :</label>
                </div>
                <input type="text" id="pseudo" name="pseudo" class="form-control col-lg-10 col-sm-12" value={this.state.pseudo} onChange={this.handleChange}></input>
              </div>


              <div class="form-group row">
                <div class="row col-lg-2 col-sm-12 col-form-label">
                  <label htmlFor="nom">Nom :</label>
                </div>
                <input type="text" id="nom" name="nom" class="form-control col-lg-4 col-sm-12" value={this.state.nom} onChange={this.handleChange}></input>
                <div class="row col-lg-2 col-sm-12 col-form-label ml-3">
                  <label htmlFor="prenom">Prenom :</label>
                </div>
                <input type="text" id="prenom" name="prenom" class="form-control col-lg-4 col-sm-12" value={this.state.prenom} onChange={this.handleChange}></input>
              </div>

              <div class="form-group row">
                <div class="row col-lg-2 col-sm-12 col-form-label">
                  <label htmlFor="mail">Adresse mail :</label>
                </div>
                <input type="text" id="mail" name="mail" class="form-control col-lg-10 col-sm-12" value={this.state.mail} onChange={this.handleChange}></input>
              </div>

              <div class="form-group row">
                <div class="row col-lg-2 col-sm-12 col-form-label">
                  <label htmlFor="age">Age* :</label>
                </div>
                <input type="number" id="age" name="age" class="form-control col-lg-10 col-sm-12" value={this.state.age} onChange={this.handleChange}></input>
              </div>
            </div>
            
  }
}