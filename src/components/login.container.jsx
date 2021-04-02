import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Login from './login.component';
import WithSpinner from './with-spinner.component';
import { compose } from 'redux';
import { selectIsLoading } from '../redux/user/user-selectors';

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading
})

const LoginContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(Login)

export default LoginContainer;