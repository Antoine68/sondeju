import React from "react";

import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import RegisterComponent from "../components/Register";

export default class Register  extends React.Component {
    render() {
      return (
          <Layout>
              <RegisterComponent></RegisterComponent>
          </Layout>
      );
    }
  }
