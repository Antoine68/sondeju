import React from "react";

import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import RegisterComponent from "../components/Register";

import { withRouter } from "react-router";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";

class SurveyPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            survey: null,
            isLoading: true
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
                isLoading: false
            });
        })
    }
    
    render() {
      return (
          <Layout>
              <Breadcrumb 
                actual={"Sondage"}
                links={[{url: "/", name: "Accueil"}]} />
          </Layout>
      );
    }
  }

export default withRouter(SurveyPage);