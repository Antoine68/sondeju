import React from "react";
import { Link } from "react-router-dom";


import Layout from "../components/Layout";




export default class CreateSurvey extends React.Component {
  render()  {
    return (
      <Layout>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white">
            <li class="breadcrumb-item"><Link to="/" class="blue-color font-weight-normal">Accueil</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Créer un sondage</li>
          </ol>
        </nav>
        <h1 class="text-center font-weight-bold blue-color">Créer un sondage</h1>
        
        <section class="section-sondage mb-5 mt-5">
            <h2 contentEditable="true">Titre du sondage</h2>
            <p contentEditable="true">Entrer une description du sondage...</p>
            
            <div className="text-center">
                <button type="button" className="btn btn-outline-info button-account" data-mdb-ripple-color="dark">
                <i class="fas fa-plus mr-1"></i>
                Ajouter une question
                </button>
            </div>        
        </section>
        
      </Layout>
      
    );
  }
}
