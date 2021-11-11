import React, {useEffect} from 'react';
import AnnouncementForm from "../components/announcements/AnnouncementForm";

import useHttp from '../hooks/use-http';
import {addAnnouncement} from "../lib/announcements-api";

import {useHistory} from "react-router-dom";

const AddAnnouncement = () => {

    const {sendRequest, status} = useHttp(addAnnouncement);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/announcements');
        }
    }, [history, status]);

    const addAnnouncementHandler = data => {
        sendRequest(data)
    }

    return (
        <div>
            <AnnouncementForm
                isLoading={status === 'loading'}
                // onAddAnnouncement={(data) => sendRequest(data)}
                onAddAnnouncement={addAnnouncementHandler}
            />
        </div>
    );
};

export default AddAnnouncement;