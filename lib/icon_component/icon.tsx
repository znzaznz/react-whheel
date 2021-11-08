import './importAll'
import React from "react";
import './styles.scss'

interface configProps {
    name: string;
}

const Icon: React.FunctionComponent<configProps> = (props) => {

    const {name} = props

    return (<span>
        <svg>
            <use xlinkHref={`#${name}`}/>
        </svg>
    </span>)
}

export default Icon