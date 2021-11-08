import React from 'react';
import * as ReactDOM from 'react-dom'
import Icon from "./icon_component/icon";
import './styles.scss'

ReactDOM.render(<div className={'icon_section'}>
    <Icon name={'weibo'}/>
    <Icon name={'wechat'}/>
    <Icon name={'qq'} onClick={(e: React.MouseEvent<SVGElement | SVGUseElement>) => {
        console.log(e.currentTarget);
        console.log((e.target as SVGUseElement).href);
    }}/>
</div>, document.querySelector('#root'))