import React from "react";
import { Link, Redirect } from "react-router-dom";

import './../styles/CreateSurvey.css';

import Layout from "../components/Layout";

import Breadcrumb from "../components/Breadcrumb";
import EditableSurvey from "../components/EditableSurvey";





export default class CreateSurvey extends React.Component {
  
  
  render()  { 
    return (
      <Layout>
        <Breadcrumb 
            actual={"Créer un sondage"}
            links={[{url: "/", name: "Accueil"}]} />
        
        <h1 class="text-center font-weight-bold blue-color">Créer un sondage</h1>
        
        <EditableSurvey user={this.props.user} />
        
      </Layout>
      
    );
  }
}