import * as ActionsType from "../contans/City.js"

export function setCity(data){
    return {
        type: ActionsType.INIT_CITY,
        data
    }
}
export function updateCity(data){
    return {
        type: ActionsType.UPDATE_CITY,
        data
    }
}