import React, { Component} from 'react';
import style from '../css/MessageFooter.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions/messages';

class MessageFooter extends Component {
   
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.state = {
            id: 10
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.element.value.trim() != "") {
            this.props.sendMessage({
                id : this.state.id + 1,
                text : this.element.value,
                self: true
           });
           this.element.value = '';
        } 
       
      }

    keyPress(e){
        
        if(e.keyCode == 13){
           
           if(e.target.value.trim() != "") {
            this.props.sendMessage({
                id : this.state.id + 1,
                text : e.target.value,
                self: true
           });
            e.target.value = '';
        } 
        }
     }

    render(){
        return(
            <div className={style.container}>
                <input 
                className={style.messageInput} 
                onKeyDown={this.keyPress}
                ref={el => this.element = el}
                />
                <a onClick={this.handleSubmit}><i className ="fas fa-arrow-circle-right"></i></a>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        sendMessage
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(MessageFooter);