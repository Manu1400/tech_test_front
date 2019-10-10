import React, { Component } from 'react';

class EditableField extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isReadOnly: true,
          text: this.props.value
        };
      
        this.handleChange = this.handleChange.bind(this);
    }

    validate() {
        this.setState({
            isReadOnly: true
        })
    }
  
    activateEditMode() {
        this.setState({
            isReadOnly: false
        })
    }
  
    handleChange(event) {
        this.setState({
            text: event.target.value
        })
    }
    
    render() {
        return <div>
          <label>{this.props.name}</label>
          <br />
            <input type='text' name='simple-input' 
                value={this.state.text}
                onChange={this.handleChange}
                onClick={() => this.activateEditMode()}
                readOnly={this.state.isReadOnly} />
            {!this.state.isReadOnly &&
                <input type="button" 
                    className="glyphicon glyphicon-pencil"
                    value="Validate"
                    onClick={() => this.validate()} />
            }
        </div>
    }
}

export default EditableField