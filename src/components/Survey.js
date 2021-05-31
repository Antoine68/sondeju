import './../styles/NewsFeed.css';

import React from "react";
import { Link } from 'react-router-dom';
import { Skeleton } from 'antd';
import { Fragment } from 'react';

export default class Survey extends React.Component {
  render()  {
      let survey = this.props.survey;
    return (
        <Fragment>
            <h1 class="text-center font-weight-bold blue-color">{survey.title}</h1>
                    
        
        </Fragment>        
    );
  }
}