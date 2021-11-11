import React, {Fragment} from 'react';
import AnnouncementsItem from "./AnnouncementsItem";
import classes from './AnnouncementsList.module.scss';

const AnnouncementsList = props => {
    return (
        <Fragment>
            {props.announcements.length === 0 && <p className='centered focused'>No matches found!</p>}
            <ul className={classes.list}>
                {props.announcements.map(item => (
                    <AnnouncementsItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        date={item.date}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default AnnouncementsList;