import React from "react";

import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import ConnectionComponent from "../components/Connection";
import Breadcrumb from "../components/Breadcrumb";

export default class Connection  extends React.Component {
    render() {
      return (
          <Layout>
            <Breadcrumb 
              actual={"Connexion"}
              links={[{url: "/", name: "Accueil"}]} />
            <ConnectionComponent redirect={this.props.location.state ? this.props.location.state.previousPage : "/compte"}></ConnectionComponent>
          </Layout>
        
      );
    }
  }
