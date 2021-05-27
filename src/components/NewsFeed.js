import './../styles/NewsFeed.css';
import 'react-dropdown/style.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import CardSurvey from "./CardSurvey";

import React from "react";
import axios from 'axios';

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
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      surveys: []
    }
  }
  
  componentDidMount() {
    this.loadSurveys();
  }
  
  loadSurveys() {
    axios.get('http://localhost:5000/api/surveys/'+this.state.currentPage)
      .then(res => {
        const surveys = res.data;
        this.setState({ surveys: surveys });
    })
  }
  
  render()  {
    return (
      <div>
        <div class="row mw-100 m-0 p-0 mt-4">
          <div class="col-lg-8">
            <h2 class="ml-5">Les derniers sondages</h2>
          </div>
          <div class="col-lg-4 col-md-12 text-center mt-3">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link font-weight-bold blue-color" onClick={e => e.preventDefault()}>
                Choisir une catégorie <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div class="col-lg-3"></div>
        </div>
        <div class="row mw-100 m-0 p-0 mt-3">
            {
              this.state.surveys.map((survey, index) => {
                return <CardSurvey key={index} survey={survey}/>
              })
            }
        </div>
        <div class="text-center mt-2 mb-2">
          <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={1} total={35}/>
        </div>
      </div>
    );
  }
}