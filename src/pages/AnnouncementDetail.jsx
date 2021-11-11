import React, {Fragment, useEffect} from 'react';
import AnnouncementBody from "../components/announcements/AnnouncementBody";
import LoadingSpinner from "../components/ui/LoadingSpinner";

import useHttp from "../hooks/use-http";
import {getSingleAnnouncement} from "../lib/announcements-api";

import {useParams} from "react-router-dom";

const AnnouncementDetail = () => {

    const {sendRequest, status, data, error} = useHttp(getSingleAnnouncement, true);

    const {announcementId} = useParams();

    useEffect(() => {
        sendRequest(announcementId);
    }, [sendRequest, announcementId]);

    if (status === 'loading') {
        return (
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        );
    }

    if (error) {
        return <p className='centered'>{error}</p>
    }

    return (
        <Fragment>
            <AnnouncementBody
                title={data.title}
                description={data.description}
                date={data.date}
            />
        </Fragment>
    );
};

export default AnnouncementDetail;