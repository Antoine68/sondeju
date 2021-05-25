
import React from "react";

import { Input } from 'antd';


export default class EditableInput extends React.Component {
     
    
    
    render()  {
      let question = this.props.question;
      return (
        <Input placeholder="Saisir une réponse..." disabled={"disabled"}/>
      );
    }
}