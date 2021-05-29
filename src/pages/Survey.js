import React from "react";

import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import RegisterComponent from "../components/Register";

import { withRouter } from "react-router";
import axios from "axios";

class Survey extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            survey: null
        }
    }
    
    componentDidMount() {
        let id = this.props.match.params.id;
        this.loadSurvey(id);
    }
    
    loadSurvey(id) {
        axios.get('http://localhost:5000/api/survey/'+id)
        .then(res => {
            let survey = res.data;
            console.log(survey);
            this.setState({ 
                survey: survey,
            });
        })
    }
    
    render() {
      return (
          <Layout>
              <div>a</div>
          </Layout>
      );
    }
  }

export default withRouter(Survey);