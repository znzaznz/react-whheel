import './importAll'
import React, {SVGAttributes} from "react";
import './styles.scss'
import {classes} from "../utils/utils";

interface configProps extends SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<configProps> =
    ({
         name, className, ...rest
     }) => {
        return (<svg className={`react_wheels_icon ${classes(className)}`} {...rest}>
            <use xlinkHref={`#${name}`}/>
        </svg>)
    }

export default Icon