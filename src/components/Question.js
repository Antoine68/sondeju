
import React from "react";

import { Input } from 'antd';

export default class Question extends React.Component {
  render()  {
    return (
        <div className="">
            <Input placeholder="Saisir une réponse..." />
            {this.props.children}
        </div>
    );
  }
}