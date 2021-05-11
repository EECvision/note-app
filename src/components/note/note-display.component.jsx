import React from 'react';
import iconNote from '../../assets/icon-note.svg';
import iconNoteB from '../../assets/icon-note-2.svg';
import { MainPageHeader } from '../page-header.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { fetchNotesStart, updateDeleteStatus, updateSaveStatus, updateUpdateStatus } from '../../redux/note/note-actions';
import NoteMenuContainer from './note-menu.container';


class NoteDisplay extends React.Component {

    componentDidMount() {
        const { fetchNotesStart, currentUser, updateSaveStatus, updateDeleteStatus, updateUpdateStatus } = this.props;
        if (window.sessionStorage.reload === "false") {
            fetchNotesStart(currentUser);
            window.sessionStorage.reload = "true";
        }
        updateSaveStatus();
        updateDeleteStatus();
        updateUpdateStatus();
    }

    render() {
        return (
            <div className="relative w-full flex flex-col items-center justify-start bg-white">
                <div style={{ height: "24rem" }} className="absolute w-full flex flex-col items-center justify-start bg-red-700 lg:h-auto">
                    <div className="w-full z-50 fixed top-0 left-0 bg-red-700"><MainPageHeader /></div>
                    <div className="w-full hidden md:flex justify-between items-end mt-16">
                        <img className={`w-64 transform translate-x-4`} src={iconNoteB} alt="icon" />
                        <img className="w-64 " src={iconNote} alt="icon" />
                    </div>
                </div>
                <div className="w-full z-10 mt-20 md:mt-32">
                    <NoteMenuContainer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    fetchNotesStart: currentUser => dispatch(fetchNotesStart(currentUser)),
    updateSaveStatus: ()=> dispatch(updateSaveStatus()),
    updateDeleteStatus: ()=> dispatch(updateDeleteStatus()),
    updateUpdateStatus: ()=> dispatch(updateUpdateStatus())
})
export default connect(mapStateToProps, mapDispatchToProps)(NoteDisplay);


