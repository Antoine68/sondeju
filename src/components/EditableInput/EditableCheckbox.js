
import React from "react";

import { Input } from 'antd';
import EditableOptionManager from "./EditableOptionManager";


export default class EditableCheckbox extends React.Component {
     

    render()  {
      return (
        <EditableOptionManager question={this.props.question} handleOptionChange={this.props.handleOptionChange}
        buttonText="Ajouter un choix">
            <input type="checkbox" disabled/>
        </EditableOptionManager>
        
      );
    }
}