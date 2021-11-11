import {updateSingleAnnouncement} from "./announcements-api";

export const deleteAnnouncement = async (httpFunction, announcementId, historyObj) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
        await httpFunction(announcementId);
        historyObj.replace('/announcements');
    }
}

export const updateAnnouncement = async (locationObj, historyObj, data) => {
    await updateSingleAnnouncement(locationObj.state.id, data);
    historyObj.replace('/announcements');
}
