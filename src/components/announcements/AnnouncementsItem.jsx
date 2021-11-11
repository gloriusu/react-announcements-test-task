import React, {Fragment} from 'react';
import classes from './AnnouncementsItem.module.scss';

import {Link} from 'react-router-dom';

const AnnouncementsItem = (props) => {

    let slicedText = null;
    if (props.description.length > 150) {
        slicedText = <Fragment>
            <p>{props.description.slice(0, 150)}...</p>
            <div className={classes.link}>
                <Link to={`/announcements/${props.id}`}>
                    View More...
                </Link>
            </div>
        </Fragment>
    }

    const description = slicedText ? slicedText : <p>{props.description}</p>;

    return (
        <li className={classes.item}>
            <section className={classes.announcement}>
                <h1>{props.title}</h1>
                <div className={classes['description-wrapper']}>
                    {description}
                </div>
                <div className={classes.detail}>
                    <div>
                        {props.date[0]}:
                        <span> {props.date[1]}</span>
                    </div>
                    <Link to={`/announcements/${props.id}`}>
                        <button className='btn'>View Announcement</button>
                    </Link>
                </div>
            </section>
        </li>
    );
};

export default AnnouncementsItem;