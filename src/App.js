import React, { Component } from 'react';
import './App.css';
import UserInputBox from './UserInputBox.js';
import PreviewBox from './PreviewBox';

class App extends Component {

  constructor(props){
    super(props);
    this.updateAppState = this.updateAppState.bind(this);
    this.state = {
      markdown: ''
    };
  }

  updateAppState(md){
    //takes md and sets it to current state
    this.setState({
      markdown: md
    });
  }

  render() {
    return (
      <div className="title-container">
        <h1>Markdown Previewer</h1>
        <div className="main-flex">
          <UserInputBox updateAppState={this.updateAppState}/>
          <PreviewBox md={this.state.markdown}/>
        </div>
      </div>
    );
  }
}

export default App;
