import { data } from './data';
import { SEND_MESSAGE } from '../actions/messages';


export default function messages(state = data, action) {
    switch(action.type) {

        case SEND_MESSAGE:
          return [...state, action.message]
      
         default :
         return state
    }
}