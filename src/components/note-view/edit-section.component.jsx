import { useState } from 'react';
import { setCurrentNote } from '../../redux/note/note-actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentNote, selectIsNoteUpdating } from '../../redux/note/note-selectors';
import { updateNoteStart } from '../../redux/note/note-actions';
import { EditSectionHeader } from '../page-header.component';

const EditSection = ({ currentNote, history, updateNote, isUpdating }) => {
    const { id, title, body } = currentNote;

    const [editTitle, setEditTitle] = useState(title)
    const [editBody, setEditBody] = useState(body)

    async function handleDone() {
        if (!editTitle || !editBody) return;
        updateNote({ id, title: editTitle, body: editBody })
    }

    return (
        <div className="w-full flex items-center justify-center">
            <div className="fixed top-0 left-0 w-full bg-white"><EditSectionHeader clickHandler={handleDone} isUpdating={isUpdating} history={history}/></div>
            <div className="mt-16 md:mt-24 w-full max-w-4xl flex flex-col rounded-lg border-2 border-white md:border-gray-400 overflow-hidden mb-6 p-3">
                <input
                    onChange={(e) => setEditTitle(e.target.value)}
                    value={editTitle}
                    className="w-full border-2 border-gray-400 focus:outline-none focus:border-blue-500 font-serif text-gray-700 text-lg rounded-lg p-2 mb-6"
                    type="text"
                    maxLength="50"
                    placeholder="Title max=50 chars" />
                <textarea
                    onChange={(e) => setEditBody(e.target.value)}
                    value={editBody}
                    autoFocus={true}
                    style={{ height: '24rem' }}
                    className="w-full text-lg text-gray-700 border-2 border-gray-400 focus:outline-none focus:border-blue-500 rounded-lg p-4 mb-6"
                    placeholder="Drop your note..." />
                <div className={"w-full hidden md:block text-right"}>
                    {
                        isUpdating === "Done"
                            ? history.push('/notes/view')
                            : <div onClick={() => handleDone()} className="w-auto cursor-pointer inline-flex bg-red-600 hover:bg-red-700 text-white font-medium px-16 py-3 rounded-lg">{isUpdating}</div>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentNote: selectCurrentNote,
    isUpdating: selectIsNoteUpdating
})

const mapDispatchToProps = dispatch => ({
    setCurrentNote: note => dispatch(setCurrentNote(note)),
    updateNote: note => dispatch(updateNoteStart(note))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSection)