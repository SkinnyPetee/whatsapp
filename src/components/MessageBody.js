import React, { Component} from 'react';
import MessageBox from './MessageBox';
import { connect } from 'react-redux';
import style from '../css/MessageBody.css';


class MessageBody extends Component {
    render(){
        return(
            <div className={style.container}>
                <div className={style.dateBoxWrapper}>
                   <div className={style.dateBox}>
                        today
                   </div>
                </div>
                
               
                {
                  
                    this.props.messages.map((message) => <MessageBox key={message.id} message={message}/>)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages : state.messages
    }
}

export default connect(mapStateToProps,null)(MessageBody);