import React from 'react';
import Layout from "./components/layout/Layout";

import {Route, Switch, Redirect} from "react-router-dom";
import AddAnnouncement from "./pages/AddAnnouncement";
import Announcements from "./pages/Announcements";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import NotFound from "./pages/NotFound";

const App = () => {

    return (
        <Layout>
            <Switch>
                <Route exact path='/'>
                    <Redirect to={'/announcements'}/>
                </Route>
                <Route exact path='/announcements'>
                    <Announcements/>
                </Route>
                <Route path='/add-announcement'>
                    <AddAnnouncement/>
                </Route>
                <Route path='/announcements/:announcementId'>
                    <AnnouncementDetail/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </Layout>
    );
};

export default App;
