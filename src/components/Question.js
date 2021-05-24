
import React from "react";

import { Input } from 'antd';

export default class Question extends React.Component {
  render()  {
    return (
        <div className="">
            <h3 contentEditable={true} suppressContentEditableWarning={true} class="card-title">Saisir la question {this.props.children}</h3>
            <Input placeholder="Saisir une réponse..." />
            {this.props.children}
        </div>
    );
  }
}