import React from "react";
import { Link } from 'react-router-dom';
import '../styles/App.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import {addConnection} from '../store/actions'

class ConnectionComponent extends React.Component {

    constructor(props) {
        super(props)
        this.onChangePseudo = this.onChangePseudo.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            pseudo: '',
            password: '',
            name: '',
            firstname: '',
            mail:'',
            age: '',
            redirect:'0'
        }
    }

    onChangePseudo(e) {
        this.setState({pseudo: e.target.value})
    }

        
    onChangePassword(e) {
        this.setState({password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()


        axios.get('http://localhost:5000/api/connection/'+ this.state.pseudo +'/'+this.state.password)
            .then(
                res => {
                    if (res.status == 200){
                        console.log(res.data)
                        document.getElementById("erreur").innerHTML = res.data
                    }else{
                        console.log(res.data)
                        let user = res.data;
                        let userConnected = {...user[0], connected : true};
                        this.props.addConnection(userConnected);
                        this.setState({redirect : 1});
                    }
                });
    }

  render()  {
    if(this.state.redirect == '1'){
        return <Redirect to={this.props.redirect} />
    }
    return (
        <div>
            <h1 class="text-center font-weight-bold blue-color">Connexion</h1>

            <div class="container mt-5 mb-5">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-md-8">
                <form class="bg-white rounded shadow-5-strong p-5" onSubmit={this.onSubmit}>

                <div class="form-outline mb-4">
                    <label class="form-label" for="pseudo">Pseudonyme</label>
                    <input  id="pseudo" class="form-control" onChange={this.onChangePseudo}/>
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="password">Mot de passe</label>
                    <input type="password" id="password" class="form-control" onChange={this.onChangePassword}/>
                    </div>
                    <div id="erreur" class="col-lg-12 col-sm-12 mb-5 text-danger text-center"></div>

                    <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        <div class="form-check">
                        <input class="form-check-input " type="checkbox" value="" id="souvenir" checked />
                        <label class="form-check-label" for="souvenir">
                            Se souvenir de moi
                        </label>
                        </div>
                    </div>

                    <div class="col text-center">
                        <a class="blue-color">Mot de passe oublié ?</a>
                    </div>
                    </div>

                    <button class="btn btn-primary btn-block bg-button" type="submit">Se connecter</button>


                    <div class="col text-center mt-5">
                        <Link to="/inscription" class="blue-color">Créer un compte</Link>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
  }
}


export default connect(null, {addConnection})(ConnectionComponent);