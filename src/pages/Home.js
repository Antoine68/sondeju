
import React from "react";

import Layout from "../components/Layout";
import NewsFeed from "../components/NewsFeed";

export default class Home extends React.Component {
 
    render()  {
      return (
          <Layout>
            <NewsFeed></NewsFeed>
          </Layout>
      );
    }
}
