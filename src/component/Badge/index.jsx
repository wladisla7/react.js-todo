import React from 'react'
import './Badge.scss'
import classNames from 'classnames'




const Badge = ({ color, onClick, className }) => (
    <i
        onClick={onClick}
        className={classNames('cr', { [`cr--${color}`]: color }, className)}
    ></i>
);

export default Badge;


 