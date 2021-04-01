import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentNote, selectIsNoteDeleting } from '../../redux/note/note-selectors';
import { deleteNoteStart, updateUpdateStatus } from '../../redux/note/note-actions';


const ViewSection = ({ currentNote, history, match, deleteNote, isDeleting, updateUpdateStatus }) => {
  const { id, title, body } = currentNote;
  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    updateUpdateStatus()
  })
  const handleEdit = () => {
    history.push(`${match.path}/edit`)
  }

  const handleDeleteEnable = () => {
    setHidden(false)
  }
  const handleCancel = () => {
    setHidden(true)
  }

  const handleDelete = () => {
    deleteNote(id)
  }


  return (
    <div className="w-full max-w-4xl flex flex-col rounded-t border-2 border-white md:border-blue-600 overflow-hidden md:mb-6">
      <div className="w-full border-b-2 border-red-500 font-serif font-medium md:text-center text-gray-700 text-lg  p-2 break-words"> {title} </div>
      <div className="w-full h-auto text-lg text-gray-700 py-4 md:p-4 md:h-64 overflow-y-auto break-words "> {body} </div>
      <div className="fixed bottom-0 left-0 md:static w-full text-center md:text-right border-t-2 p-2 md:p-6 bg-blue-700">
        <div
          onClick={() => handleEdit()}
          className="w-auto cursor-pointer inline-flex bg-red-600 hover:bg-red-700 text-white font-medium px-16 py-3 rounded-lg mr-4 mb-4 sm:mb-0"
        >
          Edit
        </div>
        <div
          onClick={() => handleDeleteEnable()}
          className="w-auto cursor-pointer inline-flex text-red-600 border border-red-600 bg-white font-medium px-8 py-3 rounded-lg shadow-lg"
        >
          Delete
        </div>
      </div>

      <div style={{ background: 'rgb(0,0,0,0.1)' }} className={`${hidden ? 'hidden' : 'flex'} absolute top-0 left-0 w-full h-screen flex items-center justify-center px-4`}>
        <div className={`w-full md:max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden`}>
          <div className="text-red-600 font-medium mb-6 bg-red-200 px-12 py-6 mb-16"> ! Are you sure you want to permanently delete this note?</div>
          <div className="w-full text-center md:text-right py-8 md:p-8">
            <div className="w-auto cursor-pointer inline-flex bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg mr-4 mb-2 sm:mb-0" onClick={() => handleCancel()}>Cancel</div>
            {
              isDeleting === "Deleted" ? history.push('/notes')
                : <div className="w-auto cursor-pointer inline-flex text-red-600 border border-red-600 font-medium px-8 py-3 rounded-lg" onClick={() => handleDelete()}>{isDeleting}</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentNote: selectCurrentNote,
  isDeleting: selectIsNoteDeleting
})

const mapDispatchToProps = dispatch => ({
  deleteNote: id => dispatch(deleteNoteStart(id)),
  updateUpdateStatus: () => dispatch(updateUpdateStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewSection)
