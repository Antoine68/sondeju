import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './../styles/Account.css';
import { Link } from 'react-router-dom';

import React from "react";

import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

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

        <ul class="nav nav-tabs nav-justified mb-3 mt-5" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="mes-informations" data-mdb-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">
              Mes informations
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="mes-sondages" data-mdb-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">
              Mes sondages
              </a>
          </li>
        </ul>

        <div class="tab-content" id="content">
          <div class="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
            Tab 3 content
          </div>
          <div class="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
            Tab 2 content
          </div>
        </div>
      </div>
    );
  }
}