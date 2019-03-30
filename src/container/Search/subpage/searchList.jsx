import React from "react"
import getSearchData from "../../../fetch/search"
import SearchListView from "../../../components/SearchListView"

import LoadMore from "../../../components/LoadMore"
export default class SearchList extends React.Component {
    constructor() {
        super();
        this.state = {
            searchData: [],
            page: 0,
            hasMore: false
        }
    }
    componentDidMount() {
        const city = this.props.city || "shanghai";
        const keyword = this.props.keyword || "default";
        this.http(city, keyword, 0);
    }
    componentDidUpdate(prevProps, prevState) {
        const city = this.props.city || 'shanghai'
        const keyword = this.props.keyword || 'default';
        // 如果上一次的props和这一次props相同，说明两次搜索的内容一样，就不再次请求
        if (prevProps.keyword !== keyword) {
            this.http(city, keyword, 0);
        }
    }
    http(city, keyword, page) {
        getSearchData(city, keyword, page)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    searchData: this.state.searchData.concat(data.data),
                    page: this.state.page += 1,
                    hasMore:data.hasMore

                })
            })
    }
    LoadMoreHandler() {
        const city = this.props.city || "shanghai";
        const keyword = this.props.keyword || "default";
        const page = this.state.page;
        this.http(city, keyword, page)
    }
    render() {
        return (
            <div>
                {
                    this.state.searchData.length > 0 ?
                        <SearchListView data={this.state.searchData} /> :
                        <div>数据加载中...</div>
                }
                {
                    this.state.hasMore ?
                    <LoadMore onCostomEvent={this.LoadMoreHandler.bind(this)} />
                    :
                    <div>
                        我是有底限的...
                    </div>
                }
            </div>
        )
    }
}