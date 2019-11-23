import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/types";

const initialState = {
    user: {}
}

export default function (state = initialState, action){
    switch(action.type) {
        case LOGIN_SUCCESS:
            return{
                ...state,
                user: action.payload
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                user: action.payload
            }
        case LOGOUT:
            return{
                ...state,
                user: action.payload
        }
        default:
            return state;
    }
}