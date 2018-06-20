import React, { PropTypes } from 'react';
import { Link } from "react-router"
import s from './styles.css';

const SubMenu = (props) => {

    const MenuClass = props.horizPos ? s.horizSubMenu : s.verticalSubMenu
    const secondClass = props.appliedClass == 'red' ? s.red : null

    return (
      <div className={MenuClass + " " + secondClass}>
        <nav>
          <ul>
            <li className={s.link}>
              <Link className={s.linkActive} to='/overview/'>overview</Link>
            </li>
            <li className={s.link}>
              <Link to='/usecases/'>usecases</Link>
            </li>
            <li className={s.link}>
              <Link to='/comparisons/'>comparisons</Link>
            </li>
            <li className={s.link}>
              <Link to='/casestudies/'>casestudies</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default SubMenu;
