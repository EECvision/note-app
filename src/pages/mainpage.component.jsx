import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WritePage from './write-page.component';
import ViewPage from './view-page.component';
import NoteDisplay from '../components/note/note-display.component'

const MainPage=({match})=>{
    return(
        <Switch className="w-full">
            <Route exact path={`${match.path}`} component={NoteDisplay}/>
            <Route path={`${match.path}/write`} component={WritePage}/>
            <Route path={`${match.path}/view`}  component={ViewPage}/>                
        </Switch>
    )
}

export default MainPage

