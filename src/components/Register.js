import React from "react";
import { Link } from 'react-router-dom';
import '../styles/App.css';
import axios from 'axios';

export default class RegisterComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.onChangePseudo = this.onChangePseudo.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
        pseudo: '',
        age: '0',
        password: '',
        pseudoErreur: '0',
        ageErreur: '0',
        passwordErreur: '0'
        }
    }

    onChangePseudo(e) {
        this.setState({pseudo: e.target.value})
        if (e.target.value == ""){
            this.setState({pseudoErreur : 1})
            document.getElementById("erreurPseudo").innerHTML = "renseigner un pseudo est obligatoire"
        }else{
            this.setState({pseudoErreur : 0})
            document.getElementById("erreurPseudo").innerHTML = ""
        }
    }
    
    onChangeAge(e) {
        this.setState({age: e.target.value})
        if (e.target.value == "" || e.target.value < 0){
            this.setState({ageErreur : 1})
            document.getElementById("erreurAge").innerHTML = "renseigner votre âge est obligatoire et dois être valide"
          }else{
            this.setState({ageErreur : 0})
            document.getElementById("erreurAge").innerHTML = ""
          }
    }
    
    onChangePassword(e) {
        this.setState({password: e.target.value})
        if (e.target.value == "" || e.target.value.length < 8){
            this.setState({passwordErreur : 1})
            document.getElementById("erreurPassword").innerHTML = "choisir un mot de passe est obligatoire et dois possédé au minimum 8 caractères"
          }else{
            this.setState({passwordErreur : 0})
            document.getElementById("erreurPassword").innerHTML = ""
          }
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            pseudo: this.state.pseudo,
            age: this.state.age,
            password: this.state.password
        };

        console.log(userObject)

        axios.post('http://localhost:5000/api/user', userObject)
            .then(
                res => {
                    console.log(res.status)
                    if (res.status == 200){
                        console.log(res.data)
                        document.getElementById("erreurPseudo").innerHTML = res.data
                    }
                });
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
                            <input  type="text" name="pseudo" class="form-control col-lg-12 col-sm-12" style={{ border: this.state.pseudoErreur == 1 ? '1px solid red' : '' }} 
                            onChange={this.onChangePseudo} value={this.state.pseudo} />
                            <p class="col-lg-12 col-sm-12 text-danger" id="erreurPseudo"></p>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="mail">Age</label>
                            <input type="number" id="age" name="age" class="form-control col-lg-12 col-sm-12" 
                            style={{ border: this.state.ageErreur == 1 ? '1px solid red' : '' }} onChange={this.onChangeAge} value={this.state.age}/>
                            <p class="col-lg-12 col-sm-12 text-danger" id="erreurAge"></p>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="password">Mot de passe</label>
                            <input type="password" id="password" name="password" class="form-control col-lg-12 col-sm-12" 
                            style={{ border: this.state.passwordErreur == 1 ? '1px solid red' : '' }} onChange={this.onChangePassword} value={this.state.password}/>
                            <p class="col-lg-12 col-sm-12 text-danger" id="erreurPassword"></p>
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