import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignUpForm from './sign-up-form.component';
import WithSpinner from '../with-spinner.component';
import { compose } from 'redux';
import { selectIsLoading } from '../../redux/user/user-selectors';

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading
})

const SignUpFormContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(SignUpForm)

export default SignUpFormContainer;