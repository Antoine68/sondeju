import React from "react";
import { Link } from "react-router-dom";


import Layout from "../components/Layout";

import { Menu, Dropdown } from 'antd';



export default class CreateSurvey extends React.Component {
  
  menu() {
    return (
      <Menu>
        <Menu.Item key="0">
          <a href="#"><i class="fas fa-grip-lines"></i> Réponse courte</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#"><i class="fas fa-align-justify"></i> Réponse longue</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <a href="#"><i class="far fa-circle"></i> Choix multiple</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#"><i class="far fa-square"></i> Cases à cocher</a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="#"><i class="fas fa-list"></i> Liste déroulante</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="5">
          <a href="#"><i class="fas fa-ruler-horizontal"></i> Echelle linéaire</a>
        </Menu.Item>
      </Menu>
    );
  }
  
  
  
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
              <Dropdown overlay={this.menu} trigger={['click']}>
                <a className="ant-dropdown-link btn btn-outline-info button-account" onClick={e => e.preventDefault()}>
                <i class="fas fa-plus mr-1"></i> Ajouter une question
                </a>
              </Dropdown>
            </div>
            
            
        </section>
        
      </Layout>
      
    );
  }
}
