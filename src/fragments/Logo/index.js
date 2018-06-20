import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import logo from '../../assets/serverless-logo.svg';
import s from './styles.css'


export default class Logo extends Component{

  render(){
    return(
      <Link to='/' className={s.logo}>
        <img
          id='logo'
          src={logo}
          width={177}
          height={30}
          ref={logo => { this.logo = logo }}
        />
        <span className={s.logoText}>
          serverless
        </span>
      </Link>
    )
  }


}
