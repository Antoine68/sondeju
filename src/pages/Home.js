
import { BackTop, Popover } from "antd";
import React from "react";

import Layout from "../components/Layout";
import NewsFeed from "../components/NewsFeed";

export default class Home extends React.Component {
 
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
