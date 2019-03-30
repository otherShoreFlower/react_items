import * as ActionType from "../contans/City"

const initState = {}
export default function city(state = initState, action){
    switch(action.type){
        case ActionType.INIT_CITY:
            return state = action.data;
        case ActionType.UPDATE_CITY:
            return state = action.data;
        default:
            return state;
    }
}