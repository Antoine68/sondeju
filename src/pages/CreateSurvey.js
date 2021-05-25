import React from "react";
import { Link } from "react-router-dom";

import './../styles/CreateSurvey.css';

import Layout from "../components/Layout";

import { Menu, Dropdown } from 'antd';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { createObjectID, readObjectID,isValidObjectID }  from 'mongo-object-reader';
import EditableQuestion from "../components/EditableQuestion";
import ContentEditable from "react-contenteditable";
import EditableInput from "../components/EditableInput/EditableInput";
import EditableCheckbox from "../components/EditableInput/EditableCheckbox";
import EditableRadio from "../components/EditableInput/EditableRadio";
import EditableRange from "../components/EditableInput/EditableRange";
import EditableSelect from "../components/EditableInput/EditableSelect";
import EditableTextArea from "../components/EditableInput/EditableTextArea";


export default class CreateSurvey extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      title: "Titre du sondage",
      description : "Entrer une description du sondage...",
      questions : []
    }
    this.typeConverter = {
      "short" : {initOption : [], component: <EditableInput/>},
      "long" : {initOption : [], component: <EditableTextArea/>},
      "multiple" : {initOption : [], component:<EditableRadio/>},
      "unique": {initOption : [], component:<EditableCheckbox/>},
      "select": {initOption : [], component:<EditableSelect/>},
      "range": {initOption : [{min: 0, max:4}], component:<EditableRange/>}      
    }
  }
  
  createQuestion(title, type, options) {
    return {id: createObjectID(), title: title, type: type, options: options}
  }
  
  componentDidMount() {
    this.addQuestion("short");
  }
  
  addQuestion(type) {
    this.setState({
      questions: [...this.state.questions, this.createQuestion("Saisir la question", type, this.typeConverter[type].initOption)]
    });
  }
  
  duplicateOptions(options) {
    let newOptions = options.map(option => {
      if(option.id) option.id = createObjectID();
      return option;
    })
    return newOptions;
  }
  
  duplicateQuestion(idQuestion) {
    let question = this.state.questions.find(question => question.id === idQuestion);
    if(!question) return;
    this.setState({
      questions: [...this.state.questions, this.createQuestion(question.title, question.type, this.duplicateOptions(question.options))]
    });
  }
  
  removeQuestion(idQuestion) {
    this.setState({
      questions: this.state.questions.filter(question => question.id !== idQuestion)
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
  
    
  handleQuestionChange(idQuestion, event) {
    let newQuestionTitle = event.target.value;
    this.setState({
      questions: this.state.questions.map(question => (question.id === idQuestion ? {id: question.id, title: newQuestionTitle, type: question.type, options: question.options} : question))
    })
  }
  
  handleTilteChange(event) {
    let newTitle = event.target.value;
    this.setState({
      title: newTitle
    })
  }
  
  handleDescriptionChange(event) {
    let newDescription = event.target.value;
    this.setState({
      description: newDescription
    })
  }
  
  handleOptionChange(idQuestion, options) {
    this.setState({
      questions: this.state.questions.map(question => (question.id === idQuestion ? {id: question.id, title: question.title, type: question.type, options: options} : question))
    })
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
    return (
      <Layout>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white">
            <li class="breadcrumb-item"><Link to="/" class="blue-color font-weight-normal">Accueil</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Créer un sondage</li>
          </ol>
        </nav>
        <h1 class="text-center font-weight-bold blue-color">Créer un sondage</h1>
        
        <section class="section-sondage mb-5 mt-5">
          <ContentEditable html={this.state.title} onChange={(event) => this.handleTitleChange(event)}/>
          <ContentEditable html={this.state.description} onChange={(event) => this.handleDescriptionChange(event)}/>            
            <div className="text-center">
              <Dropdown overlay={this.menu.bind(this)} trigger={['click']}>
                <a className="ant-dropdown-link btn btn-outline-info button-account" onClick={e => e.preventDefault()}>
                <i class="fas fa-plus mr-1"></i> Ajouter une question
                </a>
              </Dropdown>
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
                          >
                          
                            {React.cloneElement(this.typeConverter[question.type].component, 
                              {
                                question : question,
                                handleOptionChange: this.handleOptionChange.bind(this)
                              }
                            )}
                          
                          </EditableQuestion>
                        )}
                      )
                    }
                  </div>
                )}
                </Droppable>
              </DragDropContext>
            </div>            
        </section>
      </Layout>
      
    );
  }
}
