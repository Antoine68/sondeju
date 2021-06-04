import React from "react";

import './../styles/EditableQuestion.css';

import { Draggable } from "react-beautiful-dnd";

import ContentEditable from "react-contenteditable";
import EditableInput from "./EditableInput/EditableInput";
import EditableCheckbox from "./EditableInput/EditableCheckbox";
import EditableRadio from "./EditableInput/EditableRadio";
import EditableRange from "./EditableInput/EditableRange";
import EditableSelect from "./EditableInput/EditableSelect";
import EditableTextArea from "./EditableInput/EditableTextArea";
import { Popover } from "antd";
import { sanitize } from "../utils";

export default class EditableQuestion extends React.Component {
  
  constructor(props) {
    super(props);
    this.typeConverter = {
      "short" : {component: <EditableInput/>},
      "long" : {component: <EditableTextArea/>},
      "multiple" : {component:<EditableRadio/>},
      "unique": {component:<EditableCheckbox/>},
      "select": { component:<EditableSelect/>},
      "range": {component:<EditableRange/>}      
    }
  }
  
  handleTitleChange(event) {
    let newQuestionTitle = sanitize(event.target.value);
    this.props.handleChange(this.props.question._id, {...this.props.question,  title: newQuestionTitle});
  }
  
  handleMandatoryChange() {
    this.props.handleChange(this.props.question._id, {...this.props.question,  mandatory: !this.props.question.mandatory});
  }
  
  handleOptionChange(options) {
    this.props.handleChange(this.props.question._id, {...this.props.question,  options: options});
  }
  
  handleRangeChange(range) {
    this.props.handleChange(this.props.question._id, {...this.props.question, range: range});
  }
        
    
  render()  {
      let {question, index} = this.props;
      return (
          <Draggable draggableId={"draggable-"+index} index={index}>
            {(provided, snapshot) => (
            <div className="dragg mt-3" ref={provided.innerRef} {...provided.draggableProps} 
            style={{
              ...provided.draggableProps.style,
              boxShadow: snapshot.isDragging ? "0 0 .4rem black" : "none",
              zIndex: snapshot.isDragging ? 99999 : 1,
              backgroundColor: "white",
              }} >
              <div className="container-question container mw-100 p-0 card" >
                <span className="question-counter">{index+1}</span>
                <div className="row pt-3 pb-3">
                  <div className="toolbar-question col-2">
                   
                  </div>
                  <div className="col-8 card-body">
                  <ContentEditable placeholder={"Saisir la question"} className="editable-question-title" html={question.title} onChange={(event) => this.handleTitleChange(event)}/>
                    {React.cloneElement(this.typeConverter[this.props.question.type].component, 
                      {
                        question : this.props.question,
                        handleOptionChange: this.handleOptionChange.bind(this),
                        handleRangeChange : this.handleRangeChange.bind(this)
                      }
                    )}
                  </div>
                  <div className="col-2">
                    <div className="toolbar">
                      <span><i title="Déplacer" {...provided.dragHandleProps} class="fas fa-expand-arrows-alt"></i></span>
                      <span><i title="Supprimer"  onClick={() => this.props.handleDelete(question._id)} className="fas fa-trash-alt pointer"></i></span>
                      <span><i title="Dupliquer"  onClick={() => this.props.handleDuplicate(question._id)} className="fas fa-copy pointer"></i></span>
                      <span>
                        <Popover placement="topLeft" content={"Cliquer pour rendre la question " + (question.mandatory ? "non obligatoire" : "obligatoire")}>
                          <i className={"fas fa-asterisk pointer " + (question.mandatory ? "mandatory-eqst" : "no-mandatory-eqst")} onClick={() => this.handleMandatoryChange()}></i>
                        </Popover>
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          </Draggable>
      );
    }
}