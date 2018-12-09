import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
//最外层App，一个主文件index.jsx，默认得IndexRoute Home,
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>//
                    <Route path='/city' component={City}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
// '/search/:type(/:keyword)'
// type必填参数，keyword可选参数
export default RouterMap
