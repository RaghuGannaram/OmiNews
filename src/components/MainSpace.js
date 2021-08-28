import React, { Component } from 'react';
import {connect} from 'react-redux';
import Welcome from "./Welcome";
import SignIn from "./SignIn";
import ArchiveFeed from "./ArchiveFeed";
import {signInAction, signInSucceededAction, signOutAction} from "../redux"

export class MainSpace extends Component {

    
    render() {
        return (
            <>
                {this.props.isLoggedIn ? <ArchiveFeed/> : this.props.showSignIn ? <SignIn/> : <Welcome/>}
            </>
        )
    }
}


const mapStateToProps = state =>{
    return {
        isLoggedIn : state.IS_LOGGED_IN,
        showSignIn:  state.SHOW_SIGN_IN
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        signIn : () => dispatch(signInAction()),
        signInSucceededAction : () => dispatch(signInSucceededAction()),
        signOut : () =>dispatch(signOutAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainSpace)