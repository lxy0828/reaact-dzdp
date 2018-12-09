import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'
class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <input style={{color:'#333'}} type="text" className="search-input"
            value={this.state.value}
            onChange = {this.changeHandle.bind(this)}
            onKeyUp={this.keyUpHandle.bind(this)}
            placeholder="请输入"/>
        )
    }
    componentDidMount () {
        this.setState({
            value: this.props.value || ""
        })
    }
    changeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    keyUpHandle(e) {
        if (e.keyCode !== 13) return
        this.props.enterHanle(this.state.value)
    }
}
export default SearchInput