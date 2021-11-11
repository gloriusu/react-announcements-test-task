import axios from 'axios';

const FIREBASE_LINK = 'https://announcements-test-task-default-rtdb.europe-west1.firebasedatabase.app';


export const getAllAnnouncements = async () => {

    const transformedArray = [];

    try {
        const response = await axios.get(`${FIREBASE_LINK}/announcements.json`);
        const data = response.data;

        for (const key in data) {
            const singleAnnouncement = {
                id: key,
                ...data[key],
            };
            transformedArray.push(singleAnnouncement);
        }

    } catch (error) {
        console.log(...error);
    }

    return transformedArray;
}


export const addAnnouncement = async (data) => {
    try {
        await axios.post(`${FIREBASE_LINK}/announcements.json`, data);
    } catch (error) {
        console.log(error);
    }

    return null;
}


export const getSingleAnnouncement = async (announcementId) => {
    try {
        const response = await axios.get(`${FIREBASE_LINK}/announcements/${announcementId}.json`);
        const data = response.data;
        return {
            id: announcementId,
            ...data
        }
    } catch (error) {
        console.log(error);
    }

}

export const deleteSingleAnnouncement = async (announcementId) => {
    try {
        await axios.delete(`${FIREBASE_LINK}/announcements/${announcementId}.json`);
    } catch (error) {
        console.log(error);
    }
}

export const updateSingleAnnouncement = async (announcementId, data) => {
    try {
        await axios.put(`${FIREBASE_LINK}/announcements/${announcementId}.json`, data)
    } catch (error) {
        console.log(error);
    }
    return null;
}