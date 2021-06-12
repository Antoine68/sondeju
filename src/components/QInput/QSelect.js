
import React from "react";

import './../../styles/Input.css';

export default class QSelect extends React.Component {
     

    render()  {
      let {question, response} = this.props;
      return (
        <div className="answer-container">
          <select onChange={(event) => {this.props.onUniqueOptionChange(event)}} name={question._id} defaultValue={response.options.length === 0 ? -1 : response.options[0]}>
              <option value={-1}>Choisir une option</option>
              {
                question.options.map((option, index) => {
                  return (<option key={index} value={option._id}>{option.value}</option>)
                })
              }
          </select>
        </div>
      );
    }
}