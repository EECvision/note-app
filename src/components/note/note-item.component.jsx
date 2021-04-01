import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentNote } from '../../redux/note/note-actions';

const NoteItem =({setCurrentNote, history, match, createdAt:{year, month, date, hour, minute}, title, body, id })=>{
    const handleClick =()=>{
        setCurrentNote({
            id,
            title,
            body
        })
        history.push(`${match.path}/view`)
    }

    return(
        <div onClick={handleClick} className=" hover:bg-orange-100 w-full md:max-w-xs md:mx-1 lg:mx-2  h-56 flex flex-col justify-between items-center cursor-pointer bg-white rounded-lg border-2 border-gray-300 shadow-lg mb-4 pb-4 pt-6 px-4">
            <div className="w-full border-b-2 border-orange-600 text-gray-700 focus:outline-none rounded-t-lg text-lg py-4 font-serif break-words">{title}</div>
            <div className="w-full flex items-center justify-between text-left text-gray-900 text-xs">
                <div className="flex items-center justify-center">
                    <div>{month + 1}</div>
                    <span>/</span>
                    <div>{date}</div>
                    <span>/</span>
                    <div>{year}</div>
                </div>
                <div className="flex items-center justify-center">
                    <div>{hour}</div>
                    <span>:</span>
                    <div>{minute}</div>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps=dispatch=>({
    setCurrentNote: note => dispatch(setCurrentNote(note))
})
export default withRouter(connect(null, mapDispatchToProps)(NoteItem))