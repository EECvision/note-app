import React, { useState } from 'react';
import { WritePageHeader } from '../components/page-header.component';
import { connect } from 'react-redux';
import { saveNoteStart } from '../redux/note/note-actions';
import { createStructuredSelector } from 'reselect';
import { selectIsNoteSaving } from '../redux/note/note-selectors';

const WritePage = ({ history, saveNote, isSaving }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [warn, setWarn] = useState(false)
    const handleSave = () => {
        if (!title || !body) return setWarn(true)
        saveNote({ title, body })
    }

    return (
        <div className="w-full bg-white flex flex-col items-center justify-start">
            <div className="w-full fixed top-0 left-0 bg-white"><WritePageHeader clickHandler={handleSave} isSaving={isSaving} history={history}/></div>
            <div className="mt-16 md:mt-24 w-full px-4 md:px-0" />
            <div className=" w-full max-w-4xl flex flex-col rounded-lg border-2 border-white md:border-gray-500 overflow-hidden mb-6 p-3">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border-2 border-gray-400 focus:outline-none focus:border-blue-500 font-sans text-gray-700 text-lg rounded-lg p-2 mb-6"
                    type="text"
                    maxLength="50"
                    placeholder={`${warn ? 'Title is required' : 'Title max=50 chars'}`} 
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    style={{ height: '24rem' }}
                    className="w-full text-lg text-gray-700 border-2 border-gray-400 focus:outline-none focus:border-blue-500 rounded-lg p-2 mb-6"
                    placeholder={`${ warn ? 'This field cannot be empty' : 'Drop your notes...' }`}
                />
                <div className={"w-full hidden md:block text-right"}>
                    {
                        isSaving === "Saved"
                            ? history.push('/notes')
                            : <div onClick={() => handleSave()} className="w-auto cursor-pointer inline-flex bg-red-600 hover:bg-red-700 text-white font-medium px-16 py-3 rounded">{isSaving}</div>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isSaving: selectIsNoteSaving
})

const mapDispatchToProps = dispatch => ({
    saveNote: note => dispatch(saveNoteStart(note)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WritePage);
