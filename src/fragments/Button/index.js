import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import logo from '../../assets/serverless-logo.svg';
import s from './styles.css'

const Btn = props => {

        let btnClass;
        if (props.btnClassType == 'white'){
            btnClass = s.white
        }

        return(
          <Link to={props.to} className={s.btn + " " + btnClass}>{props.text}</Link>
        )

}

export default  Btn
