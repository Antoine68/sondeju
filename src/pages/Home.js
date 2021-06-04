
import { BackTop, Popover } from "antd";
import React from "react";

import Layout from "../components/Layout";
import NewsFeed from "../components/NewsFeed";
import { Button, notification, Space } from 'antd';

export default class Home extends React.Component {

  openNotificationWithIcon = type => {
    notification[type]({
      message: 'Félicitation',
      description:
        'votre sondage a été posté',
    });
  };

  componentDidMount(){
    if(this.props.location.state === undefined){
    }else{
      if(this.props.location.state.survey_created === 1){
        this.openNotificationWithIcon('success')
      }else{
        this.props.location.state.survey_created = 0
      }
    console.log(this.props.location.state)
    }
  }
 
  render()  {

    return (
      <Layout>
        <NewsFeed></NewsFeed>
        <BackTop visibilityHeight={1600}>
          <div title={"Cliquer pour remonter"} className={"totop btn bg-button"}><i class="fas fa-angle-up"></i></div>
        </BackTop>
      </Layout>
    );
  }
}
