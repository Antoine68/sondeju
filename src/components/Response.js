
import React from "react";

import './../styles/Question.css';

import ResponseInput from "./Response/ResponseInput";
import ResponseTextArea from "./Response/ResponseTextArea";
import ResponseRadio from "./Response/ResponseRadio";
import ResponseCheckbox from "./Response/ResponseCheckbox";
import ResponseSelect from "./Response/ResponseSelect";
import ResponseRange from "./Response/ResponseRange";
import { Link } from 'react-router-dom';

export default class Response extends React.Component {
  
  constructor(props) {
    super(props);
    this.typeConverter = {
      "short" : {component: <ResponseInput/>},
      "long" : {component: <ResponseTextArea/>},
      "multiple" : {component:<ResponseRadio/>},
      "unique": {component:<ResponseCheckbox/>},
      "select": {component:<ResponseSelect/>},
      "range": { component:<ResponseRange/>}      
  }
  }

  
  render()  {
    let {response, index} = this.props;
    return (
      <div className="container-question container mw-100 p-0 card" >
      <span className="question-counter">{index+1}</span>
      <div className="row pt-3 pb-3">
        <div className="toolbar-question col-2">
        </div>
        <div className="col-8 card-body">
        <h3 className="question-title">{response.title} </h3>
          {React.cloneElement(this.typeConverter[response.type].component, 
            {
              response : response
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