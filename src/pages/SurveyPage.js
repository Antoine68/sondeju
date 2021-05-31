import React from "react";

import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import RegisterComponent from "../components/Register";

import { withRouter } from "react-router";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import { Skeleton } from "antd";
import Survey from "../components/Survey";

class SurveyPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            survey: null,
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
            this.setState({ 
                survey: survey,
            });
        })
    }
    
    render() {
        
        if(!this.state.survey) {
            return (
                <Layout>
                    <Breadcrumb 
                        actual={"Sondage"}
                        links={[{url: "/", name: "Accueil"}]} />
                    <Skeleton active />
                    <Skeleton active />
                    <Skeleton active />
                    <Skeleton active />
                
                
                </Layout>
            );
        }
        
        return (
          <Layout>
            <Breadcrumb 
                actual={"Sondage"}
                links={[{url: "/", name: "Accueil"}]} />
            
            <Survey survey={this.state.survey} />
                
          </Layout>
      );
    }
  }

export default withRouter(SurveyPage);