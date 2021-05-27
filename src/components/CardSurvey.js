import './../styles/NewsFeed.css';

import React from "react";

export default class CardSurvey extends React.Component {
  render()  {
    let survey = this.props.survey;
    return (
        <div class="col-lg-4 col-md-12 mt-3 mb-3">
            <div class="card text-center" style={{minHeight:"400px"}}>
                <div class="card-header bg-white">
                    {survey.category.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{survey.title}</h5>
                    <p class="card-text">{survey.description}</p>
                    <button href="#" class="btn btn-primary bg-button">Consulter</button>
                </div>
                <div class="card-footer text-muted bg-white">
                    Durée : {survey.questions.length} min
                </div>
            </div>
        </div>
        
    );
  }
}