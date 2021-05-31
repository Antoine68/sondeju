import axios from "axios";
import React from "react";

import { Link, Redirect } from 'react-router-dom';
import Layout from "../components/Layout";
import RegisterComponent from "../components/Register";

export default class RandomSurvey extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            idSurvey: null
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/api/random/survey')
            .then(res => {
                const idSurvey = res.data;
                this.setState({
                    redirect: true,
                    idSurvey: idSurvey,
                })
            })
    }
    
    render() {
      if(this.state.redirect && this.state.idSurvey) return <Redirect to={{pathname:"/sondage/"+this.state.idSurvey}}/>;
      else return <Layout></Layout>;
    }
  }
