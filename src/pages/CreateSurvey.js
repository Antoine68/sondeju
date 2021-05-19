import React from "react";
import { Link } from "react-router-dom";


import Layout from "../components/Layout";

import { Menu, Dropdown } from 'antd';
import Question from "../components/Question";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


export default class CreateSurvey extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      i:0,
      questions : []
    }
  }
  
  addQuestion(questionType) {
    this.state.i++;
    this.setState({
      questions: [...this.state.questions, <Question>{this.state.i}</Question>]
    });
  }
  
  duplicateQuestion(indexQuestion) {
    this.setState({
      questions: [...this.state.questions, this.state.questions[indexQuestion]]
    });
  }
  
  removeQuestion(indexQuestion) {
    this.setState({
      questions: this.state.questions.filter((_, i) => i !== indexQuestion)
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
  
  renderQuestions() {
    return this.state.questions.map((question, index) => {
      return (
        <Draggable key={index} draggableId={"draggable-"+index} index={index}>
          {(provided, snapshot) => (
            <div className="container-question" ref={provided.innerRef} {...provided.draggableProps} 
            style={{
              ...provided.draggableProps.style,
              boxShadow: snapshot.isDragging ? "0 0 .4rem black" : "none"
              }} >
              <div className="toolbar-question">
                <span {...provided.dragHandleProps}><i class="fas fa-expand-arrows-alt"></i></span>
                {index === 0 ? <span></span> : <span onClick={() => this.moveQuestion(index, index-1)}><i className="fas fa-arrow-up"></i></span>}
                <span onClick={() => this.removeQuestion(index)}><i className="fas fa-trash-alt"></i></span>
                <span onClick={() => this.duplicateQuestion(index)}><i className="fas fa-copy"></i></span>
                {index === this.state.questions.length-1 ? <span></span> : <span onClick={() => this.moveQuestion(index, index+1)}><i className="fas fa-arrow-down"></i></span>}
              </div>
              {question}
            </div>
          )}
        </Draggable>
      );
    });
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
            
            <div className="question text-center">
              <DragDropContext onDragEnd={(...props) => {this.handleDragEnd(props[0])}}>
                <Droppable droppableId="droppable-1">
                {(provided, _) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {this.renderQuestions()}
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
