import { httpGet } from "../../utils/http"

export function getDetailData (id){
    var result = httpGet(`/api/detail?id=${id}`);
    return result;
}