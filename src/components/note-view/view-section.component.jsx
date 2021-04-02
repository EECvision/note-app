import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentNote, selectIsNoteDeleting } from '../../redux/note/note-selectors';
import { deleteNoteStart, updateUpdateStatus } from '../../redux/note/note-actions';
import { ViewSectionHeader } from '../page-header.component';


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
    <div className="w-full flex items-center justify-center">
      <div className="fixed top-0 left-0 w-full bg-white"><ViewSectionHeader clickHandler={handleDeleteEnable} /></div>
      <div className="mt-16 md:mt-24 w-full max-w-4xl flex flex-col border-2 border-white md:border-gray-500 overflow-hidden md:mb-6 p-4 rounded-lg">
        <div className="w-full font-serif font-medium text-left text-gray-700 text-lg py-2 px-4 break-words border border-gray-500 rounded-lg mb-2"> {title} </div>
        <div
          style={{ height: '24rem' }}
          className="w-full text-lg text-gray-700 p-4 overflow-y-auto break-words border border-gray-500 rounded-lg mb-2">
          {body}
        </div>

        <div
            onClick={handleEdit}
            className="md:hidden w-12 h-12 flex items-center justify-center fixed bottom-0 right-0 cursor-pointer bg-red-600 hover:bg-red-700 text-white font-medium p-4 rounded-full mr-4 mb-4"
        >
          <i className="fas fa-plus"></i>
        </div>

        <div className="hidden md:block w-full text-center md:text-right p-2">
          <div
            onClick={handleEdit}
            className="w-auto cursor-pointer inline-flex bg-red-600 hover:bg-red-700 text-white font-medium px-16 py-3 rounded mr-4 mb-4 sm:mb-0"
          >
            Edit
          </div>
          <div
            onClick={handleDeleteEnable}
            className="w-auto cursor-pointer inline-flex text-red-600 border border-red-600 bg-white font-medium px-8 py-3 rounded shadow-lg"
          >
            Delete
        </div>
        </div>

        <div style={{ background: 'rgb(0,0,0,0.1)' }} className={`${hidden ? 'hidden' : 'flex'} absolute top-0 left-0 w-full h-screen flex items-center justify-center px-4`}>
          <div className={`w-full md:max-w-lg bg-white rounded shadow-2xl overflow-hidden`}>
            <div className="text-red-600 font-medium mb-6 bg-red-200 px-6 py-4 mb-8"> ! Are you sure you want to permanently delete this note?</div>
            <div className="w-full text-center md:text-right py-4 md:px-4">
              <div className="w-auto cursor-pointer inline-flex bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-1 rounded mr-4 mb-2 sm:mb-0" onClick={() => handleCancel()}>Cancel</div>
              {
                isDeleting === "Deleted" ? history.push('/notes')
                  : <div className="w-auto cursor-pointer inline-flex text-red-600 border border-red-600 font-medium px-8 py-1 rounded" onClick={() => handleDelete()}>{isDeleting}</div>
              }
            </div>
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
