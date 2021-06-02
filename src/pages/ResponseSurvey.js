import React from "react";

import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/Layout";
import ResponseInput from "../components/Response/ResponseInput"
import ResponseTextArea from "../components/Response/ResponseTextArea"
import ResponseRadio from "../components/Response/ResponseRadio"
import ResponseCheckbox from "../components/Response/ResponseCheckbox"
import ResponseSelect from "../components/Response/ResponseSelect"
import ResponseRange from "../components/Response/ResponseRange"
import Response from "../components/Response"
import axios from "axios";
import { Fragment } from 'react';

export default class ResponseSurvey  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          redirect:'0',
          responses: []
        }
        this.typeConverter = {
          "short" : {initRange : null, component: <ResponseInput/>},
          "long" : {initRange : null, component: <ResponseTextArea/>},
          "multiple" : {initRange : null, component:<ResponseRadio/>},
          "unique": {initRange : null, component:<ResponseCheckbox/>},
          "select": {initRange : null, component:<ResponseSelect/>},
          "range": {initRange : {min: 0, max:4}, component:<ResponseRange/>}      
        }
    }
    
    componentDidMount() {
        let survey_id = this.props.match.params.id;
        this.loadResponses(survey_id);
    }

    loadResponses(id) {
        axios.get('http://localhost:5000/api/response/'+id)
        .then(res => {
            let result = res.data;
            console.log(result)
            this.setState({ 
                responses: result
            });
            console.log(this.state.responses)
        })
    }

    render() {
    let id = this.props.match.params.id;
      return (
          <Layout>
            <Breadcrumb actual={"Réponse"} links={[{url: "/", name: "Accueil"}, {url: "/sondage/"+ id, name: "Sondage"}]} />
                

            <h1 class="text-center font-weight-bold blue-color">Réponses</h1>
            {
                this.state.responses.map((response, index) => {
                    return (
                        <Response key={index} response={response} />
                    );
                })
            }
                
          </Layout>
      );
    }
  }
