import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="city-list-container">
                <h3>城市列表</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick = {this.clickHandle.bind(this,'北京')}>北京</span>
                    </li>
                    <li>
                        <span onClick = {this.clickHandle.bind(this,'上海')}>上海</span>
                    </li>
                    <li>
                        <span onClick = {this.clickHandle.bind(this,'郑州')}>郑州</span>
                    </li>
                    <li>
                        <span onClick = {this.clickHandle.bind(this,'西安')}>西安</span>
                    </li>
                    <li>
                        <span onClick = {this.clickHandle.bind(this,'深圳')}>深圳</span>
                    </li>
                    <li>
                        <span onClick = {this.clickHandle.bind(this,'南京')}>南京</span>
                    </li>
                    <li>
                        <span onClick = {this.clickHandle.bind(this,'重庆')}>重庆</span>
                    </li>
                    <li>
                        <span onClick = {this.clickHandle.bind(this,'天津')}>天津</span>
                    </li>
                    <li>
                        <span onClick = {this.clickHandle.bind(this,'武汉')}>武汉</span>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidMount () {
        console.log(this.props.changeFN())
    }
    clickHandle (newCity) {
        console.log(newCity)
        this.props.changeFN(newCity)
    }
}

export default CityList