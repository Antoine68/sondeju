import React from "react";

import { Link } from 'react-router-dom';
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/Layout";
import RegisterComponent from "../components/Register";

export default class Register  extends React.Component {
    render() {
      return (
          <Layout>
            <Breadcrumb 
                actual={"Inscription"}
                links={[{url: "/", name: "Accueil"}, {url: "/connexion", name: "Connexion"}]} />
              <RegisterComponent></RegisterComponent>
          </Layout>
      );
    }
  }
