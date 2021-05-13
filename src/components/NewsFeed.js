import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './../styles/NewsFeed.css';
import 'react-dropdown/style.css';
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MDBBtn } from "mdbreact";
import { Pagination } from 'antd';

import React from "react";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Insolite
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Science
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Politique
      </a>
    </Menu.Item>
  </Menu>
);

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

export default class NewsFeed extends React.Component {
  render()  {
    return (
      <div>
        <div class="row mw-100 m-0 p-0 mt-4">
          <div class="col-lg-8">
            <h2 class="ml-5">Les derniers sondages</h2>
          </div>
          <div class="col-lg-4 col-md-12 text-center">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link font-weight-bold blue-color" onClick={e => e.preventDefault()}>
                Choisir une catégorie <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div class="col-lg-3"></div>
        </div>
        <div class="row mw-100 m-0 p-0 mt-3">
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center">
              <div class="card-header bg-white">
                Catégorie
              </div>
              <div class="card-body">
                <h5 class="card-title">Titre du sondage</h5>
                <p class="card-text">Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blBla bla bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bl</p>
                <button href="#" class="btn btn-primary bg-button">Consulter</button>
              </div>
              <div class="card-footer text-muted bg-white">
                Durée : 2 min
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-2 mb-2">
          <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={1} total={35}/>
        </div>
        <Link to="/tableau-de-jp-baur">page surprise</Link>
      </div>
    );
  }
}