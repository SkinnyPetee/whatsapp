import React, { Component} from 'react';
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
                <div className={[style.messageWrapper, style.toRight].join(' ')}>
                   <div className={[style.message, style.greenColor].join(' ')}>
                        today
                   </div>
                </div>
                <div className={[style.messageWrapper, style.toRight].join(' ')}>
                   <div className={[style.message, style.greenColor].join(' ')}>
                        today
                   </div>
                </div>
                <div className={[style.messageWrapper, style.toRight].join(' ')}>
                   <div className={[style.message, style.greenColor].join(' ')}>
                        today
                   </div>
                </div>

                <div className={[style.messageWrapper, style.toLeft].join(' ')}>
                   <div className={[style.message, style.whiteColor].join(' ')}>
                        today
                   </div>
                </div>

                <div className={[style.messageWrapper, style.toLeft].join(' ')}>
                   <div className={[style.message, style.whiteColor].join(' ')}>
                   Lorem ipsum dolor sit amet, consectetur 
                   adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation 
                   ullamco laboris nisi ut aliquip ex ea commodo 
                   consequat. Duis aute irure dolor in reprehenderit 
                   in voluptate velit esse cillum dolore eu fugiat 
                   nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                   </div>
                </div>

                 <div className={[style.messageWrapper, style.toRight].join(' ')}>
                   <div className={[style.message, style.greenColor].join(' ')}>
                   Lorem ipsum dolor sit amet, consectetur 
                   adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation 
                   ullamco laboris nisi ut aliquip ex ea commodo 
                   consequat. Duis aute irure dolor in reprehenderit 
                   in voluptate velit esse cillum dolore eu fugiat 
                   nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                   </div>
                </div> 

                 <div className={[style.messageWrapper, style.toRight].join(' ')}>
                   <div className={[style.message, style.greenColor].join(' ')}>
                   Lorem ipsum dolor sit amet, consectetur 
                   adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation 
                   ullamco laboris nisi ut aliquip ex ea commodo 
                   consequat. Duis aute irure dolor in reprehenderit 
                   in voluptate velit esse cillum dolore eu fugiat 
                   nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                   </div>
                </div> 


            </div>
        );
    }
}

export default MessageBody;