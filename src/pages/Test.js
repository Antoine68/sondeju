import React from "react";

import { Link } from 'react-router-dom';
import Layout from "../components/Layout";

export default class Test  extends React.Component {
    render() {
      return (
          <Layout>
            <div>
                <h2>Bienvenue sur le tableau de JP Baur</h2>
                <Link to="/">retour</Link>
            </div>
          </Layout>
        
      );
    }
  }
