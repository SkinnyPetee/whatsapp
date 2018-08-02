import React, { Component} from 'react';
import style from '../css/MessageFooter.css';

class MessageFooter extends Component {


    render(){
        return(
            <div className={style.container}>
                <input className={style.messageInput}/>
                <i class="fas fa-arrow-circle-right"></i>
            </div>
        );
    }
}

export default MessageFooter;