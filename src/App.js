import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage.component';
import MainPage from './pages/mainpage.component';
import SignIn from './pages/sign-in.component';
import SignUp from './pages/sign-up.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';

import './App.css';

class App extends React.Component{
  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  
  render(){
    return(
      <div className="flex flex-col items-center justify-center">
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/notes' render={(props)=> !this.props.currentUser ? (<Redirect to='/' />) : (<MainPage {...props}/>) } />
            <Route path='/account/signIn' 
              render={(props)=> this.props.currentUser ? (<Redirect to='/notes' />) : (<SignIn {...props}/>) } />
            <Route exact path='/account/signUp' component={SignUp} />
        </Switch>
      </div>
    )  
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);