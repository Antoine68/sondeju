
import React from "react";

import { Input } from 'antd';
import { Fragment } from "react";


export default class EditableRange extends React.Component {
     
    constructor(props) {
      super(props);
      this.state = {
        options : this.props.question.options[0]
      }
    }
    
    onBlur(event) {
      let newMin = parseInt(document.getElementsByName("min-"+this.props.question.id)[0].value, 10);
      let newMax = parseInt(document.getElementsByName("max-"+this.props.question.id)[0].value, 10);
      console.log(newMin, newMax);
      if(newMax < newMin) {
        newMin = newMin + newMax;
        newMax = newMin - newMax;
        newMin = newMin - newMax
      } else if(newMax === newMin) {
        newMin = newMax-1;
      }
      if(newMin<0) newMin = 0;
      if(newMax>50) newMax = 50;
      this.setState({
        options : {min: newMin, max: newMax}
      }, () => this.props.handleOptionChange(this.props.question.id, [this.state.options]))
    }
    
    
    handleMaxChange(event) {
      let newMax = Number(event.target.value);
      if(isNaN(newMax)) return;
      if(newMax>50) newMax = 50;
      this.setState({
        options : {min: this.state.options.min, max: newMax}
      }, () => this.props.handleOptionChange(this.props.question.id, [this.state.options]))
      
    }
    
    handleMinChange(event) {
      let newMin = Number(event.target.value);
      if(isNaN(newMin)) return;
      if(newMin<0) newMin = 0;
      this.setState({
        options : {min: newMin, max: this.state.options.max}
      }, () => this.props.handleOptionChange(this.props.question.id, [this.state.options]))
    }
    
    render()  {
      return (
        <Fragment>
            <div className="container mw-100 p-0 text-center">
                <div className="row">
                  <div className="col-3">
                    <Input name={"min-"+this.props.question.id} type="number" value={this.state.options.min} placeholder="min.." onBlur={(event) => this.onBlur(event)} onChange={(event) => this.handleMinChange(event)} />
                  </div>
                  <div className="col-6">
                    <Input type="range" disabled={"disabled"}/>
                  </div>
                  <div className="col-3">
                    <Input name={"max-"+this.props.question.id} type="number" value={this.state.options.max} placeholder="max.." onBlur={(event) => this.onBlur(event)} onChange={(event) => this.handleMaxChange(event)} />
                  </div>
                </div>
            </div>
        </Fragment>
       
      );
    }
}