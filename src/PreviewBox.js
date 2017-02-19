import React, {Component} from 'react';

class PreviewBox extends Component{
  render(){
    return (
      <div className="preview-box"
        dangerouslySetInnerHTML={{__html: this.props.md}}>
      </div>
    )
  }
}

export default PreviewBox;
