import './../styles/NewsFeed.css';
import './../styles/Survey.css'

import React from "react";
import { Link } from 'react-router-dom';
import { Skeleton } from 'antd';
import { Fragment } from 'react';
import Question from './Question';
import { breakLineToBr } from '../utils';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { createObjectID } from 'mongo-object-reader';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Survey extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            redirect : 0,
            responses:this.createAllResponses()
        }
    }
    
    createResponse(question) {
        return {_id: createObjectID(), question: question._id, type: question.type, value: "", options: [], rangeValue: question.range ? question.range.min : 0}
    }
    
    createAllResponses() {
        let responses = this.props.survey.questions.map((question) => {
            return this.createResponse(question)
        });
        return responses;
    }
    
    getResponseOfQuestion(idQuestion) {
        return this.state.responses.find(response => response.question === idQuestion);
    }
    
    onResponseChange(idQuestion, response) {
        let index = this.state.responses.findIndex((response) => response.question === idQuestion);
        let responses = this.state.responses.slice();
        responses[index] = response;
        this.setState({
            responses: responses
        });
    }
    
    onSubmit() {
        let data = {...this.state, survey: this.props.survey._id}
        axios.post('http://localhost:5000/api/survey/response', data)
          .then(
            res => {
              console.log(res.status)
              if (res.status == 200){
                  console.log(res.data)
                  this.setState({redirect : 1})
                  console.log(this.state.redirect)
              }else{
                
              }
            }
          );
      }
    
            
    
    
  render()  {
    let survey = this.props.survey;
    if (this.state.redirect === 1 ){
        return <Redirect to={"/reponse/"+survey._id} />
    }
    return (
        <Fragment>
            <h1 class="text-center font-weight-bold blue-color">{survey.title}</h1>
            <p>
                {
                    ReactHtmlParser(breakLineToBr(survey.description))
                }
            </p>
            <section class="section-sondage mb-5 mt-5">
            
                {
                    survey.questions.map((question, index) => {
                        return (
                            <Question key={index} 
                                question={question} 
                                response={this.getResponseOfQuestion(question._id)} 
                                index={index}
                                onChange={this.onResponseChange.bind(this)}
                            />
                        );
                    })
                }
            </section>

            <button onClick={() => {this.onSubmit()}} type="button" class="btn btn-outline-info button-account" data-mdb-ripple-color="dark">
                  <i class="fas fa-share-square mr-1"></i>
                    Envoyer les réponses
            </button>
            <span className="span-mandatory">* Question obligatoire</span>

            <Link to={"/reponse/"+survey._id} className="text-center btn btn-outline-success button-response mt-5 mb-5" data-mdb-ripple-color="dark">
                <i class="fas fa-poll mr-1"></i>
                    Consulter les résultats
            </Link>        
        </Fragment>        
    );
  }
}