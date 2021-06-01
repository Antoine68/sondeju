
import { Input } from "antd";
import React from "react";


export default class QRange extends React.Component {
     

    render()  {
      let {question, response} = this.props;
      return (
        <div className="answer-container">
          <div className="container mw-100 p-0 text-center">
                <div className="row">
                  <div className="col-3">
                    <label>{question.range.min}</label>
                  </div>
                  <div className="col-6">
                    <Input type="range" value={response.rangeValue} min={question.range.min} max={question.range.max} step={1}/>
                    <label>{response.rangeValue}</label>
                  </div>
                  <div className="col-3">
                    <label>{question.range.max}</label>                  
                  </div>
                </div>
            </div>
        </div>
      );
    }
}