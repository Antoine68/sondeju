
import React from "react";

import { Input } from 'antd';
import { Fragment } from "react";


export default class EditableRange extends React.Component {
     
    constructor(props) {
      super(props);
      this.state = {
        range : this.props.question.range
      }
      this.rangeMin = 0;
      this.rangeMax = 10;
    }
    
    onBlur(event) {
      let newMin = parseInt(document.getElementsByName("min-"+this.props.question.id)[0].value, 10);
      let newMax = parseInt(document.getElementsByName("max-"+this.props.question.id)[0].value, 10);
      if(newMax < newMin) {
        newMin = newMin + newMax;
        newMax = newMin - newMax;
        newMin = newMin - newMax
      } else if(newMax === newMin) {
        newMin = newMax-1;
      }
      if(newMin < this.rangeMin) newMin = this.rangeMin;
      if(newMax > this.rangeMax) newMax = this.rangeMax;
      this.setState({
        range : {min: newMin, max: newMax}
      }, () => this.props.handleRangeChange(this.props.question.id, this.state.range))
    }
    
    
    handleMaxChange(event) {
      let newMax = Number(event.target.value);
      if(isNaN(newMax)) return;
      if(newMax > this.rangeMax) newMax = this.rangeMax;
      this.setState({
        range : {min: this.state.range.min, max: newMax}
      }, () => this.props.handleRangeChange(this.props.question.id, this.state.range))
      
    }
    
    handleMinChange(event) {
      let newMin = Number(event.target.value);
      if(isNaN(newMin)) return;
      if(newMin < this.rangeMin) newMin = this.rangeMin;
      this.setState({
        range : {min: newMin, max: this.state.range.max}
      }, () => this.props.handleRangeChange(this.props.question.id, this.state.range))
    }
    
    render()  {
      return (
        <Fragment>
            <div className="container mw-100 p-0 text-center">
                <div className="row">
                  <div className="col-3">
                    <Input min={this.rangeMin} max={this.rangeMax-1} name={"min-"+this.props.question.id} type="number" value={this.state.range.min} placeholder="min.." onBlur={(event) => this.onBlur(event)} onChange={(event) => this.handleMinChange(event)} />
                  </div>
                  <div className="col-6">
                    <Input type="range" disabled={"disabled"}/>
                  </div>
                  <div className="col-3">
                    <Input min={this.rangeMin+1} max={this.rangeMax} name={"max-"+this.props.question.id} type="number" value={this.state.range.max} placeholder="max.." onBlur={(event) => this.onBlur(event)} onChange={(event) => this.handleMaxChange(event)} />
                  </div>
                </div>
            </div>
        </Fragment>
       
      );
    }
}