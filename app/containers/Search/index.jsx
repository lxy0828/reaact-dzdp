import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const param = this.props.params
        console.log('000',param)
        return (
            
            <div>
                <SearchHeader keyword = {param.keyword}/>
                <SearchList keyword ={param.keyword} category={param.category}/>
            </div>
        )
    }
}

export default Search