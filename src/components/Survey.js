import './../styles/NewsFeed.css';

import React from "react";
import { Link } from 'react-router-dom';
import { Skeleton } from 'antd';
import { Fragment } from 'react';
import QInput from './QInput/QInput';
import QTextArea from './QInput/QTextArea';
import QRadio from './QInput/QRadio';
import QCheckbox from './QInput/QCheckbox';
import QSelect from './QInput/QSelect';
import QRange from './QInput/QRange';
import Question from './Question';
import { breakLineToBr } from '../utils';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { createObjectID } from 'mongo-object-reader';

export default class Survey extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            responses:this.createAllResponses()
        }
        this.typeConverter = {
            "short" : {component: <QInput/>},
            "long" : {component: <QTextArea/>},
            "multiple" : {component:<QRadio/>},
            "unique": {component:<QCheckbox/>},
            "select": {component:<QSelect/>},
            "range": { component:<QRange/>}      
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
        
    
    
  render()  {
    let survey = this.props.survey;
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
                            <Question key={index} question={question} index={index}>
                                {React.cloneElement(this.typeConverter[question.type].component, 
                                    {
                                        question : question,
                                        response: this.getResponseOfQuestion(question._id) 
                                    }
                                )}                
                            </Question>
                        );
                    })
                }
            </section>
            <button type="button" class="btn btn-outline-info button-account" data-mdb-ripple-color="dark">
                  <i class="fas fa-share-square mr-1"></i>
                    Envoyer les réponses
            </button>
            <span className="span-mandatory">* Question obligatoire</span>        
        </Fragment>        
    );
  }
}