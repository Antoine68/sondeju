import React from "react";
import { Link } from "react-router-dom";


import Layout from "../components/Layout";



export default  class Account extends React.Component {
  render()  {
    return (
      <Layout>
        <Link to="/tableau-de-jp-baur">page surprise</Link>
      </Layout>
      
    );
  }
}
