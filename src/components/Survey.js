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

export default class Survey extends React.Component {
    
    constructor(props) {
        super(props);
        this.typeConverter = {
            "short" : {component: <QInput/>},
            "long" : {component: <QTextArea/>},
            "multiple" : {component:<QRadio/>},
            "unique": {component:<QCheckbox/>},
            "select": {component:<QSelect/>},
            "range": { component:<QRange/>}      
        }
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
                                {this.typeConverter[question.type].component}                    
                            </Question>
                        );
                    })
                }
            </section>        
        </Fragment>        
    );
  }
}