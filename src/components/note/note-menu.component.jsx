import { useState, useEffect } from 'react';
import NoteItem from './note-item.component';
import { createStructuredSelector } from 'reselect';
import { selectNotes } from '../../redux/note/note-selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const NoteMenu = ({ notes, history, match }) => {
  const [typing, setTyping] = useState('');
  const [windowWidth, setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    type();
    const removeResize = window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
    return () => (removeResize)
  },[])
  
  async function type() {
    let txt = 'Note taking is fun!';
    for (let i = 0; i < txt.length; i++) {
      await typeWriter(txt, i)
    }
  }

  function typeWriter(txt, i){
    return new Promise( resolve => {
      setTimeout(() => {
        resolve(setTyping(t => t + txt.charAt(i)))
      }, 100);
    })
  }

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
            !notes && windowWidth <= 768
              ?
              <div className="w-full md:max-w-xs md:mx-1 lg:mx-2  h-56 flex flex-col justify-start items-center cursor-pointer bg-white rounded-lg border-2 border-gray-300 shadow-lg mb-4 pb-4 pt-6 px-4">
                <div className="w-full border-b-2 border-orange-600 text-gray-700 focus:outline-none text-lg py-4 font-serif break-words mb-4">Note-on: </div>
                <div className="w-full flex items-center justify-between text-left text-2xl text-gray-700">
                  {typing}
                </div>
              </div>
              : null
          }

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