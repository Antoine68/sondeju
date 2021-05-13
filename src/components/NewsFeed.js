import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './../styles/NewsFeed.css';
import 'react-dropdown/style.css';
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


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

export default class NewsFeed extends React.Component {
  render()  {
    return (

      <div>
        <Link to="/tableau-de-jp-baur">page surprise</Link>
        <div class="col-lg-8"></div>
        <div class="col-lg-4 col-md-12 text-center">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Choisir une catégorie <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div class="col-lg-3"></div>
        </div>
    );
  }
}