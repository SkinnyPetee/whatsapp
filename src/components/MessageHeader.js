import React, { Component} from 'react';
import style from '../css/MessageHeader.css';

class MessageHeader extends Component {


    render(){
        return(
            <div className={style.container}>
                <div className={style.buttonWrapper}>
                    <i className ="fas fa-angle-left"></i>
                </div>
                <div className={style.profileWrapper}>
                    <h2>john appleseed </h2>
                </div>
            </div>
        );
    }
}

export default MessageHeader;