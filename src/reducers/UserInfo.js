import * as actionsType from "../contans/UserInfo";

export default  function userinfo(state = {}, action){
    switch(action.type){
        case actionsType.USERINFO_LOGIN:
            return state = action.data;
        case actionsType.USERINFO_RELOGIN:
            return state = action.data;
        default:
            return state;
    }
}