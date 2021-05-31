import React from "react";
import { Link } from "react-router-dom";


import Layout from "../components/Layout";
import AccountContent from "../components/Account"
import Breadcrumb from "../components/Breadcrumb";


export default  class Account extends React.Component {
  render()  {
    return (
      <Layout>
        <Breadcrumb 
          actual={"Mon compte"}
          links={[{url: "/", name: "Accueil"}]} />
        <AccountContent user={this.props.user}></AccountContent>
      </Layout>
      
    );
  }
}
