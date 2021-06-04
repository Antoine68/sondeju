
import React from "react";

import './../../styles/EditableOptionManager.css';

import { Fragment } from "react";
import ContentEditable from "react-contenteditable";
import { createObjectID, readObjectID,isValidObjectID }  from 'mongo-object-reader';
import { sanitize } from "../../utils";

export default class EditableOptionManager extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }
    
    handleAddOption() {
        this.setState({
            index: this.state.index+1,
        }, () => this.props.handleOptionChange(this.props.question._id, [...this.props.question.options, {_id: createObjectID(), value: "Choix "+ this.state.index}]));
    }
    
    handleDeleteOption(idOption) {
        this.props.handleOptionChange(this.props.question._id, this.props.question.options.filter(option => option._id !== idOption));
    }
    
    handleChange(idOption, event) {
        let newOptionValue = sanitize(event.target.value);
        this.props.handleOptionChange(this.props.question._id, this.props.question.options.map(option => (option._id === idOption ? {_id: option._id, value: newOptionValue} : option)));
    }
    
    
    render()  {
      return (
        <Fragment>
            {this.props.question.options.map((option,index) => {
                return (
                    <div className="choice-list" key={index}>
                        {this.props.children}
                        <label><ContentEditable placeholder={"Choix"} html={option.value} onChange={(event) => this.handleChange(option._id, event)}/></label>
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