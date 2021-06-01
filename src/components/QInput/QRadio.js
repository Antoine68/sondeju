
import React from "react";


export default class QRadio extends React.Component {
     

  render()  {
    let {question, response} = this.props;
    return (
      <div className="answer-container-column" onChange={(event) => {this.props.onUniqueOptionChange(event)}}>
      {
        question.options.map((option, index) => {
          return <div className="text-center" key={index}><input type="radio" id={option._id} name={question._id} value={option._id} /><label htmlFor={option._id}>{option.value}</label></div>
        })
        
      }
      </div>
    );
  }
}