
import React from "react";

import { Input } from 'antd';
import { Fragment } from "react";


export default class EditableRange extends React.Component {
     
    constructor(props) {
      super(props);
      this.rangeMin = 0;
      this.rangeMax = 10;
    }
    
    onBlur(event) {
      let newMin = parseInt(document.getElementsByName("min-"+this.props.question._id)[0].value, 10);
      let newMax = parseInt(document.getElementsByName("max-"+this.props.question._id)[0].value, 10);
      if(newMax < newMin) {
        newMin = newMin + newMax;
        newMax = newMin - newMax;
        newMin = newMin - newMax
      } else if(newMax === newMin) {
        newMin = newMax-1;
      }
      if(newMin < this.rangeMin) newMin = this.rangeMin;
      if(newMax > this.rangeMax) newMax = this.rangeMax;
      this.props.handleRangeChange({min: newMin, max: newMax});
    }
    
    
    handleMaxChange(event) {
      let newMax = Number(event.target.value);
      if(isNaN(newMax)) return;
      if(newMax > this.rangeMax) newMax = this.rangeMax;
      this.props.handleRangeChange({min: this.props.question.range.min, max: newMax});
    }
    
    handleMinChange(event) {
      let newMin = Number(event.target.value);
      if(isNaN(newMin)) return;
      if(newMin < this.rangeMin) newMin = this.rangeMin;
      this.props.handleRangeChange({min: newMin, max: this.props.question.range.max});
    }
    
    render()  {
      return (
        <Fragment>
            <div className="container mw-100 p-0 text-center">
                <div className="row">
                  <div className="col-3">
                    <Input min={this.rangeMin} max={this.rangeMax-1} name={"min-"+this.props.question._id} type="number" value={this.props.question.range.min} placeholder="min.." onBlur={(event) => this.onBlur(event)} onChange={(event) => this.handleMinChange(event)} />
                  </div>
                  <div className="col-6">
                    <Input type="range" disabled={"disabled"}/>
                  </div>
                  <div className="col-3">
                    <Input min={this.rangeMin+1} max={this.rangeMax} name={"max-"+this.props.question._id} type="number" value={this.props.question.range.max} placeholder="max.." onBlur={(event) => this.onBlur(event)} onChange={(event) => this.handleMaxChange(event)} />
                  </div>
                </div>
            </div>
        </Fragment>
       
      );
    }
}