import './importAll'
import React, {SVGAttributes} from "react";
import './styles.scss'

interface configProps extends SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<configProps> =
    ({
         name, className, ...rest
     }) => {
        return (<svg className={`${className ?? ''} react_wheels_icon`} {...rest}>
            <use xlinkHref={`#${name}`}/>
        </svg>)
    }

export default Icon