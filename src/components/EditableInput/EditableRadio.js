
import React from "react";


import { Fragment } from "react";
import ContentEditable from "react-contenteditable";
import { createObjectID, readObjectID,isValidObjectID }  from 'mongo-object-reader';
import EditableOptionManager from "./EditableOptionManager";

export default class EditableRadio extends React.Component {
        
    
    render()  {
      return (
        <Fragment>
            <EditableOptionManager question={this.props.question} handleOptionChange={this.props.handleOptionChange}>
                <input type="radio" disabled/>
            </EditableOptionManager>
        </Fragment>
        
      );
    }
}