
import React from "react";

import './../styles/Question.css';

export default class Question extends React.Component {
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
        {this.props.children}
        </div>
        <div className="col-2">
        </div>
      </div>
    </div>
    );
  }
}