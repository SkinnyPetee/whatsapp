import React, { Component} from 'react';
import style from '../css/App.css';
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';

class App extends Component {


    render(){
        return(
            <div className={style.container}>
                <MessageHeader />
                <MessageBody />
                <MessageFooter />
            </div>
        );
    }
}

export default App;