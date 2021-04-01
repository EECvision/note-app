import { selectIsNoteFetching } from '../../redux/note/note-selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import NoteMenu from './note-menu.component';
import WithSpinner from '../with-spinner.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    loading: selectIsNoteFetching
})

const NoteMenuContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(NoteMenu)

export default NoteMenuContainer;