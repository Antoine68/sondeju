
import React from "react";

import { Input } from 'antd';


export default class QInput extends React.Component {
     

    render()  {
      let {question, response} = this.props;
      return (
        <div className="answer-container">
          <Input placeholder="Saisir une réponse..." value={response.value}/>
        </div>
      );
    }
}