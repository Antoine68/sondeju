
import React from "react";

import './../styles/Question.css';

import QInput from './QInput/QInput';
import QTextArea from './QInput/QTextArea';
import QRadio from './QInput/QRadio';
import QCheckbox from './QInput/QCheckbox';
import QSelect from './QInput/QSelect';
import QRange from './QInput/QRange';

export default class Question extends React.Component {
  
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
  
  onTextChange(event) {
    let value = event.target.value;
    this.props.onChange(this.props.question._id, {...this.props.response, value: value});
  }
  
  onRangeChange(event) {
    let value = event.target.value;
    this.props.onChange(this.props.question._id, {...this.props.response, rangeValue: value});
  }
  
  onMultipleOptionChange(event) {
    let value = event.target.value;
    console.log(event);
    //this.props.onChange(this.props.question._id, {...this.props.response, rangeValue: value});
  }
  
  onUniqueOptionChange(event) {
    let value = event.target.value;
    console.log(event);
    //this.props.onChange(this.props.question._id, {...this.props.response, rangeValue: value});
  }
  
  render()  {
    let {question, index} = this.props;
    return (
      <div className="container-question container mw-100 p-0 card" >
      <span className="question-counter">{index+1}</span>
      <div className="row pt-3 pb-3">
        <div className="toolbar-question col-2">
        </div>
        <div className="col-8 card-body">
        <h3 className="question-title">{question.title} {(question.mandatory ? <span className="span-mandatory">*</span> : "")}</h3>
          {React.cloneElement(this.typeConverter[question.type].component, 
            {
              question : question,
              response: this.props.response,
              onTextChange: this.onTextChange.bind(this),
              onRangeChange: this.onRangeChange.bind(this),
              onMultipleOptionChange: this.onMultipleOptionChange.bind(this),
              onUniqueOptionChange: this.onUniqueOptionChange.bind(this),
            }
          )}  
        </div>
        <div className="col-2">
        </div>
      </div>
    </div>
    );
  }
}