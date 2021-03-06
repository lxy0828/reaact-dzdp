import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    ddd () {
        console.log(99999)
    }
    clickHandler(){
        console.log(this.ddd())
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>点击</button>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>正在加载...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取位置信息
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.userInfoActions.update({
            cityName: cityName
        })

        // 更改状态,一般在数据请求之后更新状态
        this.setState({
            initDone: true
        })
    }
}

// -------------------redux react 绑定--------------------
// 把state作为属性传到组件中，如果只要设置，传入一个空
function mapStateToProps(state) {
    return {
    }
}
// 把action作为属性传递到当前组件中，当前组件用this.props接收
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
