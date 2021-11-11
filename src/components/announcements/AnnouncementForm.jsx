import React, {useState} from 'react';
import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from './AnnouncementForm.module.scss';

import {updateAnnouncement} from "../../lib/operations";
import {useLocation, useHistory} from "react-router-dom";


const AnnouncementForm = props => {

    const history = useHistory();
    const location = useLocation();
    const initialTitle = location.state ? location.state.title : '';
    const initialDescription = location.state ? location.state.description : '';
    const [enteredTitle, setEnteredTitle] = useState(initialTitle);
    const [enteredDescription, setEnteredDescription] = useState(initialDescription);
    const [isTitleTouched, setIsTitleTouched] = useState(false);
    const [isDescriptionTouched, setIsDescriptionTouched] = useState(false);


    const updateAnnouncementHandler = () => {
        updateAnnouncement(location, history, {
            title: enteredTitle,
            description: enteredDescription,
            date: ['Edited', new Date().toLocaleString()]
        })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (location.state
            && location.state.title === enteredTitle
            && location.state.description === enteredDescription
        ) {
            history.push('/announcements');
        }

        if (location.state
            && (location.state.title !== enteredTitle
                || location.state.description !== enteredDescription)
        ) {
            updateAnnouncementHandler();
        }

        if (!location.state) {
            props.onAddAnnouncement({
                title: enteredTitle,
                description: enteredDescription,
                date: ['Added', new Date().toLocaleString()]
            });
        }
    }

    const info = <p className={classes.info}>
        Text must be longer than 4 characters!
    </p>

    const buttonText = location.state ? 'Edit' : 'Add';

    return (
        <Card>

            <form
                className={classes.form}
                onSubmit={formSubmitHandler}
            >

                {props.isLoading && (
                    <div className={classes.loading}>
                        <LoadingSpinner/>
                    </div>
                )}

                <div className={classes['form-control']}>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        id='title'
                        value={enteredTitle}
                        onChange={(e) => setEnteredTitle(e.target.value)}
                        onFocus={() => setIsTitleTouched(true)}
                    />
                    {isTitleTouched && enteredTitle.trim().length < 5 && info}
                </div>

                <div className={classes['form-control']}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='text'
                        rows='7'
                        value={enteredDescription}
                        onChange={(e) => setEnteredDescription(e.target.value)}
                        onFocus={() => setIsDescriptionTouched(true)}
                    />
                    {isDescriptionTouched && enteredDescription.trim().length < 5 && info}
                </div>

                <div className={classes.actions}>
                    <button
                        className='btn'
                        disabled={(enteredTitle.trim().length < 5) || enteredDescription.trim().length < 5}
                    >
                        {buttonText} Announcement
                    </button>
                </div>

            </form>
        </Card>
    );
}


export default AnnouncementForm;