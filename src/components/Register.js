import React from "react";
import { Link } from 'react-router-dom';
import '../styles/App.css';
import axios from 'axios';

export default class RegisterComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.onChangePseudo = this.onChangePseudo.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
        pseudo: '',
        mail: '',
        password: ''
        }
    }

    onChangePseudo(e) {
        this.setState({pseudo: e.target.value})
    }
    
    onChangeMail(e) {
        this.setState({mail: e.target.value})
    }
    
    onChangePassword(e) {
        this.setState({password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            pseudo: this.state.pseudo,
            mail: this.state.mail,
            password: this.state.password
        };

        console.log(userObject)

        axios.post('http://localhost:5000/api/user', userObject)
            .then(res => console.log(res.data));
    }

    render()  {
        return (
            <div>
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-white">
                    <li class="breadcrumb-item"><Link to="/" class="blue-color font-weight-normal">Accueil</Link></li>
                    <li class="breadcrumb-item"><Link to="/connexion" class="blue-color font-weight-normal">connexion</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">inscription</li>
                </ol>
                </nav>

                <h1 class="text-center font-weight-bold blue-color">Inscription</h1>

                <div class="container mt-5 mb-5">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-md-8">
                    <form class="bg-white rounded shadow-5-strong p-5" onSubmit={this.onSubmit}>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="pseudo">Pseudonyme</label>
                            <input  id="pseudo" class="form-control" onChange={this.onChangePseudo}/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="mail">Adresse mail</label>
                            <input type="email" id="mail" class="form-control" onChange={this.onChangeMail}/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="password">Mot de passe</label>
                            <input type="password" id="password" class="form-control" onChange={this.onChangePassword}/>
                        </div>

                        <button class="btn btn-primary btn-block bg-button" type="submit">S'inscrire</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}