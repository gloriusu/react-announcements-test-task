import React, {useEffect, useState, Fragment} from 'react';
import LoadingSpinner from "../components/ui/LoadingSpinner";

import useHttp from '../hooks/use-http';
import {getAllAnnouncements} from "../lib/announcements-api";
import AnnouncementsList from "../components/announcements/AnnouncementsList";
import SearchPanel from "../components/announcements/SearchPanel";

const Announcements = () => {

    const {sendRequest, status, data, error} = useHttp(getAllAnnouncements, true);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);

    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    if (status === 'loading') {
        return (
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        )
    }

    if (error) {
        return <p className='centered'>{error}</p>
    }

    const filterSearchQuery = () => {
        return data.filter(query => (
                query.title.toLowerCase().split(' ').find(
                    (matchText => matchText === searchQuery.toLowerCase()))
                || query.title.toLowerCase() === searchQuery.toLowerCase())
            || (query.description.toLowerCase().split(' ').find(
                    matchText => matchText === searchQuery.toLowerCase())
                || query.description.toLowerCase() === searchQuery.toLowerCase())
        )
    }

    const result = (isSearchActive && searchQuery.trim() !== '') ? filterSearchQuery() : data;

    return (
        <Fragment>
            <SearchPanel
                type="search"
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchActive(true)}
            />
            <AnnouncementsList announcements={result}/>
        </Fragment>
    );
};

export default Announcements;