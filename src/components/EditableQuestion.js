import React from "react";

import './../styles/EditableQuestion.css';

import { Input, Select } from 'antd';
import { Draggable } from "react-beautiful-dnd";
import { Fragment } from "react";

import { createObjectID, readObjectID,isValidObjectID }  from 'mongo-object-reader';
import ContentEditable from "react-contenteditable";
import TextArea from "antd/lib/input/TextArea";
import { Popover } from "antd";

export default class EditableQuestion extends React.Component {
        
    
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
                  <ContentEditable className="editable-question-title" html={question.title} onChange={(event) => this.props.handleTitleChange(question.id, event)}/>
                  {this.props.children}
                  </div>
                  <div className="col-2">
                    <div className="toolbar">
                      <span><i title="Déplacer" {...provided.dragHandleProps} class="fas fa-expand-arrows-alt"></i></span>
                      <span><i title="Supprimer"  onClick={() => this.props.handleDelete(question.id)} className="fas fa-trash-alt pointer"></i></span>
                      <span><i title="Dupliquer"  onClick={() => this.props.handleDuplicate(question.id)} className="fas fa-copy pointer"></i></span>
                      <span>
                        <Popover placement="topLeft" content={"Cliquer pour rendre la question " + (question.mandatory ? "non obligatoire" : "obligatoire")}>
                          <i className={"fas fa-asterisk pointer " + (question.mandatory ? "mandatory-eqst" : "no-mandatory-eqst")} onClick={() => this.props.handleMandatoryChange(question.id)}></i>
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