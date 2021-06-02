import React from "react";

import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/Layout";

export default class ResponseSurvey  extends React.Component {
    render() {
    let id = this.props.match.params.id;
      return (
          <Layout>
            <Breadcrumb 
                actual={"Réponse"}
                links={[{url: "/", name: "Accueil"}, {url: "/sondage/"+ id, name: "Sondage"}]} />
                rombo combo
          </Layout>
      );
    }
  }
