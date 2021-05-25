
import React from "react";


import { Fragment } from "react";
import ContentEditable from "react-contenteditable";
import { createObjectID, readObjectID,isValidObjectID }  from 'mongo-object-reader';

export default class EditableOptionManager extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            options : this.props.question.options
        }
    }
    
    handleAddOption() {
        this.setState({
            index: this.state.index+1,
            options : [...this.state.options, {id: createObjectID(), value: "Choix "+ this.state.index}]
        }, () => this.props.handleOptionChange(this.props.question.id, this.state.options));
    }
    
    handleDeleteOption(idOption) {
        this.setState({
            options: this.state.options.filter(option => option.id !== idOption)
        }, () => this.props.handleOptionChange(this.props.question.id, this.state.options));
    }
    
    
    render()  {
      return (
        <Fragment>
            {this.state.options.map((option,index) => {
                return (
                    <div key={index}>
                        {this.props.children}
                        <label> <ContentEditable html={option.value}/></label>
                        <button onClick={() => this.handleDeleteOption(option.id)}>X</button>
                    </div>
                )
            })}
            <div>
                <button onClick={() => this.handleAddOption()}>{this.props.buttonText}</button>
            </div>   
        </Fragment>
        
      );
    }
}