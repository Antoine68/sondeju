import React from "react";

import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import ConnectionComponent from "../components/Connection";

export default class Connection  extends React.Component {
    render() {
      return (
          <Layout>
              <ConnectionComponent></ConnectionComponent>
          </Layout>
        
      );
    }
  }
