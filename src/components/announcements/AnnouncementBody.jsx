import React from 'react';
import classes from './AnnouncementBody.module.scss';

import useHttp from '../../hooks/use-http';
import {deleteSingleAnnouncement} from "../../lib/announcements-api";
import {deleteAnnouncement} from "../../lib/operations";

import {useHistory, useParams} from "react-router-dom";

const AnnouncementBody = props => {

    const {sendRequest} = useHttp(deleteSingleAnnouncement);
    const history = useHistory();
    const {announcementId} = useParams();

    const deleteAnnouncementHandler = async () => {
        deleteAnnouncement(sendRequest, announcementId, history)
    }

    const editAnnouncement = () => {
        history.push('/add-announcement',
            {
                id: announcementId,
                title: props.title,
                description: props.description
            })
    }

    return (
        <section className={classes['single-announcement']}>
            <h1>{props.title}</h1>
            <div>
                <p>{props.description}</p>
            </div>
            <div className={classes.detail}>
                <div>
                    {props.date[0]}:
                    <span> {props.date[1]}</span>
                </div>
            </div>
            <div className={classes['buttons-wrapper']}>
                <button className='btn' onClick={editAnnouncement}>Edit Announcement</button>
                <button className='btn' onClick={deleteAnnouncementHandler}>Delete Announcement</button>
            </div>
        </section>
    );
};

export default AnnouncementBody;