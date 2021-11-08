import './importAll'
import React from "react";
import './styles.scss'

interface configProps {
    name: string;
    onClick?: React.MouseEventHandler<SVGElement>;  //鼠标事件的处理函数
}

const Icon: React.FunctionComponent<configProps> = (props) => {

    const {name, onClick} = props

    return (<svg className={'react_wheels_icon'} onClick={onClick}>
        <use xlinkHref={`#${name}`}/>
    </svg>)
}

export default Icon