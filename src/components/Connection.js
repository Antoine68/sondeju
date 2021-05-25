import React from "react";
import { Link } from 'react-router-dom';
import '../styles/App.css';

export default class ConnectionComponent extends React.Component {
  render()  {
    return (
        <div>
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
                <li class="breadcrumb-item"><Link to="/" class="blue-color font-weight-normal">Accueil</Link></li>
                <li class="breadcrumb-item active" aria-current="page">connexion</li>
            </ol>
            </nav>

            <h1 class="text-center font-weight-bold blue-color">Connexion</h1>

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

                    <Link to="/compte" type="submit" class="btn btn-primary btn-block bg-button">Se connecter</Link>

                    <div class="col text-center mt-5">
                        <Link to="/incription" class="blue-color">Créer un compte</Link>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
  }
}