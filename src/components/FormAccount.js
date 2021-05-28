import { connect } from "react-redux"
import React from "react";
  
  class FormAccount extends React.Component{
  
    constructor (props){
        console.log("okok")
      super(props)
      const user = this.props.user;
      console.log(user)
      
      this.state = {
        pseudo : user.pseudo,
        nom : user.name,
        prenom : user.firstname,
        mail : user.mail,
        age : user.age,
        pseudoErreur : 0,
        ageErreur : 0
      }
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange (e) {
      this.setState({
        pseudo: e.target.value.pseudo,
        nom: e.target.value.nom,
        prenom: e.target.value.prenom,
        mail: e.target.value.mail,
        age: e.target.value.age
      })
      if (e.target.name == "pseudo"){
        if (e.target.value == ""){
          this.setState({pseudoErreur : 1})
        }else{
          this.setState({pseudoErreur : 0})
        }
      }
      if (e.target.name == "age"){
        if (e.target.value == "" || e.target.value < 0){
          this.setState({ageErreur : 1})
        }else{
          this.setState({ageErreur : 0})
        }
      }
    }
  
    render (){
      return <div class="container mt-5 mb-5">
                <div class="form-group row">
                  <div class="row col-lg-2 col-sm-12 col-form-label">
                    <label htmlFor="pseudo">Pseudonyme* :</label>
                  </div>
                  <input type="text" name="pseudo" class="form-control col-lg-10 col-sm-12" style={{ border: this.state.pseudoErreur == 1 ? '1px solid red' : '' }}
                  value={this.state.pseudo} onChange={this.handleChange}></input>
                </div>
  
  
                <div class="form-group row">
                  <div class="row col-lg-2 col-sm-12 col-form-label">
                    <label htmlFor="nom">Nom :</label>
                  </div>
                  <input type="text" id="nom" name="nom" class="form-control col-lg-4 col-sm-12" value={this.state.nom} onChange={this.handleChange}></input>
                  <div class="row col-lg-2 col-sm-12 col-form-label ml-3">
                    <label htmlFor="prenom">Prénom :</label>
                  </div>
                  <input type="text" id="prenom" name="prenom" class="form-control col-lg-4 col-sm-12" value={this.state.prenom} onChange={this.handleChange}></input>
                </div>
  
                <div class="form-group row">
                  <div class="row col-lg-2 col-sm-12 col-form-label">
                    <label htmlFor="mail">Adresse mail :</label>
                  </div>
                  <input type="text" id="mail" name="mail" class="form-control col-lg-10 col-sm-12" value={this.state.mail} onChange={this.handleChange}></input>
                </div>
  
                <div class="form-group row">
                  <div class="row col-lg-2 col-sm-12 col-form-label">
                    <label htmlFor="age">Âge* :</label>
                  </div>
                  <input type="number" id="age" name="age" class="form-control col-lg-10 col-sm-12" style={{ border: this.state.ageErreur == 1 ? '1px solid red' : '' }}
                  value={this.state.age} onChange={this.handleChange}></input>
                </div>
              </div>
              
    }
  }
  
  const user = (state) => ({
    user: state.user
  });
  
  export default connect(user,null)(FormAccount)