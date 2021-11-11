import React, {useState} from 'react';
import classes from './MainNavigation.module.scss';
import {GiHamburgerMenu} from "react-icons/gi";

import {Link, NavLink} from "react-router-dom";

const MainNavigation = () => {

    const [click, setClick] = useState(false);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to='/announcements'>
                    Announcements
                </Link>
            </div>

            <div
                className={classes['toggle-btn']}
                onClick={() => setClick(prevState => !prevState)}
            >
                <GiHamburgerMenu size={50}/>
            </div>
            <div className={click ? `${classes['nav-links']} ${classes['active-links']}` : classes['nav-links']}>
                <ul>
                    <li>
                        <NavLink
                            to='/announcements'
                            activeClassName={classes.active}
                            onClick={() => setClick(false)}
                        >
                            All announcements
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/add-announcement'
                            activeClassName={classes.active}
                            onClick={() => setClick(false)}
                        >
                            Add announcement
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href='https://github.com/gloriusu/react-announcements-test-task'
                            target='_blank'
                            rel='noreferrer'
                            // activeClassName={classes.active}
                            onClick={() => setClick(false)}
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default MainNavigation;