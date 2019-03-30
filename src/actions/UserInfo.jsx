import * as actionsType from "../contans/UserInfo"
export function login(data){
    return{
        type: actionsType.USERINFO_LOGIN,
        data
    }
}
export function relogin(data){
    return{
        type: actionsType.USERINFO_RELOGIN,
        data
    }
}