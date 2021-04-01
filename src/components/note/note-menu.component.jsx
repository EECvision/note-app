import NoteItem from './note-item.component';
import { createStructuredSelector } from 'reselect';
import { selectNotes } from '../../redux/note/note-selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const NoteMenu = ({ notes, history, match }) => {

    const handleClick = () => {
        history.push(`${match.path}/write`)
    }

    return (
        <div className="w-full flex items-start justify-center px-4 md:px-0">
            <div className="w-full md:max-w-2xl lg:max-w-5xl flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-center md:justify-start mb-4 px-2">
                    <div className="w-auto text-white text-2xl px-2 border-b-2 border-white bg-red-600 md:opacity-90">Your Notes </div>
                </div>
                <div className="relative w-full flex flex-wrap justify-evenly md:justify-start items-center">
                    <div onClick={handleClick} className="w-full md:max-w-xs  h-12 md:h-56 mb-4 md:mx-1 lg:mx-2 flex items-center justify-center cursor-pointer bg-white hover:bg-orange-100 rounded-lg text-red-500 text-lg font-medium border-2 border-gray-400 shadow-lg">
                        Add Note
                </div>

                    {
                        notes ?
                            notes.map((note) => (
                                <NoteItem key={note.id} {...note} />
                            ))
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    notes: selectNotes
})


export default withRouter(connect(mapStateToProps)(NoteMenu));