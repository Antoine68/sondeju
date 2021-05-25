
import React from "react";

import { Input } from 'antd';
import { Fragment } from "react";


export default class EditableSelect extends React.Component {
     
    
    
    render()  {
      let question = this.props.question;
      return (
          <Fragment>
              <select disabled={"disabled"}><option>Choisir une option</option></select>
          
          </Fragment>
        
      );
    }
}