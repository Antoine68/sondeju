
import React from "react";

import './../../styles/EditableOptionManager.css';

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
            options : [...this.state.options, {_id: createObjectID(), value: "Choix "+ this.state.index}]
        }, () => this.props.handleOptionChange(this.props.question._id, this.state.options));
    }
    
    handleDeleteOption(idOption) {
        this.setState({
            options: this.state.options.filter(option => option._id !== idOption)
        }, () => this.props.handleOptionChange(this.props.question._id, this.state.options));
    }
    
    handleChange(idOption, event) {
        let newOptionValue = event.target.value;
        this.setState({
            options: this.state.options.map(option => (option._id === idOption ? {_id: option._id, value: newOptionValue} : option))
        }, () => this.props.handleOptionChange(this.props.question._id, this.state.options));
    }
    
    
    render()  {
      return (
        <Fragment>
            {this.state.options.map((option,index) => {
                return (
                    <div className="choice-list" key={index}>
                        {this.props.children}
                        <label><ContentEditable html={option.value} onChange={(event) => this.handleChange(option._id, event)}/></label>
                        <button title="Supprimer" onClick={() => this.handleDeleteOption(option._id)}>X</button>
                    </div>
                )
            })}
            <div>
                <button title="Ajouter" className="btn-add-option" onClick={() => this.handleAddOption()}>{this.props.buttonText}</button>
            </div>   
        </Fragment>
        
      );
    }
}