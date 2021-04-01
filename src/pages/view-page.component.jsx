import { WritePageHeader } from '../components/page-header.component';
import { Route, Switch } from 'react-router-dom';
import ViewSection from '../components/note-view/view-section.component';
import EditSection from '../components/note-view/edit-section.component';

const ViewPage = ({ match }) => {
    return (
        <div className="w-full">
            <div className="fixed top-0 left-0 w-full bg-white"><WritePageHeader /></div>
            <div className="mt-16 md:mt-24 w-full flex flex-col items-center justify-start bg-white px-4 md:px-0">
                <Switch>
                    <Route exact path={`${match.path}`} component={ViewSection} />
                    <Route Path={`${match.path}/edit`} component={EditSection} />
                </Switch>
            </div>
        </div>
    )
}

export default ViewPage;
