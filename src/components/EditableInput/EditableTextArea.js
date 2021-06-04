
import React from "react";

import { Input } from 'antd';
import TextArea from "antd/lib/input/TextArea";


export default class EditableTextArea extends React.Component {
     
    render()  {
      return (
        <TextArea value="Saisir une réponse..." disabled={"disabled"}/>
      );
    }
}