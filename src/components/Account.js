import './../styles/Account.css';
import { Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import {addConnection} from '../store/actions'

import React from "react";
import FormAccount from './FormAccount';
import axios from 'axios';
import SkeletonCard from './SkeletonCard';
import CardSurvey from './CardSurvey';

class AccountContent extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      surveys: [],
      isLoading: true,
    }
    this.disconnect = this.disconnect.bind(this);
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/api/user/'+ this.props.user._id +'/surveys' )
      .then(res => {
        let surveys = res.data;
        console.log(surveys);
        this.setState({
          surveys: [...surveys], 
          isLoading: false,
        });
    })
  }

  disconnect(){
    const userStore = {
      connected : false,
      pseudo: '',
      name: '',
      firstname: '',
      mail : '',
      age: ''
    }
  this.props.addConnection(userStore)
  }

  render()  {
    return (
      <div>
        
        <h1 class="text-center font-weight-bold blue-color">Mon compte</h1>

        <h3 class="text-left mt-4 mb-0 pb-0 ml-2">Mes informations personnelles</h3>
        <hr></hr>
        <FormAccount user={this.props.user}></FormAccount>
        <div class="text-center">
          <Link to="/compte">
            <button type="button" class="btn btn-outline-info button-account" data-mdb-ripple-color="dark">
            <i class="fas fa-save mr-1"></i>
              Enregistrer
            </button>
          </Link>
          <button type="button" onClick={this.disconnect} class="btn btn-outline-danger button-disconnect mt-5 mb-5" data-mdb-ripple-color="dark">
          <i class="fas fa-times mr-1"></i>
                Se déconnecter
          </button>
        </div>
        <h3 class="text-left mt-4 mb-0 pb-0 ml-2">Mes sondages ({this.state.surveys.length})</h3>
        <hr></hr>
        {
          (() => {
            if(this.state.surveys.length === 0 && this.state.isLoading) {
              return(
                  <div class="row mw-100 m-0 p-0 mt-3">
                    <SkeletonCard /><SkeletonCard /><SkeletonCard /> 
                  </div>
              );
            }
            return (
              <div class="row mw-100 m-0 p-0 mt-3">
                {
                  this.state.surveys.map((survey, index) => {
                    return <CardSurvey key={index} survey={survey}/>
                  })
                }
              </div>
            );
          })()
        }
      </div>
    );
  }
}

export default connect(null,{ addConnection })(AccountContent)
