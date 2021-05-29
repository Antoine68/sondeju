import './../styles/NewsFeed.css';
import 'react-dropdown/style.css';
import CardSurvey from "./CardSurvey";


import React from "react";
import axios from 'axios';
import SelectCategory from './SelectCategory';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class NewsFeed extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      hasMore: true,
      surveys: []
    }
    this.size = 12;
  }
  
  componentDidMount() {
    this.loadSurveys();
  }
  
  loadSurveys() {
    axios.get('http://localhost:5000/api/surveys?category='+ 
              (this.state.category ? this.state.category : '') +
              '&size='+this.size+
              '&lastId='+ (this.state.surveys.length > 0 ? this.state.surveys[this.state.surveys.length-1]._id : '') )
      .then(res => {
        const surveys = res.data;
        this.setState({ 
          surveys: [...this.state.surveys, ...surveys], 
          hasMore: (surveys.length === this.size)
        });
    })
  }
  
  handeNextPage() {
    this.loadSurveys();
  }
  
  handleCategoryChange(value) {
    this.setState({
      category: value,
      surveys: [],
    }, () => this.loadSurveys());
  }
  
  render()  {
    return (
      <div>
        <div class="row mw-100 m-0 p-0 mt-4">
          <div class="col-lg-8">
            <h2 class="ml-5">Les derniers sondages</h2>
          </div>
          <div class="col-lg-4 col-md-12 text-center mt-3">
            <SelectCategory handleChange={this.handleCategoryChange.bind(this)} firstValueName={"Toutes les catégories"} defaultValue={this.state.category} />
          </div>
          <div class="col-lg-3"></div>
        </div>
        
          <InfiniteScroll 
            dataLength={this.state.surveys.length} 
            next={this.handeNextPage.bind(this)}
            hasMore={this.state.hasMore}
            loader={
              <div className="load-info">
                Chargement des sondages<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              </div>
            }
            endMessage={
              <div className="load-info">
                <b>Vous êtes arrivé au bout !</b>
              </div>
            }>
              <div class="row mw-100 m-0 p-0 mt-3">
                {
                  this.state.surveys.map((survey, index) => {
                    return <CardSurvey key={index} survey={survey}/>
                  })
                }
              </div>
          </InfiniteScroll>

      </div>
    );
  }
}