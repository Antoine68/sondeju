import React from "react";
import { Link } from "react-router-dom";


import Layout from "../components/Layout";
import AccountContent from "../components/Account"



export default  class Account extends React.Component {
  render()  {
    return (
      <Layout>
        <AccountContent></AccountContent>
        <Link to="/tableau-de-jp-baur">page surprise</Link>
      </Layout>
      
    );
  }
}
