import React from "react";
import { Link } from "react-router-dom";

import './../styles/CreateSurvey.css';

import Layout from "../components/Layout";

import { Menu, Dropdown } from 'antd';
import Question from "../components/Question";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { createObjectID, readObjectID,isValidObjectID }  from 'mongo-object-reader';
import EditableQuestion from "../components/EditableQuestion";


export default class CreateSurvey extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      questions : []
    }
   
  }
  
  createQuestion(title, type, options) {
    return {id: createObjectID(), title: title, type: type, options: options}
  }
  
  componentDidMount() {
    this.addQuestion("");
  }
  
  addQuestion(type) {
    this.setState({
      questions: [...this.state.questions, this.createQuestion("Saisir la question", type, "")]
    });
  }
  
  duplicateQuestion(idQuestion) {
    let question = this.state.questions.find(question => question.id === idQuestion);
    if(!question) return;
    this.setState({
      questions: [...this.state.questions, this.createQuestion(question.title, question.type, question.options)]
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
    console.log(indexSourceQuestion, indexDestinationQuestion)
    this.moveQuestion(indexSourceQuestion,indexDestinationQuestion);
  }
  
    
  handleChange(idQuestion, event) {
    let newTitle = event.target.value;
    this.setState({
      questions: this.state.questions.map(question => (question.id === idQuestion ? {id: question.id, title: newTitle, type: question.type, options: question.options} : question))
    })
  }
  
  
  
  menu() {
    return (
      <Menu>
        <Menu.Item key="0" onClick={() => this.addQuestion("")}>
          <span><i class="fas fa-grip-lines"></i> Réponse courte</span>
        </Menu.Item>
        <Menu.Item key="1">
          <span><i class="fas fa-align-justify"></i> Réponse longue</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <span><i class="far fa-circle"></i> Choix multiple</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span><i class="far fa-square"></i> Cases à cocher</span>
        </Menu.Item>
        <Menu.Item key="4">
          <span><i class="fas fa-list"></i> Liste déroulante</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="5">
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
            <h2 contentEditable={true} suppressContentEditableWarning={true}>Titre du sondage</h2>
            <p contentEditable={true} suppressContentEditableWarning={true}>Entrer une description du sondage...</p>
            
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
                            handleChange={this.handleChange.bind(this)} 
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
        
      </Layout>
      
    );
  }
}
