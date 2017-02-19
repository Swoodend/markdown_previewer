import React, {Component} from 'react';
import marked from 'marked';


class UserInputBox extends Component{

  constructor(props){
    super(props)
    this.getMarkdown = this.getMarkdown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getMarkdown(text){
    return new Promise((res, rej) =>{
      let userInput = text;
      res(marked(userInput));
    });
  }

  handleChange(){
    let newText = this.refs.userText.value;
    this.getMarkdown(newText).then((md) =>{
      this.props.updateAppState(md);
    });
  }

  render(){
    return (
      <textarea
        cols="75"
        placeholder="enter some markdown"
        onChange={this.handleChange}
        ref="userText"
      >
      </textarea>
    )
  }
}

export default UserInputBox;
