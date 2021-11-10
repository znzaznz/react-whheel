import React from 'react';
import * as ReactDOM from 'react-dom'
import Icon from "./icon_component/icon";
import './styles.scss'

ReactDOM.render(<div className={'icon_section'}>
    <Icon name={'weibo'}/>
    <Icon name={'wechat'}/>
    <Icon name={'qq'}
          className={'qq'}
          onClick={(e: React.MouseEvent<SVGElement | SVGUseElement>) => {
              console.log(123);
          }}
          onMouseEnter={e=>{
              console.log(345);
          }}
          onTouchStart={e=>{
              console.log(783);
          }}
    />
</div>, document.querySelector('#root'))