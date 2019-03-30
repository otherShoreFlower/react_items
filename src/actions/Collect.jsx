import * as actionsType from "../contans/Collect"

export function setCollect(data){
    return{
        type:actionsType.COLLECTED,
        data
    }
}

export function cancelCollect(data){
    return{
        type:actionsType.UNCOLLECT,
        data
    }
}