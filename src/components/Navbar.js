import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link } from "react-router-dom";
import React, { Component } from 'react';

export default class Navbar extends React.Component {
    render()  {
      return (
        <div>
          <h2>navbar</h2>
          <Button>ok</Button>
          <Link to="/tableau-de-jp-baur">page surprise</Link>
        </div>
      );
    }
  }