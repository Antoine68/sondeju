
import React from "react";

import { Input } from 'antd';
import { Fragment } from "react";
import EditableOptionManager from "./EditableOptionManager";


export default class EditableSelect extends React.Component {
     
    
    
    render()  {
      return (
        <Fragment>
            <select disabled={"disabled"}><option>Choisir une option</option></select>
            <EditableOptionManager question={this.props.question} handleOptionChange={this.props.handleOptionChange} 
            buttonText="Ajouter une option">
                <i class="fas fa-list"></i> 
            </EditableOptionManager>    
        </Fragment>
        
      );
    }

}