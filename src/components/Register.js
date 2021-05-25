import React from "react";
import { Link } from 'react-router-dom';
import '../styles/App.css';

export default class RegisterComponent extends React.Component {
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
                <form class="bg-white rounded shadow-5-strong p-5">

                <div class="form-outline mb-4">
                    <label class="form-label" for="pseudo">Pseudonyme</label>
                    <input  id="pseudo" class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="mail">Adresse mail</label>
                    <input type="email" id="mail" class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="password">Mot de passe</label>
                    <input type="password" id="password" class="form-control" />
                    </div>

                    <Link to="/compte" type="submit" class="btn btn-primary btn-block bg-button">S'inscrire</Link>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
  }
}