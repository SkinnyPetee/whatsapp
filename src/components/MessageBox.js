import React, { Component} from 'react';
import style from '../css/MessageBox.css';


class MessageBox extends Component {
    constructor(props) {
        super(props);
    }
    render(){
         let messageSelf = this.props.message.self;
        return(
            <div 
            className={
                [style.messageWrapper,
                messageSelf ? style.toRight : style.toLeft].
                join(' ')}>
                   <div className={[style.message, 
                   messageSelf ? style.greenColor : style.whiteColor ].
                   join(' ')}>
                      {this.props.message.text}
                   </div>
            </div>
             
        );
    }
}

export default MessageBox;