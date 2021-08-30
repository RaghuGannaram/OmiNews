import React, { Component } from 'react';
import {connect} from 'react-redux';
import Welcome from "./Welcome";
import SignIn from "./SignIn";
import ArchiveFeed from "./ArchiveFeed";
import {signInAction, signInSucceededAction, signOutAction, showWelcomePageAction} from "../redux"

export class MainSpace extends Component {

    
    render() {
        return (
            <>
                {this.props.showWelcome && <Welcome/>}
                {this.props.showSignIn && <SignIn/>}
                {this.props.isLoggedIn && <ArchiveFeed/>}
            </>
        )
    }
}


const mapStateToProps = state =>{
    return {
        isLoggedIn : state.LOGIN_STATUS,
        showSignIn:  state.SIGN_IN_PAGE,
        showWelcome: state.WELCOME_PAGE
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        signIn : () => dispatch(signInAction()),
        signInSucceededAction : () => dispatch(signInSucceededAction()),
        signOut : () =>dispatch(signOutAction()),
        showWelcomePage: () => dispatch(showWelcomePageAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainSpace)