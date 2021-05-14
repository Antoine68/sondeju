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
      </div>
    );
  }
}

class FormAccount extends React.Component{

  constructor (props){
    super(props)
    this.state = {
      pseudo : 'darkikou',
      nom : '',
      prenom : '',
      mail : '',
      age : ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      pseudo: e.target.value
    })
  }

  render (){
    return <div class="container">
              <div class="form-group row">
                <div class="row col-lg-2 col-sm-12 col-form-label">
                  <label htmlFor="pseudo">Pseudonyme*</label>
                </div>
                <input type="text" id="pseudo" name="pseudo" class="form-control col-lg-10 col-sm-12" value={this.state.pseudo} onChange={this.handleChange}></input>
              </div>
            </div>
  }
}