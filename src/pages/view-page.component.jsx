import { Route, Switch } from 'react-router-dom';
import ViewSection from '../components/note-view/view-section.component';
import EditSection from '../components/note-view/edit-section.component';

const ViewPage = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.path}`} component={ViewSection} />
            <Route Path={`${match.path}/edit`} component={EditSection} />
        </Switch>
    )
}

export default ViewPage;
