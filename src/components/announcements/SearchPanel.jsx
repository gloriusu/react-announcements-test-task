import React from 'react';
import classes from './SearchPanel.module.scss';

const SearchPanel = props => {
    return (
        <div className={classes['search-panel']}>
            <h1>Search Panel</h1>
            <input
                type={props.type}
                onChange={props.onChange}
                onFocus={props.onFocus}
                placeholder='Search Announcement...'
            />
        </div>

    );
};

export default SearchPanel;