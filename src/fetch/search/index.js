import { httpGet } from "../../utils/http"

export default function getSearchData(city, keyword, page){
    var result = httpGet(`/api/search?city=${city}&keyword=${keyword}&page=${page}`);
    return result;
}