import React from "react";
import { Link, Redirect } from "react-router-dom";

import './../styles/CreateSurvey.css';

import Layout from "./Layout";

import { Menu, Dropdown, Select } from 'antd';


import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { createObjectID }  from 'mongo-object-reader';
import EditableQuestion from "./EditableQuestion";
import ContentEditable from "react-contenteditable";
import axios from "axios";
import SelectCategory from "./SelectCategory";
import { sanitize } from "../utils";
import Breadcrumb from "./Breadcrumb";



export default class EditableSurvey extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description : "",
      category: null,
      redirect:'0',
      questions : []
    }
    this.categories = [];
    this.initializer = {
      "short" : {initRange : null},
      "long" : {initRange : null},
      "multiple" : {initRange : null},
      "unique": {initRange : null},
      "select": {initRange : null},
      "range": {initRange : {min: 0, max:4}}
    }
  }
  
  componentDidMount() {
    this.addQuestion("short");
  }
  
  createQuestion(title, type, options, range, mandatory) {
    return {_id: createObjectID(), title: title, type: type, options: options, range:range, mandatory: mandatory}
  }
  
  
  addQuestion(type) {
    this.setState({
      questions: [...this.state.questions, this.createQuestion("Saisir la question", type, [], this.initializer[type].initRange, false)]
    });
  }
  
  duplicateOptions(options) {
    let newOptions = options.map(option => {
      return {...option, _id:createObjectID()}
    })
    return newOptions;
  }
  
  duplicateQuestion(idQuestion) {
    let question = this.state.questions.find(question => question._id === idQuestion);
    if(!question) return;
    let index = this.state.questions.findIndex(question => question._id === idQuestion);
    let questions = this.state.questions.slice();
    let newQuestion = this.createQuestion(question.title, question.type, this.duplicateOptions(question.options), question.range, question.mandatory);
    questions.splice(index+1, 0, newQuestion);
    this.setState({
      questions: questions
    });
  }
  
  removeQuestion(idQuestion) {
    this.setState({
      questions: this.state.questions.filter(question => question._id !== idQuestion)
    });
  }
  
  moveQuestion(indexQuestion, newIndex) {
    if(newIndex === -1 || newIndex === this.state.questions.length) return;
    let questions = this.state.questions;
    let question = questions.splice(indexQuestion, 1) [0];
    questions.splice(newIndex, 0, question);
    this.setState({
      questions: questions
    });
  }
  
  handleDragEnd(dragObject) {
    if(!dragObject.destination) return;
    let indexSourceQuestion = dragObject.source.index;
    let indexDestinationQuestion = dragObject.destination.index;
    this.moveQuestion(indexSourceQuestion,indexDestinationQuestion);
  }
  
  handleQuestionChange(idQuestion, newQuestion) {
    this.setState({
        questions: this.state.questions.map(question => (question._id === idQuestion ? {...newQuestion} : question))
      })
  }
  
  handleTitleChange(event) {
    let newTitle = sanitize(event.target.value);
    this.setState({
      title: newTitle
    })
  }
  
  handleDescriptionChange(event) {
    let newDescription = sanitize(event.target.value, true);
    this.setState({
      description: newDescription
    })
  }
  
  handleCategoryChange(value) {
    this.setState({
      category : value
    });
  }
  
  
  onSubmit() {
    let data = {...this.state, author: this.props.user._id}
    console.log(this.props.user);
    axios.post('http://localhost:5000/api/survey', data)
      .then(
        res => {
          console.log(res.status)
          if (res.status == 200){
              console.log(res.data)
              this.setState({redirect : '1'})
          }else{
            
          }
        }
      );
  }
  
      
  
  menu() {
    return (
      <Menu>
        <Menu.Item key="0" onClick={() => this.addQuestion("short")}>
          <span><i class="fas fa-grip-lines"></i> Réponse courte</span>
        </Menu.Item>
        <Menu.Item key="1" onClick={() => this.addQuestion("long")}>
          <span><i class="fas fa-align-justify"></i> Réponse longue</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2" onClick={() => this.addQuestion("multiple")}>
          <span><i class="far fa-circle"></i> Choix multiple</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => this.addQuestion("unique")}>
          <span><i class="far fa-square"></i> Cases à cocher</span>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => this.addQuestion("select")}>
          <span><i class="fas fa-list"></i> Liste déroulante</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="5" onClick={() => this.addQuestion("range")}>
          <span><i class="fas fa-ruler-horizontal"></i> Echelle linéaire</span>
        </Menu.Item>
      </Menu>
    );
  }
  
  
  
  render()  {
    if(this.state.redirect == '1'){
      return <Redirect to={{ pathname:"/",state:{survey_created: 1} }} />
    }    
    return (
        <section class="section-sondage mb-5 mt-5">
          <ContentEditable placeholder={"Saisir le titre du sondage"} className="title-editable" html={this.state.title} onChange={(event) => this.handleTitleChange(event)}/>
          <ContentEditable placeholder={"Entrer une description du sondage..."} className="description-editable" html={this.state.description} onChange={(event) => this.handleDescriptionChange(event)}/>            
          <div className="text-center mb-2">
              <SelectCategory  handleChange={this.handleCategoryChange.bind(this)} firstValueName={"Catégorie du sondage"} defaultValue={this.state.category} />
            </div>
            <div className="text-center">
              <Dropdown overlay={this.menu.bind(this)} trigger={['click']}>
                <a className="ant-dropdown-link btn btn-outline-info button-account" onClick={e => e.preventDefault()}>
                <i class="fas fa-plus mr-1"></i> Ajouter une question
                </a>
              </Dropdown>
              <button onClick={() => this.onSubmit()} type="button" class="btn btn-outline-info button-account" data-mdb-ripple-color="dark">
                  <i class="fas fa-share-square mr-1"></i>
                    Publier le sondage
              </button>
            </div>
            <div className="questions text-center">
              <DragDropContext onDragEnd={(...props) => {this.handleDragEnd(props[0])}}>
                <Droppable droppableId="droppable-1">
                {(provided, _) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {
                      this.state.questions.map((question, index) => {
                        return (
                          <EditableQuestion
                            key={index}
                            question={question} 
                            index={index}
                            handleChange={this.handleQuestionChange.bind(this)}
                            handleDelete={this.removeQuestion.bind(this)} 
                            handleDuplicate={this.duplicateQuestion.bind(this)}
                          />
                        )}
                      )
                    }
                  </div>
                )}
                </Droppable>
              </DragDropContext>
            </div>           
        </section>      
    );
  }
}