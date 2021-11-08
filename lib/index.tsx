import React from 'react';
import * as ReactDOM from 'react-dom'
import Icon from "./icon_component/icon";
import './styles.scss'

ReactDOM.render(<div className={'icon_section'}>
    <Icon name={'weibo'}/>
    <Icon name={'wechat'}/>
    <Icon name={'qq'} onClick={() => {
        console.log(1);
    }}/>
</div>, document.querySelector('#root'))