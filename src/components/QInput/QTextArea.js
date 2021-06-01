
import React from "react";

import TextArea from "antd/lib/input/TextArea";


export default class QTextArea extends React.Component {
     
    
    render()  {
      let {question, response} = this.props;
      return (
        <div className="answer-container">
          <TextArea placeholder="Saisir une réponse..." value={response.value}/>
        </div>
      );
    }
}